<demo>
支持 level
</demo>

<template>
  <div>
    <Button level="main">Main</Button>
    <Button>Default</Button>
    <Button level="danger">Danger</Button>
  </div>
  <div>
    <Button theme="link" level="main">Link(main)</Button>
    <Button theme="link">Link</Button>
    <Button theme="link" level="danger">Link(danger)</Button>
  </div>
  <div>
    <Button theme="text" level="main">Text(main)</Button>
    <Button theme="text">Text</Button>
    <Button theme="text" level="danger">Text(danger)</Button>
  </div>
</template>

<script lang="ts">
import {Button} from '../../lib/index'
export default {
  components: {Button}
}
</script>