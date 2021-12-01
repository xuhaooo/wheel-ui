<template>
  <h1>Layout 示例</h1>
  <Demo :component="Layout1Demo"></Demo>
  <Demo :component="Layout2Demo"></Demo>
  <Demo :component="Layout3Demo"></Demo>
</template>

<script lang="ts">
import Layout1Demo from './Layout1.demo.vue'
import Layout2Demo from './Layout2.demo.vue'
import Layout3Demo from './Layout3.demo.vue'
import Demo from './Demo.vue'

export default {
  components: {Demo},
  setup(){
    return {
      Layout1Demo,
      Layout2Demo,
      Layout3Demo
    }
  }
}
</script>

<style lang="scss" scoped>

</style>