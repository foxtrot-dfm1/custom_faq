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