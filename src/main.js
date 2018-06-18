// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 找到的是App.vue文件
import App from './App'
import router from './router'
import 'styles/reset.css'
// 解决1像素边框问题
import 'styles/border.css'
import fastClick from 'fastclick'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // es6的简写{App:App}
  components: { App },
  template: '<App/>'
})
