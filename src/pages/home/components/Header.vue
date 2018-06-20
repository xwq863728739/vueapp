<template>
    <div class='header'>
        <div class='header-left'>
        <span class='iconfont'>&#xe625;</span></div>
        <div class='header-center'>
        <span class='iconfont'>&#xe60b;</span>
        请输入景点</div>
        <router-link to='/city'>
        <div class='header-right'>{{this.city}}
        <span class='iconfont'>&#xe64a;</span>
        </div>
        </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    // props:{
    //     city:String
    // },
    
    name:'Header',
    computed:{
        ...mapState(['city'])
    }
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
            min-width:1.24rem
            padding:0 .1rem
            float:right
            text-align:center
            color:#fff

</style>