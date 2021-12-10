<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions" @click="toggleCode">
      {{ codeVisible === true ? '隐藏代码' : '查看代码'}}
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"></pre>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
import { computed, ref } from 'vue'
const Prism = (window as any).Prism
export default {
  props: {
    component: Object
  },
  components: {Button},
  setup(props){
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const codeVisible = ref(false)
    const toggleCode = () => codeVisible.value = !codeVisible.value

    return {
      Prism,
      html,
      codeVisible,
      toggleCode
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
    cursor: pointer;
    text-align: center;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    color: #ccc;
    &:hover {
      color: #4d86af;
      background: #f9fafc;
    }
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