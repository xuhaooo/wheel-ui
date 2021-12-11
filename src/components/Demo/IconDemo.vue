<template>
  <h1>Icon 示例</h1>  
  <strong>需要在 index.html 文件中引入下面链接作为路径的 script 标签</strong>
  <pre class="language-html" v-text="url"></pre>
  <Demo :component="Icon1Demo"></Demo>
  <Demo :component="Icon2Demo"></Demo>
  <Attr :columns="columns" :data="data" />
</template>

<script lang="ts">
import Icon1Demo from '../Icon/Icon1.demo.vue'
import Icon2Demo from '../Icon/Icon2.demo.vue'
import {ref} from 'vue'
import {columns} from '../../lib/attrData'

export default {
  setup(){
    const url = ref('//at.alicdn.com/t/font_2317593_qr18iygatnb.js')
    const data = ref([
      {
        params: 'name',
        desc: 'icon 名（必填）',
        type: 'string',
        select: '--',
        default: '--'
      }
    ])
    return {
      Icon1Demo,
      Icon2Demo,
      url,
      columns,
      data
    }
  }
}
</script>