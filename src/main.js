import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
//加载mockServer
import './mock/mockServer'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'
import './filters'

Vue.component(Button.name,Button)
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
