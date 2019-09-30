<template>

  <button
    class="do__button"
    :disabled="disabled"
    :class="[
              type ? 'do__button--' + type : '',
              buttonSize ? 'do__button--' + buttonSize : '',
              {
                'is-disabled': buttonDisabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle
              }
            ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <slot></slot>
  </button>


  
</template>
<script>
  export default{
    name: 'DoButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
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
<style lang="sass">

</style>
