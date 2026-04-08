export default {
  name: 'popup',
  title: 'Promotional Popup',
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
      type: 'text',
    },
    {
      name: 'description_ka',
      title: 'Description (Georgian)',
      type: 'text',
    },
    {
      name: 'description_ru',
      title: 'Description (Russian)',
      type: 'text',
    },
    {
      name: 'description_fr',
      title: 'Description (French)',
      type: 'text',
    },
    {
      name: 'description_de',
      title: 'Description (German)',
      type: 'text',
    },
    {
      name: 'description_it',
      title: 'Description (Italian)',
      type: 'text',
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
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: false,
    },
  ],
}
