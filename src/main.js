// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueResource from 'vue-resource'
import store from './store/index'
import { Swipe, SwipeItem, Loadmore } from 'mint-ui'

Vue.component(Loadmore.name, Loadmore)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

export default {app, router, store}
