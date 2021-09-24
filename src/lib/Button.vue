<template>
  <button class="cat-button" :class="`theme-${theme}`">
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  }
}
</script>
<style scoped lang="scss">
  div {
    border: 1px solid red;
  }
</style>