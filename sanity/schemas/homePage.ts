export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title (English)',
      type: 'string',
    },
    {
      name: 'heroTitle_ka',
      title: 'Hero Title (Georgian)',
      type: 'string',
    },
    {
      name: 'heroTitle_ru',
      title: 'Hero Title (Russian)',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle (English)',
      type: 'string',
    },
    {
      name: 'heroSubtitle_ka',
      title: 'Hero Subtitle (Georgian)',
      type: 'string',
    },
    {
      name: 'heroSubtitle_ru',
      title: 'Hero Subtitle (Russian)',
      type: 'string',
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
          description: 'Describe the image for accessibility and SEO',
        },
      ],
    },
    {
      name: 'welcomeSection',
      title: 'Welcome Section',
      type: 'object',
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
      ],
    },
    {
      name: 'featuredRooms',
      title: 'Featured Rooms',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'room' }] }],
    },
    {
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon Name', type: 'string' },
            { name: 'label', title: 'Label (English)', type: 'string' },
            { name: 'label_ka', title: 'Label (Georgian)', type: 'string' },
            { name: 'label_ru', title: 'Label (Russian)', type: 'string' },
          ],
        },
      ],
    },
  ],
}
