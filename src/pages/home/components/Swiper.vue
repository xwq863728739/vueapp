<template>
<div class='wrapper'> 
    <!-- 当sList传进来再创建swiper -->
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for='(item,index) of sList' :key='index'>
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
    props:{
        sList:Array
    },
    data () {
       return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: 3000,
                speed: 1000,
            }
        }
    },
    computed: {
        showSwiper () {
            return this.sList.length
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
        height:0
        background:#ccc
        padding-bottom:31.25%
        .swiper-img
            width:100%
            

</style>