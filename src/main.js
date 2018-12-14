import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuetify from 'vuetify/lib'

import { VueMasonryPlugin } from 'vue-masonry'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueMasonryPlugin)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
