<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo"/>
  <Demo :component="Dialog2Demo"/>
  <Attr :columns="columns" :data="data" />
</template>

<script lang="ts">
import Dialog1Demo from '../Dialog/Dialog1.demo.vue'
import Dialog2Demo from '../Dialog/Dialog2.demo.vue'
import { columns } from '../../lib/attrData'
import { ref } from 'vue'

export default {
  setup(){
    const data = ref([
      {
        params: 'visible',
        desc: '是否展示',
        type: 'boolean',
        select: 'true / false',
        default: 'false'
      },
      {
        params: 'closeOnClickOverlay',
        desc: '是否点击遮罩层关闭弹出框',
        type: 'boolean',
        select: 'true / false',
        default: 'true'
      },
      {
        params: 'ok',
        desc: '确认回调',
        type: ' function',
        select: '--',
        default: '--'
      },
      {
        params: 'cancel',
        desc: '取消回调',
        type: 'function',
        select: '--',
        default: '--'
      }
    ])
    return {
      Dialog1Demo,
      Dialog2Demo,
      columns,
      data
    }
  }
}
</script>