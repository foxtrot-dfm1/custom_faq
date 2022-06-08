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