<demo>
上中下布局
</demo>

<template>
  <lion-layout>
    <lion-header>header</lion-header>
    <lion-content>content</lion-content>
    <lion-footer>footer</lion-footer>
  </lion-layout>
</template>

<script>
import Layout from '../lib/Layout.vue'
import Header from '../lib/Header.vue'
import Content from '../lib/Content.vue'
import Footer from '../lib/Footer.vue'

export default {
  components: {
    'lion-layout': Layout,
    'lion-header': Header,
    'lion-content': Content,
    'lion-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
.lion-layout {color: #fff;text-align: center;

  &-header {height: 64px;background: #82e2f9;line-height: 64px;}

  &-content {height: 200px;background: #2f99f4;line-height: 200px;}

  &-footer {height: 64px;background: #82e2f9;line-height: 64px;}
}
</style>