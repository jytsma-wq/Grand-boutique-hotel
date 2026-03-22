import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'hotelName',
      title: 'Hotel Name (Default)',
      type: 'string',
    }),
    defineField({
      name: 'hotelName_en',
      title: 'Hotel Name (English)',
      type: 'string',
    }),
    defineField({
      name: 'hotelName_ka',
      title: 'Hotel Name (Georgian)',
      type: 'string',
    }),
    defineField({
      name: 'hotelName_ru',
      title: 'Hotel Name (Russian)',
      type: 'string',
    }),
    defineField({
      name: 'hotelName_tr',
      title: 'Hotel Name (Turkish)',
      type: 'string',
    }),
    defineField({
      name: 'hotelName_he',
      title: 'Hotel Name (Hebrew)',
      type: 'string',
    }),
    defineField({
      name: 'hotelName_ar',
      title: 'Hotel Name (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline (Default)',
      type: 'string',
    }),
    defineField({
      name: 'tagline_en',
      title: 'Tagline (English)',
      type: 'string',
    }),
    defineField({
      name: 'tagline_ka',
      title: 'Tagline (Georgian)',
      type: 'string',
    }),
    defineField({
      name: 'tagline_ru',
      title: 'Tagline (Russian)',
      type: 'string',
    }),
    defineField({
      name: 'tagline_tr',
      title: 'Tagline (Turkish)',
      type: 'string',
    }),
    defineField({
      name: 'tagline_he',
      title: 'Tagline (Hebrew)',
      type: 'string',
    }),
    defineField({
      name: 'tagline_ar',
      title: 'Tagline (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'platform', type: 'string' },
        { name: 'url', type: 'url' }
      ]}],
    }),
  ],
});
