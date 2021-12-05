<demo>
常规使用（4 种状态）
</demo>

<template>
  <lion-input value="Input(default)"></lion-input>
  <lion-input value="Input(disabled)" disabled></lion-input>
  <lion-input value="Input(readonly)" readonly></lion-input>
  <lion-input value="Input(error)" error="对不起，你的输入有误"></lion-input>
</template>

<script lang="ts">
import Input from '../lib/Input.vue'
export default {
  components: {'lion-input': Input}
}
</script>