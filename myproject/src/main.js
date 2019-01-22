import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'


Vue.use(ElementUI)

/* eslint-disable no-new */
// eslint-disable-next-line



new Vue({
  el: '#app',
  router,
  components:{App},
  template: '<App/>'
})

