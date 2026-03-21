import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from './config';

type Messages = Record<string, unknown>;

function mergeMessages(base: Messages, override: Messages): Messages {
  const merged: Messages = { ...base };

  for (const [key, value] of Object.entries(override)) {
    const baseValue = merged[key];

    if (
      baseValue &&
      typeof baseValue === 'object' &&
      !Array.isArray(baseValue) &&
      value &&
      typeof value === 'object' &&
      !Array.isArray(value)
    ) {
      merged[key] = mergeMessages(baseValue as Messages, value as Messages);
      continue;
    }

    merged[key] = value;
  }

  return merged;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'en';
  }

  const defaultMessages = (await import('../../messages/en.json')).default as Messages;
  const localeMessages = locale === 'en'
    ? defaultMessages
    : ((await import(`../../messages/${locale}.json`)).default as Messages);
  
  return {
    locale,
    messages: mergeMessages(defaultMessages, localeMessages),
  };
});
