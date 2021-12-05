<template>
  <h1>Collapse 示例</h1>
  <Demo :component="Collapse1Demo"/>
  <Demo :component="Collapse2Demo"/>
</template>

<script lang="ts">
import Collapse1Demo from '../Collapse/Collapse1.demo.vue';
import Collapse2Demo from '../Collapse/Collapse2.demo.vue';

export default {
  setup() {
    return {Collapse1Demo, Collapse2Demo};
  },
};
</script>