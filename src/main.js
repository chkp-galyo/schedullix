import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'


import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'

Vue.use(vueEventCalendar, {locale: 'en'})

import '@/assets/scss/main.scss'

Vue.config.productionTip = false
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDoi7G5B3YG0m2gZ_mxK_uTd7OmkRYvaWE',
    libraries: 'places', 
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

