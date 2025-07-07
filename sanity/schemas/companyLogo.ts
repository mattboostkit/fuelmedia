import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'companyLogo',
  title: 'Company Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'url',
      title: 'Company Website',
      type: 'url',
      description: 'Optional link to company website',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to show/hide this logo',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      subtitle: 'order',
    },
    prepare(selection) {
      const { title, media, subtitle } = selection
      return {
        title,
        media,
        subtitle: subtitle ? `Order: ${subtitle}` : '',
      }
    },
  },
})