<template>
  <h1>Input 示例</h1>
  <Demo :component="Input1Demo"></Demo>
  <Demo :component="Input2Demo"></Demo>
  <Attr :columns="columns" :data="data" />
</template>

<script>
import Input1Demo from '../Input/Input1.demo.vue'
import Input2Demo from '../Input/Input2.demo.vue'
import { ref } from 'vue'
import { columns } from '../../lib/attrData'

export default {
  setup(){
    const data = ref([
      {
        params: 'value',
        desc: '文本框的值',
        type: 'string',
        select: '--',
        default: '--'
      },
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: 'true / false',
        default: 'false'
      },
      {
        params: 'readonly',
        desc: '是否只读',
        type: 'boolean',
        select: 'true / false',
        default: 'false'
      },
      {
        params: 'error',
        desc: '错误信息',
        type: 'string',
        select: '--',
        default: '--'
      }
    ])
    return {
      Input1Demo,
      Input2Demo,
      columns,
      data
    }
  }
}
</script>