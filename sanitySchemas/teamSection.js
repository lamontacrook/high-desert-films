export default {
  name: 'teamSection',
  title: 'Team Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string'
    },
    {
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'teamMember'}]
        }
      ]
    }
  ]
}