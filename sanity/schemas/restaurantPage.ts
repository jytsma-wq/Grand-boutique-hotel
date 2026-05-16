const localizedStringFields = (name: string, title: string) => [
  { name, title: `${title} (English)`, type: 'string' },
  { name: `${name}_ka`, title: `${title} (Georgian)`, type: 'string' },
  { name: `${name}_ru`, title: `${title} (Russian)`, type: 'string' },
  { name: `${name}_tr`, title: `${title} (Turkish)`, type: 'string' },
  { name: `${name}_he`, title: `${title} (Hebrew)`, type: 'string' },
  { name: `${name}_ar`, title: `${title} (Arabic)`, type: 'string' },
]

const localizedTextFields = (name: string, title: string) => [
  { name, title: `${title} (English)`, type: 'text', rows: 2 },
  { name: `${name}_ka`, title: `${title} (Georgian)`, type: 'text', rows: 2 },
  { name: `${name}_ru`, title: `${title} (Russian)`, type: 'text', rows: 2 },
  { name: `${name}_tr`, title: `${title} (Turkish)`, type: 'text', rows: 2 },
  { name: `${name}_he`, title: `${title} (Hebrew)`, type: 'text', rows: 2 },
  { name: `${name}_ar`, title: `${title} (Arabic)`, type: 'text', rows: 2 },
]

const menuSectionsField = {
  name: 'menuSections',
  title: 'Menu Sections',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'sectionKey',
          title: 'Section Key',
          type: 'string',
          description: 'Stable key used by the website, for example breakfast-hot-dishes or starters.',
        },
        ...localizedStringFields('title', 'Title'),
        ...localizedTextFields('subtitle', 'Subtitle'),
        {
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                ...localizedStringFields('name', 'Name'),
                ...localizedTextFields('description', 'Description'),
                ...localizedStringFields('origin', 'Origin'),
                ...localizedStringFields('region', 'Region'),
                {
                  name: 'year',
                  title: 'Year',
                  type: 'string',
                },
                ...localizedStringFields('ingredients', 'Ingredients'),
                {
                  name: 'priceUsd',
                  title: 'Price USD',
                  type: 'number',
                },
                {
                  name: 'priceGel',
                  title: 'Price GEL',
                  type: 'number',
                },
                {
                  name: 'included',
                  title: 'Included',
                  type: 'boolean',
                },
                {
                  name: 'image',
                  title: 'Item Image',
                  type: 'image',
                  options: { hotspot: true },
                  fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
                },
              ],
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'sectionKey',
        },
      },
    },
  ],
}

export default {
  name: 'restaurantPage',
  title: 'Restaurant Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (English)',
      type: 'string',
    },
    {
      name: 'title_ka',
      title: 'Title (Georgian)',
      type: 'string',
    },
    {
      name: 'title_ru',
      title: 'Title (Russian)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description (English)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'description_ka',
      title: 'Description (Georgian)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'description_ru',
      title: 'Description (Russian)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }] }],
    },
    {
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day', type: 'string' },
            { name: 'hours', title: 'Hours', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'menuPdf',
      title: 'Menu PDF',
      type: 'file',
    },
    menuSectionsField,
  ],
}
