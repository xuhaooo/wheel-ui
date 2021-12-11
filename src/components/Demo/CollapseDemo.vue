<template>
  <h1>Collapse 示例</h1>
  <Demo :component="Collapse1Demo"/>
  <Demo :component="Collapse2Demo"/>
  <Attr :columns="columns" :data="data" />
</template>

<script lang="ts">
import Collapse1Demo from '../Collapse/Collapse1.demo.vue'
import Collapse2Demo from '../Collapse/Collapse2.demo.vue'
import { ref } from 'vue'
import { columns } from '../../lib/attrData'

export default {
  setup() {
    const data = [
      {
        params: 'activeName',
        desc: '选中项',
        type: 'array',
        select: '--',
        default: '[]',
      },
      {
        params: 'single',
        desc: '是否单一展示',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'title',
        desc: '标题（必填）',
        type: 'string',
        select: '--',
        default: '--',
      },
      {
        params: 'name',
        desc: '唯一标识（必填）',
        type: 'string',
        select: '--',
        default: '--',
      }
    ]
    return {
      Collapse1Demo,
      Collapse2Demo,
      columns,
      data
    }
  },
};
</script>