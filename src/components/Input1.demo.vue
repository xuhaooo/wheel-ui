<demo>
输入框类型：4 种输入类型
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