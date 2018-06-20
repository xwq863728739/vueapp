<template>
    <div> 
        <Header></Header>
        <home-swiper :sList='sList'></home-swiper>
        <home-icon :iconList='iconList'></home-icon>
        <home-recommend :rList='rList'></home-recommend>
        <home-weekend :weekendList='weekendList'></home-weekend>
    </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/HomeIcon'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name:'Home',
    components:{
        Header,
        HomeSwiper,
        HomeIcon,
        HomeRecommend,
        HomeWeekend,
    },
    data () {
        return {
            // city:'',
            sList : [],
            iconList:[],
            rList:[],
            weekendList:[],
            localCity:''
        }
    },
    methods:{
        getHomeInfo () {
            // 请求接口数据
            axios.get('/api/index.json?city='+ this.city)
            .then(this.getHomeInfoSucc)
            this.localCity = this.city
        },
        getHomeInfoSucc (res) {
            console.log(res)
            // 父组件向子组件传值
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.sList = data.swiperList
                // this.city = data.city
                this.iconList = data.iconList
                this.rList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    computed:{
        ...mapState(['city'])
    },
    mounted () {
        this.getHomeInfo()
    },
    // 在keep-alive之后运行
    activated () {
        if(this.localCity != this.city)
        this.getHomeInfo()
    }
}
</script>

<style>
    
</style>