export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'hotelName',
      title: 'Hotel Name (English)',
      type: 'string',
    },
    {
      name: 'hotelName_ka',
      title: 'Hotel Name (Georgian)',
      type: 'string',
    },
    {
      name: 'hotelName_ru',
      title: 'Hotel Name (Russian)',
      type: 'string',
    },
    {
      name: 'hotelName_fr',
      title: 'Hotel Name (French)',
      type: 'string',
    },
    {
      name: 'hotelName_de',
      title: 'Hotel Name (German)',
      type: 'string',
    },
    {
      name: 'hotelName_it',
      title: 'Hotel Name (Italian)',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline (English)',
      type: 'string',
    },
    {
      name: 'tagline_ka',
      title: 'Tagline (Georgian)',
      type: 'string',
    },
    {
      name: 'tagline_ru',
      title: 'Tagline (Russian)',
      type: 'string',
    },
    {
      name: 'tagline_fr',
      title: 'Tagline (French)',
      type: 'string',
    },
    {
      name: 'tagline_de',
      title: 'Tagline (German)',
      type: 'string',
    },
    {
      name: 'tagline_it',
      title: 'Tagline (Italian)',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
  ],
}
