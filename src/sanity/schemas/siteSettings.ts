import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'announcementBar', title: 'Announcement Bar Text', type: 'string' }),
    defineField({ name: 'announcementActive', title: 'Show Announcement Bar', type: 'boolean', initialValue: false }),
    defineField({ name: 'instagramUrl', type: 'url' }),
    defineField({ name: 'facebookUrl', type: 'url' }),
    defineField({ name: 'untappdUrl', type: 'url' }),
    defineField({ name: 'arsenalNavActive', title: 'Show Arsenal link in nav', type: 'boolean', initialValue: false }),
    defineField({
      name: 'hours',
      title: 'Taproom Hours',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'days', type: 'string', title: 'Days' },
          { name: 'hours', type: 'string', title: 'Hours' },
        ],
      }],
    }),
    defineField({ name: 'address', type: 'string' }),
    defineField({ name: 'phone', type: 'string' }),
    defineField({ name: 'newsletterHeading', type: 'string' }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
