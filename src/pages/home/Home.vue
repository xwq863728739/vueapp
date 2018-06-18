<template>
    <div> 
        <Header></Header>
        <home-swiper></home-swiper>
        <div>home</div>
        <router-link to='/list'>列表页</router-link>
    </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
    name:'Home',
    components:{
        Header,
        HomeSwiper
    }
}
</script>

<style>
    
</style>