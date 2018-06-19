<template>
<div>
    <div class="title">热销推荐</div>
    <ul>
        <li v-for='item of recommendList' class='item border-bottom' :key='item.id'>
            <img :src='item.imgUrl' class='item-img'/>
            <div class='item-info'>
                <div class='item-title'>{{item.title}}</div>
                <div class='item-desc'>{{item.desc}}</div>
                <button class='item-button'>查看详情</button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name:'HomeRecommend',
    data () {
        return {
            recommendList:[
            {id:'001',title:'大连海洋动物园1',desc:'大连海洋动物园',imgUrl:'http://img1.qunarzz.com/sight/p0/1611/97/97dbde6eccdfef72a3.water.jpg_200x200_e0efe6da.jpg'},
            {id:'002',title:'大连海洋动物园2',desc:'大连海洋动物园',imgUrl:'http://img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_200x200_21b03a9c.jpg'},
            {id:'003',title:'大连海洋动物园3',desc:'大连海洋动物园',imgUrl:'http://img1.qunarzz.com/sight/p0/1611/97/97dbde6eccdfef72a3.water.jpg_200x200_e0efe6da.jpg'},
            {id:'004',title:'大连海洋动物园4',desc:'大连海洋动物园',imgUrl:'http://img1.qunarzz.com/sight/p0/1611/97/97dbde6eccdfef72a3.water.jpg_200x200_e0efe6da.jpg'},
            {id:'005',title:'大连海洋动物园5',desc:'大连海洋动物园',imgUrl:'http://img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_200x200_21b03a9c.jpg'}
        ]
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
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        padding:.1rem .2rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
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