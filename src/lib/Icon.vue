<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script lang="ts">
  export default {
    props: {
      name: {
        type: String,
        require: true
      }
    }
  }
</script>

<style lang="scss">
.icon {
  width: 30px;
  height: 30px;
}
</style>