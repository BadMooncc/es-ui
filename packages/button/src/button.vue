<template>
<div>
  <button
    class="d__button"
    :class="[
              type ? 'd__button--' + type : '',
              buttonSize ? 'd__button--' + buttonSize : '',
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
</div>

  
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
<style lang="sass">

</style>
