<demo>
双向绑定
</demo>

<template>
  <Input v-model:value="message"></Input>
  <div>Input 组件的内容: {{ message }}</div>
</template>

<script lang="ts">
import {Input} from '../../lib/index'
import {ref} from 'vue'

export default {
  components: {Input},
  setup() {
    const message = ref('试着编辑本行字')
    return {message}
  }
}
</script>