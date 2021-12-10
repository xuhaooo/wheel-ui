<demo>
支持 size
</demo>

<template>
  <div>
    <Button size="big">Large</Button>
    <Button>Default</Button>
    <Button size="small">Small</Button>
  </div>
  <div>
    <Button theme="link" size="big">Link(large)</Button>
    <Button theme="link">Link</Button>
    <Button theme="link" size="small">Link(small)</Button>
  </div>
  <div>
    <Button theme="text" size="big">Text(large)</Button>
    <Button theme="text">Text</Button>
    <Button theme="text" size="small">Text(small)</Button>
  </div>
</template>

<script lang="ts">
import {Button} from '../../lib/index'
export default {
  components: {Button}
}
</script>