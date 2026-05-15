export default {
  name: 'chatbotKnowledge',
  title: 'Chatbot Knowledge Base',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question (English)',
      type: 'string',
    },
    {
      name: 'question_ka',
      title: 'Question (Georgian)',
      type: 'string',
    },
    {
      name: 'question_ru',
      title: 'Question (Russian)',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer (English)',
      type: 'text',
    },
    {
      name: 'answer_ka',
      title: 'Answer (Georgian)',
      type: 'text',
    },
    {
      name: 'answer_ru',
      title: 'Answer (Russian)',
      type: 'text',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
  ],
}
