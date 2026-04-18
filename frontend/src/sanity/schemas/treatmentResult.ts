export default {
  name: 'treatmentResult',
  title: 'Clinical Result (Before/After)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Treatment Name', type: 'string' },
    { name: 'category', title: 'Category (Skin/Hair/Slimming)', type: 'string' },
    { name: 'beforeImage', title: 'Before Image', type: 'image', options: { hotspot: true } },
    { name: 'afterImage', title: 'After Image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Clinical Description', type: 'text' }
  ]
}
