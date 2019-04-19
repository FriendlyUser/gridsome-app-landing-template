// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, 
  faPhone, 
  faBatteryEmpty, 
  faBullhorn, 
  faChessKing, 
  faDumpsterFire,
  faEuroSign,
  faTrademark,
  faBarcode,
  faCogs,
  faLaughBeam
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBatteryEmpty)
library.add(faBullhorn)
library.add(faChessKing)
library.add(faDumpsterFire)
library.add(faEuroSign)
library.add(faTrademark)
library.add(faCoffee)
library.add(faPhone)
library.add(faLaughBeam)
library.add(faCogs)
library.add(faBarcode)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  head.meta.push({
    name: 'keywords',
    content: 'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
  })

  head.meta.push({
    name: 'description',
    content: 'Gridsome Portfolio Starter'
  })

  head.meta.push({
    name: 'author',
    content: 'Andre Madarang'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })

  head.link.push({
    ref: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
    integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
    crossorigin: 'anonymous'
  })
  // head.script.push({
  //   src: "https://unpkg.com/ionicons@4.5.5/dist/ionicons.js"
  // })
}


