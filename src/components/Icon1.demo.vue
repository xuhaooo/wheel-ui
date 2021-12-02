<demo>
常规使用
</demo>

<template>
  <lion-icon class="icon" name="all"></lion-icon>
  <lion-icon class="icon" name="close"></lion-icon>
  <lion-icon class="icon" name="conditions"></lion-icon>
  <lion-icon class="icon" name="double-arro-right"></lion-icon>
  <lion-icon class="icon" name="double-arrow-left"></lion-icon>
  <lion-icon class="icon" name="download"></lion-icon>
</template>

<script lang="ts">
import Icon from '../lib/Icon.vue'
export default {
  components: {
    'lion-icon': Icon
  }
}
</script>

<style scoped>
.icon {
  height: 30px;
  width: 30px;
}
</style>