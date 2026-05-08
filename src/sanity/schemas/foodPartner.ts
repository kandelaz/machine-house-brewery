import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'foodPartner',
  title: 'Food Partner',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'cuisine', title: 'Cuisine Type', type: 'string' }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
    defineField({ name: 'logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'website', type: 'url' }),
    defineField({ name: 'phone', type: 'string' }),
    defineField({ name: 'delivers', title: 'Delivers to Taproom', type: 'boolean', initialValue: true }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'cuisine', media: 'logo' },
  },
})
