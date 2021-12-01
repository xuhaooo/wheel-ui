<demo>
示例 2：侧边栏在内部的布局
</demo>

<template>
  <lion-layout>
    <lion-header>header</lion-header>
    <lion-layout>
      <lion-sider>sider</lion-sider>
      <lion-content>content</lion-content>
    </lion-layout>
    <lion-footer>footer</lion-footer>
  </lion-layout>
</template>

<script>
import Layout from '../lib/Layout.vue'
import Header from '../lib/Header.vue'
import Sider from '../lib/Sider.vue'
import Content from '../lib/Content.vue'
import Footer from '../lib/Footer.vue'

export default {
  components: {
    'lion-layout': Layout,
    'lion-header': Header,
    'lion-sider': Sider,
    'lion-content': Content,
    'lion-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
.lion-layout {
  color: #fff;
  text-align: center;
  &-header {
    height: 64px;
    background: #82e2f9;
    line-height: 64px;
  }
  &-content {
    height: 200px;
    background: #2f99f4;
    line-height: 200px;
  }
  &-footer {
    height: 64px;
    background: #82e2f9;
    line-height: 64px;
  }
  &-sider {
    width: 20%;
    height: 100%;
    background: #58caf5;
    line-height: 200px;
  }
}
</style>