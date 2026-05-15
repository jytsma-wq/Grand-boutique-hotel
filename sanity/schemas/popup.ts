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
