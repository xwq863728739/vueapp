<template>
<div class='banner'>
    <img src='//img1.qunarzz.com/sight/p0/1611/97/97dbde6eccdfef72a3.water.jpg_600x330_cebdcaf0.jpg' class='banner-img' /> 
    <div class='banner-content'>
        <div class='banner-desc'>深圳小梅沙海洋世界</div>
        <div class='banner-num'><span class='iconfont'>&#xe60b;</span>12</div>
    </div>
</div>   
</template>

<script>
export default {
    name:'DetailBanner',
}
</script>

<style lang='stylus' scoped>
    .banner
        position:relative
        height:0
        overflow:hidden
        padding-bottom:55%
        .banner-img
            width:100%
        .banner-content
            position:absolute
            bottom:0
            padding-bottom:.1rem
            display:flex
            width:100%
            left:0
            height:.32rem
            color:#fff
            background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-desc
                flex:1
                padding:0 .2rem
                font-size:.4rem
                position:relative
                bottom:.1rem
            .banner-num
                background:rgba(0,0,0,0.5)
                padding:0 .2rem
                border-radius:.1rem
                height:.32rem
                line-height:.32rem
    
</style>