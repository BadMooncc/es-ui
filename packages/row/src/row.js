export default {
  name: 'DoRow',
  props: {
    // 自定义元素标签
    tag: {
      type: String,
      default: 'div'
    },
    // 元素间隔
    gutter: Number,
  },
  computed: {
    style() {
      const ret = {};
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'do-row'
      ],
      style: this.style
    }, this.$slots.default);
  }
}