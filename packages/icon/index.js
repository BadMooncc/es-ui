import icon from './src/icon'

icon.install = function(Vue) {
  Vue.component(icon.name, icon)
}

export default icon