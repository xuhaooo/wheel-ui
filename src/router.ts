import { h } from 'vue'
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/Demo/SwitchDemo.vue'
import ButtonDemo from './components/Demo/ButtonDemo.vue'
import DialogDemo from './components/Demo/DialogDemo.vue'
import TabsDemo from './components/Demo/TabsDemo.vue'
import LayoutDemo from './components/Demo/LayoutDemo.vue'
import InputDemo from './components/Demo/InputDemo.vue'
import IconDemo from './components/Demo/IconDemo.vue'
import CollapseDemo from './components/Demo/CollapseDemo.vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'

const history = createWebHashHistory()
const md = string => h(Markdown, {content: string, key: string})

export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'install', component: md(install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'layout', component: LayoutDemo},
        {path: 'input', component: InputDemo},
        {path: 'icon', component: IconDemo},
        {path: 'collapse', component: CollapseDemo}
      ]
    }
  ]
})
