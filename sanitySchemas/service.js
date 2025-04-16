export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Film', value: 'film'},
          {title: 'Video', value: 'video'},
          {title: 'Camera', value: 'camera'},
          {title: 'Clapperboard', value: 'clapperboard'},
          {title: 'TV', value: 'tv'},
          {title: 'Pen Tool', value: 'penTool'}
        ]
      }
    }
  ]
}