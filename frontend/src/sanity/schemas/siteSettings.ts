export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'churchName', title: 'Clinic Name', type: 'string' },
    { name: 'logo', title: 'Site Logo', type: 'image' },
    { name: 'phone', title: 'Contact Phone', type: 'string' },
    { name: 'email', title: 'Contact Email', type: 'string' },
    { name: 'address', title: 'Clinic Address', type: 'text' },
    {
      name: 'headerLinks',
      title: 'Header Navigation',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'text', type: 'string' },
        { name: 'href', type: 'string' }
      ]}]
    },
    {
      name: 'footerSocials',
      title: 'Footer Social Media',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'platform', type: 'string' },
        { name: 'url', type: 'url' }
      ]}]
    }
  ]
}
