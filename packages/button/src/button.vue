<template>
  <button 
    class="d-button"
    :class="[
              type ? 'd-button-' + type : '',
              buttonSize ? 'el-button--' + buttonSize : '',
              {
                'is-disabled': buttonDisabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle
              }
            ]"
  >
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'DdButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: String,
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },
    computed: {
      buttonDisabled() {
        return this.disabled
      },
      buttonSize() {
        return this.size
      }
    },
    data() {
      return {

      }
    }
  }
</script>
