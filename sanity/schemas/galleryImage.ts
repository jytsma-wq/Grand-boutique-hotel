export default {
  name: 'galleryImage',
  title: 'Gallery Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Rooms', value: 'rooms' },
          { title: 'Restaurant', value: 'restaurant' },
          { title: 'Bar', value: 'bar' },
          { title: 'Spa', value: 'spa' },
          { title: 'Pool', value: 'pool' },
          { title: 'Exterior', value: 'exterior' },
          { title: 'Events', value: 'events' },
        ],
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
}
