import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const locales = ['en', 'ka', 'ru', 'tr', 'ar', 'he'];
const errors = [];

function assertNoDuplicateKeys(source, file) {
  let index = 0;

  const fail = (message) => {
    const line = source.slice(0, index).split('\n').length;
    throw new Error(`${file}:${line}: ${message}`);
  };
  const skipWhitespace = () => {
    while (/\s/.test(source[index] ?? '')) index += 1;
  };
  const parseString = () => {
    const start = index;
    if (source[index] !== '"') fail('expected a JSON string');
    index += 1;
    while (index < source.length) {
      if (source[index] === '\\') {
        index += 2;
        continue;
      }
      if (source[index] === '"') {
        index += 1;
        return JSON.parse(source.slice(start, index));
      }
      index += 1;
    }
    fail('unterminated JSON string');
  };
  const parseValue = (jsonPath) => {
    skipWhitespace();
    if (source[index] === '{') return parseObject(jsonPath);
    if (source[index] === '[') return parseArray(jsonPath);
    if (source[index] === '"') {
      parseString();
      return;
    }
    const match = source.slice(index).match(/^(?:-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null)/);
    if (!match) fail('invalid JSON value');
    index += match[0].length;
  };
  const parseObject = (jsonPath) => {
    index += 1;
    skipWhitespace();
    const keys = new Set();
    if (source[index] === '}') {
      index += 1;
      return;
    }
    while (index < source.length) {
      skipWhitespace();
      const key = parseString();
      if (keys.has(key)) fail(`duplicate key "${[...jsonPath, key].join('.')}"`);
      keys.add(key);
      skipWhitespace();
      if (source[index] !== ':') fail('expected a colon');
      index += 1;
      parseValue([...jsonPath, key]);
      skipWhitespace();
      if (source[index] === '}') {
        index += 1;
        return;
      }
      if (source[index] !== ',') fail('expected a comma');
      index += 1;
    }
    fail('unterminated JSON object');
  };
  const parseArray = (jsonPath) => {
    index += 1;
    skipWhitespace();
    let item = 0;
    if (source[index] === ']') {
      index += 1;
      return;
    }
    while (index < source.length) {
      parseValue([...jsonPath, String(item)]);
      item += 1;
      skipWhitespace();
      if (source[index] === ']') {
        index += 1;
        return;
      }
      if (source[index] !== ',') fail('expected a comma');
      index += 1;
    }
    fail('unterminated JSON array');
  };

  parseValue([]);
  skipWhitespace();
  if (index !== source.length) fail('unexpected content after the JSON document');
}

function flatten(value, prefix = '', result = {}) {
  for (const [key, child] of Object.entries(value)) {
    const current = prefix ? `${prefix}.${key}` : key;
    if (child && typeof child === 'object' && !Array.isArray(child)) {
      flatten(child, current, result);
    } else {
      result[current] = child;
    }
  }
  return result;
}

function placeholders(value) {
  return [...String(value).matchAll(/\{\s*([A-Za-z][A-Za-z0-9_]*)\b/g)]
    .map((match) => match[1])
    .sort();
}

const messages = {};
for (const locale of locales) {
  const file = path.join(root, 'messages', `${locale}.json`);
  const source = fs.readFileSync(file, 'utf8');
  try {
    assertNoDuplicateKeys(source, path.relative(root, file));
    messages[locale] = flatten(JSON.parse(source));
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error));
  }
}

const english = messages.en ?? {};
const englishKeys = Object.keys(english).sort();
const sharedEnglishAllowlist = new Set([
  'wellness.membership.tiers.vip.name',
  'common.usd',
  'common.gel',
]);
const identicalEnglishAllowlist = {
  ka: new Set(sharedEnglishAllowlist),
  ru: new Set([...sharedEnglishAllowlist, 'home.dining.bar.name', 'bar.name']),
  tr: new Set([
    ...sharedEnglishAllowlist,
    'nav.bar', 'nav.wellness', 'nav.spa', 'home.dining.bar.name',
    'rooms.amenities.minibar', 'restaurant.breakfastPage.vegan', 'bar.name',
    'wellness.membership.tiers.premium.name', 'gallery.categories.spa',
    'gallery.categories.batumi', 'chatbot.name',
  ]),
  ar: new Set(sharedEnglishAllowlist),
  he: new Set(sharedEnglishAllowlist),
};

const forbiddenByLocale = {
  ka: ['ბილიარდ', 'ცურვის მანქან', 'სამონტაჟო სია', 'რეკოვერიის', 'ფოუმ როლერ'],
  ar: ['بوتانيك', 'أردية فاخرة وجوارب', 'تسجيل الدخول', 'تسجيل الخروج'],
  he: ['איפה מותרות', '24 "'],
};

for (const locale of locales) {
  const values = messages[locale];
  if (!values) continue;
  const keys = Object.keys(values).sort();
  const missing = englishKeys.filter((key) => !(key in values));
  const extra = keys.filter((key) => !(key in english));
  if (missing.length) errors.push(`${locale}: missing keys: ${missing.join(', ')}`);
  if (extra.length) errors.push(`${locale}: extra keys: ${extra.join(', ')}`);

  for (const key of keys) {
    const value = values[key];
    if (typeof value !== 'string') {
      errors.push(`${locale}.${key}: message must be a string`);
      continue;
    }
    if (!value.trim()) errors.push(`${locale}.${key}: message is empty`);
    if (/&#\d+;|&[a-z]+;/i.test(value)) errors.push(`${locale}.${key}: contains an HTML entity`);
    if (/[\u3400-\u9fff]/u.test(value)) errors.push(`${locale}.${key}: contains an unexpected Han character`);
    if (key in english && placeholders(value).join('|') !== placeholders(english[key]).join('|')) {
      errors.push(`${locale}.${key}: placeholders differ from English`);
    }
    if (
      locale !== 'en' &&
      value === english[key] &&
      /[A-Za-z]{3}/.test(value) &&
      !identicalEnglishAllowlist[locale].has(key)
    ) {
      errors.push(`${locale}.${key}: unexpectedly identical to English`);
    }
    for (const fragment of forbiddenByLocale[locale] ?? []) {
      if (value.includes(fragment)) errors.push(`${locale}.${key}: contains known mistranslation "${fragment}"`);
    }
  }
}

const visibleLiteralAllowlist = new Set([
  'Instagram', 'Facebook', 'WHATSAPP', 'Batumi Boutique Hotel', '&copy;',
  'Our menu', 'Culinary offerings', 'Exclusive', "Chef&apos;s specials",
  'Reserve this experience',
]);
const visibleAttributes = new Set(['alt', 'aria-label', 'placeholder', 'title']);
const contentProperties = new Set(['alt', 'desc', 'description', 'details', 'time', 'pricePer', 'courses']);

function checkVisibleLiterals(file) {
  const source = fs.readFileSync(file, 'utf8');
  const sourceFile = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const relative = path.relative(root, file);
  const report = (node, text) => {
    const normalized = text.replace(/\s+/g, ' ').trim();
    if (!/[A-Za-z]{3}/.test(normalized) || visibleLiteralAllowlist.has(normalized)) return;
    const { line } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
    errors.push(`${relative}:${line + 1}: visible hardcoded text "${normalized}"`);
  };
  const visit = (node) => {
    if (ts.isJsxText(node)) report(node, node.text);
    if (
      ts.isJsxAttribute(node) &&
      node.initializer &&
      ts.isStringLiteral(node.initializer) &&
      visibleAttributes.has(node.name.text)
    ) {
      report(node, node.initializer.text);
    }
    if (
      relative !== 'src/components/hotel/pages/RestaurantPage.tsx' &&
      ts.isPropertyAssignment(node) &&
      ts.isStringLiteral(node.initializer) &&
      contentProperties.has(node.name.getText(sourceFile).replace(/["']/g, ''))
    ) {
      report(node.initializer, node.initializer.text);
    }
    if (relative !== 'src/components/hotel/pages/RestaurantPage.tsx' && ts.isArrayLiteralExpression(node)) {
      for (const element of node.elements) {
        if (ts.isStringLiteral(element) && /[A-Za-z]{3}\s+[A-Za-z]{3}/.test(element.text)) {
          report(element, element.text);
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
}

const publicRoots = [path.join(root, 'src', 'app', '[locale]'), path.join(root, 'src', 'components', 'hotel')];
for (const publicRoot of publicRoots) {
  const pending = [publicRoot];
  while (pending.length) {
    const current = pending.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const target = path.join(current, entry.name);
      if (entry.isDirectory()) pending.push(target);
      else if (entry.name.endsWith('.tsx')) checkVisibleLiterals(target);
    }
  }
}

if (errors.length) {
  console.error(`i18n validation failed (${errors.length} issue${errors.length === 1 ? '' : 's'}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`i18n validation passed: ${locales.length} locales × ${englishKeys.length} messages.`);
