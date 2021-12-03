<demo>
双向绑定
</demo>

<template>
  <lion-input v-model:value="message"></lion-input>
  <div>Input 组件的内容: {{ message }}</div>
</template>

<script lang="ts">
import Input from '../lib/Input.vue'
import {ref} from 'vue'

export default {
  components: {'lion-input': Input},
  setup() {
    const message = ref('试着编辑本行字')
    return {message}
  }
}
</script>