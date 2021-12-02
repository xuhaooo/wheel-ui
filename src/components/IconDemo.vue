<template>
  <h1>Icon 示例</h1>  
  <strong>需要在 index.html 文件中引入下面链接作为路径的 script 标签</strong>
  <pre class="language-html" v-text="url"></pre>
  <Demo :component="Icon1Demo"></Demo>
  <Demo :component="Icon2Demo"></Demo>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Icon1Demo from './Icon1.demo.vue'
import Icon2Demo from './Icon2.demo.vue'
import {ref} from 'vue'

export default {
  components: {Demo, Icon1Demo, Icon2Demo},
  setup(){
    const url = ref('//at.alicdn.com/t/font_2317593_qr18iygatnb.js')
    return {
      Icon1Demo,
      Icon2Demo,
      url
    }
  }
}
</script>

<style lang="scss" scoped>

</style>