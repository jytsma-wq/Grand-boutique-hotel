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
      name: 'heroTitle_fr',
      title: 'Hero Title (French)',
      type: 'string',
    },
    {
      name: 'heroTitle_de',
      title: 'Hero Title (German)',
      type: 'string',
    },
    {
      name: 'heroTitle_it',
      title: 'Hero Title (Italian)',
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
      name: 'heroSubtitle_fr',
      title: 'Hero Subtitle (French)',
      type: 'string',
    },
    {
      name: 'heroSubtitle_de',
      title: 'Hero Subtitle (German)',
      type: 'string',
    },
    {
      name: 'heroSubtitle_it',
      title: 'Hero Subtitle (Italian)',
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
            { name: 'label_fr', title: 'Label (French)', type: 'string' },
            { name: 'label_de', title: 'Label (German)', type: 'string' },
            { name: 'label_it', title: 'Label (Italian)', type: 'string' },
          ],
        },
      ],
    },
  ],
}
