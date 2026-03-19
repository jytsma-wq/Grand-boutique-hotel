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
      name: 'title_fr',
      title: 'Title (French)',
      type: 'string',
    },
    {
      name: 'title_de',
      title: 'Title (German)',
      type: 'string',
    },
    {
      name: 'title_it',
      title: 'Title (Italian)',
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
      name: 'description_fr',
      title: 'Description (French)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'description_de',
      title: 'Description (German)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'description_it',
      title: 'Description (Italian)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
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
  ],
}
