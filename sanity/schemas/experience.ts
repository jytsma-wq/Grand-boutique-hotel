export default {
  name: 'experience',
  title: 'Experiences',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
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
      name: 'image',
      title: 'Image',
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
      name: 'distance',
      title: 'Distance from Hotel',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
}
