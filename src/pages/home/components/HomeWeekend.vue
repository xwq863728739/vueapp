<template>
<div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li v-for='item of weekendList' class='item border-bottom' :key='item.id'>
        <div class='img-wrapper'>
            <img :src='item.imgUrl' class='item-img'/>
        </div>
            <div class='item-info'>
                <div class='item-title'>{{item.title}}</div>
                <div class='item-desc'>{{item.desc}}</div>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        weekendList:Array
    },
    data () {
        return {

    }
        }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    // 给图片加一个包裹容器撑开
    .img-wrapper
        height:0
        overflow:hidden

        padding-bottom:33.5%
        .item-img
            width: 100%
    .item-info
        padding: .1rem
        // 这里要设置min-width ,不然文字还会超出
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
        .item-button
            line-height: .44rem
            margin-top: .16rem
            background: #ff9300
            padding: 0 .2rem
            border-radius: .06rem
            color: #fff
            

</style>