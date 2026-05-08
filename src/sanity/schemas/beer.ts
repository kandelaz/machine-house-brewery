import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'beer',
  title: 'Beer',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['cask', 'draft', 'guest', 'wine', 'non-alcoholic'] },
      validation: r => r.required(),
    }),
    defineField({ name: 'style', title: 'Style', type: 'string' }),
    defineField({ name: 'abv', title: 'ABV (%)', type: 'number' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'isActive', title: 'Currently Pouring', type: 'boolean', initialValue: true }),
    defineField({ name: 'isFeatured', title: 'Featured on Homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
  orderings: [
    { title: 'Category', name: 'categoryAsc', by: [{ field: 'category', direction: 'asc' }, { field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'image' },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : '',
      media,
    }),
  },
})
