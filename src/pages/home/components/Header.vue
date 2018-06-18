<template>
    <div class='header'>
        <div class='header-left'>
        <span class='iconfont'>&#xe625;</span></div>
        <div class='header-center'>
        <span class='iconfont'>&#xe60b;</span>
        请输入景点</div>
        <div class='header-right'>城市
        <span class='iconfont'>&#xe64a;</span>
        </div>
    </div>
</template>
<script>

export default {
    name:'Header'
}
</script>
<style lang='stylus' scoped>
@import '~styles/variables.styl'
    .header
        background: $bgcolor
        line-height:.86rem
        color: white
        display:flex
        height: .86rem
        .header-left
            width:.64rem
            text-align:center
        .header-center
            flex:1
            line-height:.64rem
            height:.64rem
            border-radius:.1rem
            background:#fff
            margin-top:.12rem
            padding-left:.1rem
            color:#ccc
        .header-right
            width:1.24rem
            float:right
            text-align:center

</style>