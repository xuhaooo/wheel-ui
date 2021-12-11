<template>
  <div>
    <h1>Switch 示例</h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
    <Attr :columns="columns" :data="data" />
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch1Demo from '../Switch/Switch1.demo.vue'
import Switch2Demo from '../Switch/Switch2.demo.vue'
import { columns } from '../../lib/attrData'
export default {
  setup(){
    const data = ref([
      {
        params: 'value',
        desc: '是否打开',
        type: 'boolean',
        select: 'true / false',
        default: 'false'
      },
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: 'true / false',
        default: 'false'
      },
    ])
    return {
      Switch1Demo,
      Switch2Demo,
      columns,
      data
    }
  }
}
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px solid $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>