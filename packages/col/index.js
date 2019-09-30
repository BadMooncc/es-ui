import col from './src/col'
col.install = function(Vue) {
  Vue.component(col.name, col);
};

export default col;