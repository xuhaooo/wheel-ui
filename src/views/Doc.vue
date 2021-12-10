<template>
  <div class="layout">
    <Topnav class="nav" toggleMenuButtonVisible/>
    <div class="content">
      <Aside></Aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import Aside from "../components/Doc/Aside.vue"

export default {
  components: { Topnav, Aside }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
  }

  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
      main {
        overflow: auto;
        flex-grow: 1;
        height: 80vh;
      }
    }

    > main {
      overflow: auto;
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
  }
}
</style>