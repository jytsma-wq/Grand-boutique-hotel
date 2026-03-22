import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'Hero Title (Default)', type: 'string' }),
    defineField({ name: 'heroTitle_en', title: 'Hero Title (English)', type: 'string' }),
    defineField({ name: 'heroTitle_ka', title: 'Hero Title (Georgian)', type: 'string' }),
    defineField({ name: 'heroTitle_ru', title: 'Hero Title (Russian)', type: 'string' }),
    defineField({ name: 'heroTitle_tr', title: 'Hero Title (Turkish)', type: 'string' }),
    defineField({ name: 'heroTitle_he', title: 'Hero Title (Hebrew)', type: 'string' }),
    defineField({ name: 'heroTitle_ar', title: 'Hero Title (Arabic)', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle (Default)', type: 'string' }),
    defineField({ name: 'heroSubtitle_en', title: 'Hero Subtitle (English)', type: 'string' }),
    defineField({ name: 'heroSubtitle_ka', title: 'Hero Subtitle (Georgian)', type: 'string' }),
    defineField({ name: 'heroSubtitle_ru', title: 'Hero Subtitle (Russian)', type: 'string' }),
    defineField({ name: 'heroSubtitle_tr', title: 'Hero Subtitle (Turkish)', type: 'string' }),
    defineField({ name: 'heroSubtitle_he', title: 'Hero Subtitle (Hebrew)', type: 'string' }),
    defineField({ name: 'heroSubtitle_ar', title: 'Hero Subtitle (Arabic)', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'sections', title: 'Sections', type: 'array', of: [{ type: 'block' }] }),
  ],
});
