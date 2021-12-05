<template>
  <h1>Input 示例</h1>
  <Demo :component="Input1Demo"></Demo>
  <Demo :component="Input2Demo"></Demo>
</template>

<script>
import Input1Demo from '../Input/Input1.demo.vue'
import Input2Demo from '../Input/Input2.demo.vue'

export default {
  setup(){
    return {
      Input1Demo,
      Input2Demo
    }
  }
}
</script>