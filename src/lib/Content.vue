<template>
  <main class="wheel-layout-content">
    <slot></slot>
  </main>
</template>

<script lang="ts">
  export default {
    name: 'wheel-content'
  }
</script>

<style lang="scss">
.wheel-layout-content {
  flex-grow: 1;
}
</style>