import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'   //解决移动端300ms的延迟

import toast from './components/common/toas/index.js'
Vue.config.productionTip = false



Vue.prototype.$bus = new Vue()  //事件总线
Vue.use(toast)                   //toast挂载
FastClick.attach(document.body) //挂载fastclick补丁  解决移动端300ms延迟问题
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
