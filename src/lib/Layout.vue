<template>
  <section class="wheel-layout" :class="{hasSider: classes}">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {ref, onMounted} from 'vue'

export default {
  name: 'wheel-layout',
  setup(props, context){
    const classes = ref(false)
    onMounted(() => {
      context.slots.default().forEach(item => {
        if(item.type.name.toLowerCase() === "wheel-sider"){
          classes.value = true
        }
      })
    })
    return {classes}
  }
}
</script>

<style lang="scss">
.wheel-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #f0f2f5;
}
.hasSider {
  flex-direction: row;
}
</style>