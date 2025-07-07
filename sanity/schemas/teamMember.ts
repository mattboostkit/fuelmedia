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
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (Rule) => Rule.required().min(0),
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
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'personalNote',
      title: 'Personal Note',
      type: 'text',
      description: 'Personal interests or fun facts (displayed in italics)',
      rows: 2,
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