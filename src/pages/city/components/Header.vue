<template>
    <div class='header'>城市选择
    <router-link to='/'>
    <span class='iconfont'>&#xe625;</span>
    </router-link>
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
    .header
        background:$bgcolor
        height:.86rem
        line-height:.86rem
        text-align:center
        color:#fff
        font-size:.32rem
        position:relative
        .iconfont
            font-size:.32rem
            color:#fff
            position:absolute
            left:.16rem
    
</style>