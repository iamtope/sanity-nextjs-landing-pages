export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6282310452a20f03dbf3034b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u89qbsy2',
                  apiId: '62307e10-6ef4-4dc1-9e4a-b014f6204d91'
                },
                {
                  buildHookId: '62823104fde8f3047475cae9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s3akbcji',
                  apiId: '773a8381-263d-491c-94d8-00bdc528218a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamtope/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s3akbcji.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
