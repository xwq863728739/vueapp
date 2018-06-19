<template>
    <div> 
        <Header></Header>
        <home-swiper></home-swiper>
        <home-icon></home-icon>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/HomeIcon'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'
export default {
    name:'Home',
    components:{
        Header,
        HomeSwiper,
        HomeIcon,
        HomeRecommend,
        HomeWeekend,
    }
}
</script>

<style>
    
</style>