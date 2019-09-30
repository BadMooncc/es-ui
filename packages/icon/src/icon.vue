<template>
  <i :class="'do-icon-' + name"></i>
</template>
<script>
export default {
  props: {
    name: {
      type: String
    }
  }
}
</script>