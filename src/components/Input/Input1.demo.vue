<demo>
常规使用（4 种状态）
</demo>

<template>
  <Input value="Input(default)"></Input>
  <Input value="Input(disabled)" disabled></Input>
  <Input value="Input(readonly)" readonly></Input>
  <Input value="Input(error)" error="对不起，你的输入有误"></Input>
</template>

<script lang="ts">
import {Input} from '../../lib/index'
export default {
  components: {Input}
}
</script>