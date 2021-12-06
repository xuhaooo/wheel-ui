<demo>
上中下布局
</demo>

<template>
  <Layout>
    <Header>header</Header>
    <Content>content</Content>
    <Footer>footer</Footer>
  </Layout>
</template>

<script>
import {Layout, Header, Content, Footer} from '../../lib/index'
export default {
  components: {Layout, Header, Content, Footer}
}
</script>

<style lang="scss" scoped>
.wheel-layout {color: #fff;text-align: center;

  &-header {height: 64px;background: #82e2f9;line-height: 64px;}

  &-content {height: 200px;background: #2f99f4;line-height: 200px;}

  &-footer {height: 64px;background: #82e2f9;line-height: 64px;}
}
</style>