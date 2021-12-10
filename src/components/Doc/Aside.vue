<template>
  <transition name="bounce">
    <aside v-if="menuVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/icon">Icon 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/layout">Layout 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/input">Input 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/collapse">Collapse 组件</router-link>
        </li>
      </ol>
    </aside>
  </transition>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    return { menuVisible }
  }
}
</script>

<style lang="scss" scoped>
::webkit-scrollbar-thumb {
  background-color: #58caf5;
}

.bounce-enter-active {
  animation: bounce-in .3s;
}

.bounce-leave-active {
  animation: bounce-in .3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0)
  }
}

aside {
  background: white;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 1;
  box-shadow: 5px 0 5px rgba(#333, 0.1);
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: rgb(239, 248, 239);
      }
    }
  }
}
</style>