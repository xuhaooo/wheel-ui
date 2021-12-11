# Wheel UI

## 介绍

Wheel-UI 是一个基于 Vue3 和 TypeScript 的 UI 组件库，目前包括有 Switch、Button、Tabs、Icon、Layout、Input、Dialog、Collapse 等组件，持续更新中。

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
*,*::before,*::after{box-sizing: border-box;}
```

IE 8 及以上浏览器都支持此样式。

2. 安装 wheel-ui

```bash
npm install wheel-ui
```

或

```
yarn add wheel-ui
```

3. 引入 wheel-ui

```js
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button} from "wheel-ui"
export default {
  components: {Button}
}
</script>
```
## 文档

[前往官网](https://bingoxuhao.gitee.io/wheel-ui-website)

## 联系方式

<a href='mailto:bingoxuhao@gmail.com'>Email</a>