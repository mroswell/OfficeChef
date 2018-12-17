import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@babel/polyfill'
import './registerServiceWorker'

import Vuetify from 'vuetify/lib'
import { VueMasonryPlugin } from 'vue-masonry'
import 'vuetify/src/stylus/app.styl'

Vue.use(VueMasonryPlugin)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
