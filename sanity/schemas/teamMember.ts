import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          validation: (Rule) => Rule.uri({
            scheme: ['http', 'https'],
          }),
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
          validation: (Rule) => Rule.uri({
            scheme: ['http', 'https'],
          }),
        }),
        defineField({
          name: 'github',
          title: 'GitHub',
          type: 'url',
          validation: (Rule) => Rule.uri({
            scheme: ['http', 'https'],
          }),
        }),
        defineField({
          name: 'website',
          title: 'Personal Website',
          type: 'url',
          validation: (Rule) => Rule.uri({
            scheme: ['http', 'https'],
          }),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})