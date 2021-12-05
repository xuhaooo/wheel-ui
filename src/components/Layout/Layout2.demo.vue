<demo>
侧边栏在内部的布局
</demo>

<template>
  <Layout>
    <Header>header</Header>
    <Layout>
      <Sider>sider</Sider>
      <Content>content</Content>
    </Layout>
    <Footer>footer</Footer>
  </Layout>
</template>

<script>
import {Layout, Header, Sider, Content, Footer} from '../../lib/index'
export default {
  components: {Layout, Header, Sider, Content, Footer}
}
</script>

<style lang="scss" scoped>
.lion-layout {color: #fff;text-align: center;

  &-header {height: 64px;background: #82e2f9;line-height: 64px;}

  &-content {height: 200px;background: #2f99f4;line-height: 200px;}

  &-footer {height: 64px;background: #82e2f9;line-height: 64px;}

  &-sider {width: 20%;height: 100%;background: #58caf5;line-height: 200px;}
}
</style>