<demo>
可同时展开多个
</demo>

<template>
  <lion-collapse v-model:activeName="active">
    <lion-collapse-item title="标题1" name="1">内容1</lion-collapse-item>
    <lion-collapse-item title="标题2" name="2">内容2</lion-collapse-item>
    <lion-collapse-item title="标题3" name="3">内容3</lion-collapse-item>
  </lion-collapse>
</template>

<script lang="ts">
import CollapseItem from '../lib/CollapseItem.vue'
import Collapse from '../lib/Collapse.vue'
import {ref} from 'vue';

export default {
  components: {
    'lion-collapse-item': CollapseItem,
    'lion-collapse': Collapse
  },
  setup() {
    const active = ref(['1']);
    return {active};
  }
};
</script>