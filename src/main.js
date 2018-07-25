import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'


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

