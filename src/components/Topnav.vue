<template>
  <div class="topnav">
    <router-link class="logo" to="/">
      <svg class="icon">
        <use xlink:href="#icon-wheel"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <a href="https://github.com/xuhaooo/wheel-ui">GitHub</a>
      <router-link to="/doc">文档</router-link>
    </ul>
    <span
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
      @click="toggleMenu">
      <transition name="fade">
        <svg v-if="menuVisible">
          <use xlink:href="#icon-close1"></use>
        </svg>
        <svg v-else>
          <use xlink:href="#icon-menu"></use>
        </svg>
      </transition>
    </span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu, menuVisible};
  },
};
</script>
<style lang="scss" scoped>
// $color: #007974;
$color: #341CCB;
.topnav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: $color;
  display: flex;
  background-color: #fff;
  padding: 16px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px 5px rgba(#333, 0.1);
  > .logo {
    max-width: 6em;
    margin-right: auto;
    text-decoration: none;
    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    
    > a {
      margin: 0 .6em;
      font-size: 20px;
      text-decoration: none;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 3px;
        border-radius: 1px;
        background: green;
        display: none;
      }

      &:hover:after {
        display: inline-block;
      }
    }
  }

  > .toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    >svg {
      width: 32px;
      height: 32px;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
