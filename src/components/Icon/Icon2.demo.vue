<demo>
本组件自带的 icon
</demo>

<template>
  <ul>
    <li v-for="(name, index) in names" :key="index">
      <Icon :name="name"></Icon>
      <span>{{name}}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import {Icon} from '../../lib/index'
import {ref} from 'vue'

export default {
  components: {Icon},
  setup(){
    const names = ref(['auto', 'all', 'bussiness-man', 'component', 'code','copy','dollar', 'history', 'editor', 'data', 'gift', 'integral', 'nav-list','pic','Notvisible', 'play', 'rising', 'QRcode', 'rmb', 'similar-product','Exportservices','sendinquiry', 'all-fill', 'favorites-fill', 'integral-fill','namecard-fill', 'pic-fill', 'play-fill', 'prompt-fill', 'stop-fill', 'column','add-account', 'column1', 'add', 'agriculture', 'years', 'add-cart', 'arrow-right','arrow-left', 'apparel', 'all1', 'arrow-up', 'ascending', 'ashbin', 'atm', 'bad','attachent', 'browse', 'beauty', 'atm-away', 'assessed-badge', 'auto1', 'bags','calendar', 'cart-full', 'calculator', 'cameraswitching', 'cecurity-protection','category', 'close', 'certified-supplier', 'cart-Empty', 'code1', 'color', 'conditions','confirm', 'company', 'ali-clould', 'copy1', 'credit-level', 'coupons', 'connections','cry', 'costoms-alearance', 'clock', 'CurrencyConverter', 'cut', 'data1','Customermanagement', 'descending', 'double-arro-right', 'customization','double-arrow-left', 'discount', 'download', 'dollar1', 'default-template','editor1', 'eletrical', 'electronics', 'etrical-equipm', 'ellipsis', 'email','falling', 'earth', 'filter', 'furniture', 'folder'])
    return {names}
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  justify-content: center;
}

li {
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid #e3e3e3;
  flex-direction: column;
  margin-left: -1px;
  margin-top: -1px;
  transition: all 250ms;
  padding-top: 25px;

  &:hover {
    color: #1a64ea;
  }

  svg {
    height: 30px;
    width: 30px;
  }

  span {
    padding: 4px 8px;
    word-break: break-all;
  }
}
</style>