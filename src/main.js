import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApiService  from './common/service/api'


Vue.config.productionTip = false

import '@/assets/stylus/reset.css'
import '@/assets/stylus/gloabal.css'

ApiService.init()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
