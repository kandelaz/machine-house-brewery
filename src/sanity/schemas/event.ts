import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'date', title: 'Date & Time', type: 'datetime', validation: r => r.required() }),
    defineField({ name: 'endDate', title: 'End Time (optional)', type: 'datetime' }),
    defineField({ name: 'description', type: 'text', rows: 4 }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'category',
      type: 'string',
      options: { list: ['regular', 'special', 'arsenal', 'march-mildness', 'cask-club'] },
      initialValue: 'regular',
    }),
    defineField({ name: 'isFeatured', title: 'Featured on Homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'externalLink', title: 'Ticket / RSVP Link', type: 'url' }),
  ],
  orderings: [
    { title: 'Date (newest)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
    { title: 'Date (upcoming)', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'image' },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: subtitle ? new Date(subtitle).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : '',
      media,
    }),
  },
})
