import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/city',
      name:'City',
      component: City
    },
    {
      // 路由接收一个参数，该参数会被存放到id 的变量中
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
  ]
})
