<template>
    <div> 
        <Header></Header>
        <home-swiper></home-swiper>
        <home-icon></home-icon>
        
        <div>home</div>
        <router-link to='/list'>列表页</router-link>
    </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/HomeIcon'
export default {
    name:'Home',
    components:{
        Header,
        HomeSwiper,
        HomeIcon,
    }
}
</script>

<style>
    
</style>