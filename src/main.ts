import { createApp } from 'vue'
import './global.css'
import App from './App.vue'
import { createPrismic } from '@prismicio/vue'
import { prismic } from './lib/prismicClient'
import router from './router'

createApp(App)
  .use(router)
  .use(createPrismic({ client: prismic }))
  .mount('#app')
