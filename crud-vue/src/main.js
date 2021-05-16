import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import less from 'less'

import axios from 'axios'
import '@/assets/css/default.css'

Vue.use(ElementUi)
Vue.use(less)
Vue.config.productionTip = false
Vue.prototype.$http =axios
axios.defaults.baseURL="http://localhost:3000"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
