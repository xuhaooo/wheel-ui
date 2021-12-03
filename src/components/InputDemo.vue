<template>
  <h1>Input 示例</h1>
  <Demo :component="Input1Demo"></Demo>
  <Demo :component="Input2Demo"></Demo>
</template>

<script>
import Demo from './Demo.vue'
import Input1Demo from './Input1.demo.vue'
import Input2Demo from './Input2.demo.vue'

export default {
  components: {Demo},
  setup(){
    return {
      Input1Demo,
      Input2Demo
    }
  }
}
</script>

<style lang="scss" scoped>

</style>