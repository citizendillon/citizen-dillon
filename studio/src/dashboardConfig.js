export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e742c6438140060e7380f73',
                  title: 'Sanity Studio',
                  name: 'citizen-dillon-studio',
                  apiId: 'e10a1218-dd21-40ca-8b57-cf5e9046b691'
                },
                {
                  buildHookId: '5e742c64a2acd3a31941a9c5',
                  title: 'Blog Website',
                  name: 'citizen-dillon',
                  apiId: '781269ef-dd63-499e-b64d-4aeff58b4f1d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/citizendillon/citizen-dillon',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://citizen-dillon.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
