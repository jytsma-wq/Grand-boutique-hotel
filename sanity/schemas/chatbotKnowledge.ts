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
      name: 'question_fr',
      title: 'Question (French)',
      type: 'string',
    },
    {
      name: 'question_de',
      title: 'Question (German)',
      type: 'string',
    },
    {
      name: 'question_it',
      title: 'Question (Italian)',
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
      name: 'answer_fr',
      title: 'Answer (French)',
      type: 'text',
    },
    {
      name: 'answer_de',
      title: 'Answer (German)',
      type: 'text',
    },
    {
      name: 'answer_it',
      title: 'Answer (Italian)',
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
