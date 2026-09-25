import { createClient } from '@prismicio/client'

const repositoryName = import.meta.env.VITE_PRISMIC_REPOSITORY_NAME

if (!repositoryName) {
  throw new Error(
    'Missing VITE_PRISMIC_REPOSITORY_NAME. Add your Prismic repository name to the .env file.',
  )
}

export const prismic = createClient(repositoryName, {
  routes: [
    {
      type: 'homepage',
      path: '/',
    },
    {
      type: 'template_page',
      path: '/:uid',
    },
  ],
})
