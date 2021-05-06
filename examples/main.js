// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import marketingUi from '../packages/index'
import demoBlock from './components/DemoBlock.vue'
import hljs from 'highlight.js';
import helloWorld from './components/HelloWorld.vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'highlight.js/styles/color-brewer.css'

Vue.config.productionTip = false
Vue.component('demo-block', demoBlock)
Vue.component('hello-world', helloWorld)
Vue.use(elementUI);
Vue.use(marketingUi)

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('.hljs');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
