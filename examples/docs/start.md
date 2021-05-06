## 快速上手

本节将介绍如何在项目中使用 markting-ui。

### 引入 markting

目前我们仅提供了全量引入的方式。

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MarktingUI from 'markting-ui';
import App from './App.vue';
Vue.use(ElementUI);
Vue.use(MarktingUI);
new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 Markting 的引入。需要注意的是，该库是依赖于ElementUI的。所以在使用之前，请确保引入了ElementUI


### Element全局配置

在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 `size` 与 `zIndex` 字段。`size` 用于改变组件的默认尺寸，`zIndex` 设置弹框的初始 z-index（默认值：2000）。按照引入 Element 的方式，具体操作如下：

完整引入 Element：

```js
import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
```
按照以上设置，项目中所有拥有 `size` 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。

### 开始使用

至此，一个基于 Vue 和 Element 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。


