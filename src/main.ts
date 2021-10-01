import './lib/lion.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './lib/svg.js'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'



const app = createApp(App)
app.component("Markdown", Markdown)
app.use(router)
app.mount('#app')

window.onload = function () {
  document.addEventListener('touchstart', function (event) {
      if (event.touches.length > 1) {
          event.preventDefault();
      }
  }, {
      passive: false
  });
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
      let now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
          event.preventDefault();
      }
      lastTouchEnd = now;
  }, false);
};