export default {
  name: 'socialLinks',
  title: 'Social Links',
  type: 'document',
  fields: [
    {
      name: 'links',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Facebook', value: 'facebook'}
                ]
              }
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            }
          ]
        }
      ]
    }
  ]
}