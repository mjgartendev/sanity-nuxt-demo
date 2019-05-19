export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'web-playground-studio',
                  apiId: '2db66277-8660-418c-a4cc-66952e89b59c'
                },
                {
                  buildHookId: '5ce0f7b8f019905a1ce457a9',
                  title: 'Events Website',
                  name: 'web-playground-web',
                  apiId: '1c3638bb-0053-4216-a449-e628533c32e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mjgartendev/web-playground',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://web-playground-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
