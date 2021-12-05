<template>
  <main class="lion-layout-content">
    <slot></slot>
  </main>
</template>

<script lang="ts">
  export default {
    name: 'lion-content'
  }
</script>

<style lang="scss">
.lion-layout-content {
  flex-grow: 1;
}
</style>