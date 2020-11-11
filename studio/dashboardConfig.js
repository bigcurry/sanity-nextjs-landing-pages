export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fac34b2a25d9a58da907b3b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-juyeqmxb',
                  apiId: '4ed5c9f4-be0b-48e5-8085-298389ce1c20'
                },
                {
                  buildHookId: '5fac34b2f8c92e46992cbf66',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mm3t7gn6',
                  apiId: '8e71bbdc-e7cf-4280-8015-270c4ba6cabe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bigcurry/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mm3t7gn6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
