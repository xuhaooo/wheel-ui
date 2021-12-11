<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo"/>
  <Demo :component="Tabs2Demo"/>
  <Attr :columns="columns" :data="data" />
</template>
<script lang="ts">
import Tabs1Demo from '../Tabs/Tabs1.demo.vue'
import Tabs2Demo from '../Tabs/Tabs2.demo.vue'
import {columns} from '../../lib/attrData'
import {ref} from 'vue'

export default {
  setup(){
    const data = ref([
      {
        params: 'selected',
        desc: '默认显示 tab',
        type: 'string',
        select: '--',
        default: '--'
      },
      {
        params: 'disabled',
        desc: '禁用 tab',
        type: 'string / boolean',
        select: '--',
        default: 'false'
      }
    ])
    return {
      Tabs1Demo,
      Tabs2Demo,
      columns,
      data
    }
  }
}
</script>