// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import DDui from '../packages/index'
import demoBlock from './components/DemoBlock.vue'
import helloWorld from './components/HelloWorld.vue'

import 'highlight.js/styles/googlecode.css'
Vue.config.productionTip = false
Vue.component('demo-block', demoBlock)
Vue.component('hello-world', helloWorld)
Vue.use(DDui)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
