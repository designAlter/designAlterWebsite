// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import config from '../gridsome.config'

// bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//global stylesheet
import '~/assets/style/main.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  Vue.use(BootstrapVueIcons)
  head.link.push(
    {
      rel: 'stylesheet',
      href: encodeURI('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap')
    },
    {
      rel: 'stylesheet',
      href: encodeURI('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap')
    },
    {
      rel: 'sitemap',
      type: 'application/xml',
      title: 'Sitemap',
      href: '<code data-enlighter-language="generic" class="EnlighterJSRAW">'+config.siteUrl+'/sitemap.xml </code>'
    }
  )
}
