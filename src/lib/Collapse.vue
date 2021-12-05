<template>
  <div class="lion-collapse">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {onMounted, provide} from 'vue';
import {EventBus} from './index';

export default {
  props: {
    activeName: {
      type: Array,
      default: []
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const {activeName, single} = props;
    //创建eventBus实例
    const eventBus = new EventBus();
    //使用provide
    provide('eventBus', eventBus);

    onMounted(() => {
      //不能修改props,所以用JSON深拷贝
      let copyActiveName = JSON.parse(JSON.stringify(activeName));

      //触发activeName的更新函数,使组件外部能拿到数据
      let updateActiveName = () => {
        //由于copyActive是同一个,组件外部不会更新,所以需要改变activeName地址
        const updateCopyActiveName = JSON.parse(JSON.stringify(copyActiveName));
        eventBus.emit('update:activeName', updateCopyActiveName);
        context.emit('update:activeName', updateCopyActiveName);
      };

      //第一次触发事件总线的activeName函数,使collapse-items判断是否打开
      eventBus.emit('update:activeName', activeName);

      //事件总线监听addActiveName事件来更新activeName的数据
      eventBus.on('update:addActiveName', (name) => {
        single ? copyActiveName = [name] : copyActiveName.push(name);
        updateActiveName();
      });

      //事件总线监听removeActiveName事件来更新activeName的数据
      eventBus.on('update:removeActiveName', (name) => {
        const nameIndex = copyActiveName.indexOf(name);
        copyActiveName.splice(nameIndex, 1);
        updateActiveName();
      });
    });
  }
};
</script>

<style lang='scss'>

</style>