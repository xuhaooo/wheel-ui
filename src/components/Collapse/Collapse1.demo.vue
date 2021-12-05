<demo>
可同时展开多个
</demo>

<template>
  <Collapse v-model:activeName="active">
    <CollapseItem title="标题1" name="1">内容1</CollapseItem>
    <CollapseItem title="标题2" name="2">内容2</CollapseItem>
    <CollapseItem title="标题3" name="3">内容3</CollapseItem>
  </Collapse>
</template>

<script lang="ts">
import {CollapseItem, Collapse} from '../../lib/index'
import {ref} from 'vue';

export default {
  components: {CollapseItem,Collapse},
  setup() {
    const active = ref(['1']);
    return {active};
  }
};
</script>