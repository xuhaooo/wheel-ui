<template>
  <div class="lion-collapse-item" :class="{open:open}">
    <header class="title" @click="toggleOpen">
      <lion-icon name="arrow-right"
              :class="open?
              'collapse-item-svg-bottom':
              'collapse-item-svg-right'">
      </lion-icon>
      {{ title }}
    </header>
    <main class="content" v-if="open">
      <slot></slot>
    </main>
  </div>
</template>

<script lang='ts'>
import {ref, inject} from 'vue';
import {EventBus} from './index';
import Icon from './Icon.vue'

export default {
  props: {
    title: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    }
  },
  components: {'lion-icon': Icon},
  setup(props) {
    //注入事件总线
    const eventBus: EventBus = inject('eventBus');

    const open = ref(false);
    const {name} = props;
    const toggleOpen = () => {
      //子组件自己不控制开启和关闭,将信息通知给事件总线,然后父组件监听这个事件
      //让父组件来控制子组件的开启和关闭
      if (open.value) {
        eventBus.emit('update:removeActiveName', name);
      } else {
        eventBus.emit('update:addActiveName', name);
      }
    };

    //监听事件总线的activeName更新事件,觉得自己是开启还是关闭
    eventBus.on('update:activeName', (names) => {
      open.value = names.indexOf(name) >= 0;
    });
    return {toggleOpen, open};
  }
};
</script>

<style lang='scss'>
$grey: #ddd;
$background-color: #eee;

.lion-collapse-item {
  .title {
    border: 1px solid $grey;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    background: #eee;
    border-bottom: none;
    cursor: default;


    .collapse-item-svg {
      &-bottom {
        transform: rotate(90deg);
        transition: all 250ms;
      }

      &-right {
        transform: rotate(0deg);
        transition: all 250ms;
      }
    }
  }

  .content {
    border: 1px solid $grey;
    border-bottom: none;
    padding: 8px 24px;
  }

  &:first-child {
    .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &:last-child {
    .title {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-bottom: 1px solid $grey;
    }

    &[class~='open'] {
      .title {
        border-bottom: none;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      .content {
        border: 1px solid $grey;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
}
</style>