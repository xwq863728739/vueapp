<template>
<div class='wrapper'> 
    <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for='item of swiperList'>
    <!--这里src需要用绑定方式 :src -->
        <img class='swiper-img'  :src='item.imgUrl' />
    </swiper-slide>
    
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination">

    </div>
  </swiper>
</div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data () {
        return {
            swiperOption:{
                // 分页的小点
                pagination:'.swiper-pagination',
                // 循环滚动
                loop:true
            },
            swiperList:[
                {id:'001',imgUrl:'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180614_CPM_WAP_DE10841.jpg'},
                {id:'002',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg'},
            ]
        }
    }
}
</script>

<style lang='stylus' scoped>
    // 样式穿透，不受scoped限制
    .wrapper >>> .swiper-pagination-bullet-active
        background:#fff !important;
    //  给轮播框一个自适应宽高，防止塌陷
    .wrapper
        overflow:hidden
        width:100%
        height:0
        background:#ccc
        padding-bottom:24.5%
        .swiper-img
            width:100%

</style>