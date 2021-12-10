<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button3Demo"/>
    <Demo :component="Button4Demo"/>
    <Demo :component="Button5Demo"/>
    <Attr :columns="columns" :data="data" />
  </div>
</template>
<script lang="ts">
import Button1Demo from '../Button/Button1.demo.vue'
import Button2Demo from '../Button/Button2.demo.vue'
import Button3Demo from '../Button/Button3.demo.vue'
import Button4Demo from '../Button/Button4.demo.vue'
import Button5Demo from '../Button/Button5.demo.vue'
import {columns} from '../../lib/attrData'
import {ref} from 'vue'
export default {
  setup(){
    const data = ref([
      {
        params: 'theme',
        desc: '按钮类型',
        type: 'string',
        select: 'button / link / text',
        default: 'button'
      },
      {
        params: 'size',
        desc: '按钮尺寸',
        type: 'string',
        select: 'big / normal / small',
        default: 'normal'
      },
      {
        params: 'level',
        desc: '按钮级别',
        type: 'string',
        select: 'main / normal / danger',
        default: 'normal'
      },
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: 'true / false',
        default: 'false'
      },
      {
        params: 'loading',
        desc: '加载中',
        type: 'boolean',
        select: 'true / false',
        default: 'false'
      },
    ])

    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      columns,
      data
    }
  }
}
</script>