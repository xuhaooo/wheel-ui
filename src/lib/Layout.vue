<template>
  <section class="lion-layout" :class="{hasSider: classes}">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {ref, onMounted} from 'vue'

export default {
  name: 'lion-layout',
  setup(props, context){
    const classes = ref(false)
    onMounted(() => {
      context.slots.default().forEach(item => {
        if(item.type.name.toLowerCase() === "lion-sider"){
          classes.value = true
        }
      })
    })
    return {classes}
  }
}
</script>

<style lang="scss" scoped>
.lion-layout {
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