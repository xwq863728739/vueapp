<template>
    <div class='list' ref='wrapper'>
        <div>
        <div class='title border-topbottom'>当前城市</div>
        <div class='button-list'>
            <div class='button-wrapper'>
                <div class='button'>北京</div>
            </div>
            <div class='button-wrapper'>
                <div class='button'>北京</div>
            </div>
            <div class='button-wrapper'>
                <div class='button'>北京</div>
            </div>
            <div class='button-wrapper'>
                <div class='button'>北京</div>
            </div>
            <div class='button-wrapper'>
                <div class='button'>北京</div>
            </div>
        
        </div>
        
        <div class='title border-topbottom'>热门城市</div>
        <div class='button-list'>
            <div class='button-wrapper' v-for='item of hotCities' :key='item.id'>
                <div class='button'>{{item.name}}</div>
            </div>
        
        </div>
        <div class='area' v-for='(item,key) of cities' :key='key' :ref='key'>
        <div class='title border-topbottom'>{{key}}</div>
        <div class='item-list'>
            <div class='item-wrapper border-bottom' v-for='i of item' :key='i.id'>
                <div class='item'>{{i.name}}</div>
            </div>
        
        </div>
        </div>

        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
        // 监听letter的改变
        letter () {
            if(this.letter){
                const element = this.$refs[this.letter]
                this.scroll.scrollToElement(element[0])
            }
            
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
    .list
        position:absolute
        top:0
        bottom:0
        left:0
        right:0
        overflow:hidden
        top:1.78rem
        .border-topbottom
            &:before
                border-color:#ccc
            &:after
                border-color:#ccc
        .border-bottom
            &:before
                border-color:#ccc
            &:after
                border-color:#ccc
        .title
            background:#eee
            height:.44rem
            line-height:.44rem
            padding-left:.2rem
        .button-list
        // 清除浮动
            overflow:hidden
            width:100%
            padding:.1rem .6rem .1rem .1rem 
            box-sizing:border-box
            .button-wrapper
                width:33.3%
                float:left
                .button
                    border-radius:.1rem
                    padding:.1rem
                    border:.02rem solid #ccc
                    margin:.1rem
                    text-align:center

        .item
            height:.64rem
            line-height:.64rem
            text-indent:.2rem
            

            
</style>