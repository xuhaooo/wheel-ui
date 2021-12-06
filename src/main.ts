import './lib/wheel.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './assets/svg.js'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'
import Demo from './components/Demo.vue'
import {Button, Switch, Tab, Tabs, Dialog, Header, Content, Footer, Sider, Layout, Icon, Input, CollapseItem, Collapse} from './lib/index'



const app = createApp(App)
app.component("Markdown", Markdown)
app.use(router)
app.mount('#app')
app.component("Demo", Demo)
app.component("Button", Button)
app.component("Switch", Switch)
app.component("Tab", Tab)
app.component("Tabs", Tabs)
app.component("Dialog", Dialog)
app.component("Header", Header)
app.component("Content", Content)
app.component("Footer", Footer)
app.component("Sider", Sider)
app.component("Layout", Layout)
app.component("Icon", Icon)
app.component("Input", Input)
app.component("CollapseItem", CollapseItem)
app.component("Collapse", Collapse)


window.onload = function () {
  document.addEventListener('touchstart', function (event) {
      if (event.touches.length > 1) {
          event.preventDefault();
      }
  }, {passive: false});
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
      let now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
          event.preventDefault();
      }
      lastTouchEnd = now;
  }, false);
};