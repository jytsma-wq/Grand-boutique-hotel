export default {
  name: 'room',
  title: 'Rooms',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Room Name (English)',
      type: 'string',
    },
    {
      name: 'name_ka',
      title: 'Room Name (Georgian)',
      type: 'string',
    },
    {
      name: 'name_ru',
      title: 'Room Name (Russian)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'shortDescription',
      title: 'Short Description (English)',
      type: 'text',
    },
    {
      name: 'shortDescription_ka',
      title: 'Short Description (Georgian)',
      type: 'text',
    },
    {
      name: 'shortDescription_ru',
      title: 'Short Description (Russian)',
      type: 'text',
    },
    {
      name: 'fullDescription',
      title: 'Full Description (English)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'fullDescription_ka',
      title: 'Full Description (Georgian)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'fullDescription_ru',
      title: 'Full Description (Russian)',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'size',
      title: 'Size (m²)',
      type: 'number',
    },
    {
      name: 'maxGuests',
      title: 'Max Guests',
      type: 'number',
    },
    {
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Describe the image for accessibility and SEO',
            },
          ],
        },
      ],
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
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
}
