<template>
  <h1>Input 示例</h1>
  <Demo :component="Input1Demo"></Demo>
</template>

<script>
import Demo from './Demo.vue'
import Input1Demo from './Input1.demo.vue'

export default {
  components: {Demo},
  setup(){
    return {Input1Demo}
  }
}
</script>

<style lang="scss" scoped>

</style>