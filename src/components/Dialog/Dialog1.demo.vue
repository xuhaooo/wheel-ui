<demo>
常规使用
</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="visible" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <div>内容 1</div>
        <div>内容 2</div>
      </template>
      <template v-slot:title>
        标题
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {Button, Dialog} from '../../lib/index'
import { ref } from 'vue'
export default {
  components: {
    Dialog,
    Button
  },
  setup(){
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {}
    return {
      visible,
      toggle,
      f1,
      f2
    }
  }
}
</script>