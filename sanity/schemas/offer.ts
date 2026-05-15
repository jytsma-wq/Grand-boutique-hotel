export default {
  name: 'offer',
  title: 'Offers',
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
      name: 'includes',
      title: 'Includes (English)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'includes_ka',
      title: 'Includes (Georgian)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'includes_ru',
      title: 'Includes (Russian)',
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
      name: 'validFrom',
      title: 'Valid From',
      type: 'datetime',
    },
    {
      name: 'validTo',
      title: 'Valid To',
      type: 'datetime',
    },
    {
      name: 'priceUsd',
      title: 'Price (USD)',
      type: 'number',
    },
    {
      name: 'priceGel',
      title: 'Price (GEL)',
      type: 'number',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
}
