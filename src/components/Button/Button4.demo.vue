<demo>
支持 disabled
</demo>

<template>
  <div>
    <Button disabled>Disabled</Button>
    <Button theme="link" disabled>Link</Button>
    <Button theme="text" disabled>Text</Button>
  </div>
</template>

<script lang="ts">
import {Button} from '../../lib/index'
export default {
  components: {Button}
}
</script>