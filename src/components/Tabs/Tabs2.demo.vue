<demo>
支持 disabled
</demo>

<template>
  <Tabs v-model:selected="value" disabled="导航3">
    <Tab title="导航1">内容 1</Tab>
    <Tab title="导航2">内容 2</Tab>
    <Tab title="导航3">内容 3</Tab>
  </Tabs>
</template>

<script>
import Tab from '../../lib/Tab.vue'
import Tabs from '../../lib/Tabs.vue'
import {ref} from 'vue'

export default {
  components: {Tab, Tabs},
  setup() {
    const value = ref('导航1')
    return {value}
  }
}
</script>

<style lang="scss" scoped>

</style>