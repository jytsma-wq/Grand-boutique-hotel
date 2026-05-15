export default {
  name: 'spaTreatment',
  title: 'Spa Treatments',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Treatment Name (English)',
      type: 'string',
    },
    {
      name: 'name_ka',
      title: 'Treatment Name (Georgian)',
      type: 'string',
    },
    {
      name: 'name_ru',
      title: 'Treatment Name (Russian)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
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
      name: 'benefits',
      title: 'Benefits (English)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'benefits_ka',
      title: 'Benefits (Georgian)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'benefits_ru',
      title: 'Benefits (Russian)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number',
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
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
}
