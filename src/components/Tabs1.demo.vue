<demo>
常规使用
</demo>

<template>
  <Tabs v-model:selected="value">
    <Tab title="导航1">内容 1</Tab>
    <Tab title="导航2">内容 2</Tab>
    <Tab title="导航3">内容 3</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs, Tab} from '../lib/index'
import { ref } from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup(){
    const value = ref('导航1')
    return {value}
  }
}
</script>