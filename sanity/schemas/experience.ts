const experienceSchema = {
  name: 'experience',
  title: 'Experiences',
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
  ],
};

export default experienceSchema;

