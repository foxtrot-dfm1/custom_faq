export const QuestionAnswerPairSchema = (title_question, title_answer) => {
  return {
    title: 'Question and Answer Pair',
    fieldsets: [
      {
        id: 'default',
        title: 'QA pair',
        fields: ['question', 'answer'],
      },
    ],
    properties: {
      question: {
        title: title_question,
        type: 'string',
        widget: 'textarea',
      },
      answer: {
        title: title_answer,
        type: 'string',
        widget: 'richtext',
      },
    },
    required: ['question', 'answer'],
  };
};

export const FAQSchema = {
  title: 'FAQ',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['faq_list'],
    },
  ],
  properties: {
    faq_list: {
      title: 'Question and Answers',
      type: 'faqlist',
    },
  },
  required: [],
};