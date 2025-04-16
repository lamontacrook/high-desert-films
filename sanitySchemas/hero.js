export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text'
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string'
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'URL to the background video'
    },
    {
      name: 'fallbackImage',
      title: 'Fallback Image',
      type: 'image',
      description: 'Image to show if video cannot be loaded',
      options: {
        hotspot: true
      }
    }
  ]
}