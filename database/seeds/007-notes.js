exports.seed = function(knex, Promise) {
  return knex('notes')
    .del()
    .then(function() {
      return knex('notes').insert([
        {
          noteTitle: 'Elmo1',
          note: JSON.stringify({
            object: 'value',
            document: {
              object: 'document',
              data: {},
              nodes: [
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    { object: 'text', text: 'This is editable ', marks: [] },
                    {
                      object: 'text',
                      text: 'rich',
                      marks: [{ object: 'mark', type: 'bold', data: {} }]
                    },
                    { object: 'text', text: ' text, ', marks: [] },
                    {
                      object: 'text',
                      text: 'much',
                      marks: [{ object: 'mark', type: 'italic', data: {} }]
                    },
                    { object: 'text', text: ' better than a ', marks: [] },
                    {
                      object: 'text',
                      text: '<textarea>',
                      marks: [{ object: 'mark', type: 'code', data: {} }]
                    },
                    { object: 'text', text: '!', marks: [] }
                  ]
                },
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    {
                      object: 'text',
                      text:
                        "Since it's rich text, you can do things like turn a selection of text ",
                      marks: []
                    },
                    {
                      object: 'text',
                      text: 'bold',
                      marks: [{ object: 'mark', type: 'bold', data: {} }]
                    },
                    {
                      object: 'text',
                      text:
                        ', or add a semantically rendered block quote in the middle of the page, like this:',
                      marks: []
                    }
                  ]
                },
                {
                  object: 'block',
                  type: 'block-quote',
                  data: {},
                  nodes: [{ object: 'text', text: 'A wise quote.', marks: [] }]
                },
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    {
                      object: 'text',
                      text: 'Try it out for yourself!',
                      marks: []
                    }
                  ]
                }
              ]
            }
          }),
          notesLessonID: 1,
          userID: 1
        },
        {
          noteTitle: 'Elmo2',
          note: JSON.stringify({
            object: 'value',
            document: {
              object: 'document',
              data: {},
              nodes: [
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    { object: 'text', text: 'This is editable ', marks: [] },
                    {
                      object: 'text',
                      text: 'rich',
                      marks: [{ object: 'mark', type: 'bold', data: {} }]
                    },
                    { object: 'text', text: ' text, ', marks: [] },
                    {
                      object: 'text',
                      text: 'much',
                      marks: [{ object: 'mark', type: 'italic', data: {} }]
                    },
                    { object: 'text', text: ' better than a ', marks: [] },
                    {
                      object: 'text',
                      text: '<textarea>',
                      marks: [{ object: 'mark', type: 'code', data: {} }]
                    },
                    { object: 'text', text: '!', marks: [] }
                  ]
                },
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    {
                      object: 'text',
                      text:
                        "Since it's rich text, you can do things like turn a selection of text ",
                      marks: []
                    },
                    {
                      object: 'text',
                      text: 'bold',
                      marks: [{ object: 'mark', type: 'bold', data: {} }]
                    },
                    {
                      object: 'text',
                      text:
                        ', or add a semantically rendered block quote in the middle of the page, like this:',
                      marks: []
                    }
                  ]
                },
                {
                  object: 'block',
                  type: 'block-quote',
                  data: {},
                  nodes: [{ object: 'text', text: 'A wise quote.', marks: [] }]
                },
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    {
                      object: 'text',
                      text: 'Try it out for yourself!',
                      marks: []
                    }
                  ]
                }
              ]
            }
          }),
          notesLessonID: 1,
          userID: 1
        },
        {
          noteTitle: 'Elmo3',
          note: JSON.stringify({
            object: 'value',
            document: {
              object: 'document',
              data: {},
              nodes: [
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    { object: 'text', text: 'This is editable ', marks: [] },
                    {
                      object: 'text',
                      text: 'rich',
                      marks: [{ object: 'mark', type: 'bold', data: {} }]
                    },
                    { object: 'text', text: ' text, ', marks: [] },
                    {
                      object: 'text',
                      text: 'much',
                      marks: [{ object: 'mark', type: 'italic', data: {} }]
                    },
                    { object: 'text', text: ' better than a ', marks: [] },
                    {
                      object: 'text',
                      text: '<textarea>',
                      marks: [{ object: 'mark', type: 'code', data: {} }]
                    },
                    { object: 'text', text: '!', marks: [] }
                  ]
                },
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    {
                      object: 'text',
                      text:
                        "Since it's rich text, you can do things like turn a selection of text ",
                      marks: []
                    },
                    {
                      object: 'text',
                      text: 'bold',
                      marks: [{ object: 'mark', type: 'bold', data: {} }]
                    },
                    {
                      object: 'text',
                      text:
                        ', or add a semantically rendered block quote in the middle of the page, like this:',
                      marks: []
                    }
                  ]
                },
                {
                  object: 'block',
                  type: 'block-quote',
                  data: {},
                  nodes: [{ object: 'text', text: 'A wise quote.', marks: [] }]
                },
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    {
                      object: 'text',
                      text: 'Try it out for yourself!',
                      marks: []
                    }
                  ]
                }
              ]
            }
          }),
          notesLessonID: 1,
          userID: 1
        },
        {
          noteTitle: 'Elmo4',
          note: JSON.stringify({
            object: 'value',
            document: {
              object: 'document',
              data: {},
              nodes: [
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    { object: 'text', text: 'This is editable ', marks: [] },
                    {
                      object: 'text',
                      text: 'rich',
                      marks: [{ object: 'mark', type: 'bold', data: {} }]
                    },
                    { object: 'text', text: ' text, ', marks: [] },
                    {
                      object: 'text',
                      text: 'much',
                      marks: [{ object: 'mark', type: 'italic', data: {} }]
                    },
                    { object: 'text', text: ' better than a ', marks: [] },
                    {
                      object: 'text',
                      text: '<textarea>',
                      marks: [{ object: 'mark', type: 'code', data: {} }]
                    },
                    { object: 'text', text: '!', marks: [] }
                  ]
                },
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    {
                      object: 'text',
                      text:
                        "Since it's rich text, you can do things like turn a selection of text ",
                      marks: []
                    },
                    {
                      object: 'text',
                      text: 'bold',
                      marks: [{ object: 'mark', type: 'bold', data: {} }]
                    },
                    {
                      object: 'text',
                      text:
                        ', or add a semantically rendered block quote in the middle of the page, like this:',
                      marks: []
                    }
                  ]
                },
                {
                  object: 'block',
                  type: 'block-quote',
                  data: {},
                  nodes: [{ object: 'text', text: 'A wise quote.', marks: [] }]
                },
                {
                  object: 'block',
                  type: 'paragraph',
                  data: {},
                  nodes: [
                    {
                      object: 'text',
                      text: 'Try it out for yourself!',
                      marks: []
                    }
                  ]
                }
              ]
            }
          }),
          notesLessonID: 1,
          userID: 1
        }
      ]);
    });
};
