<template>
<div>
    <div class='search'>
        <input placeholder='请输入城市名' class='search-input' v-model='keyword' />
        
    </div>
    <div class='search-list' v-show='keyword' ref='search'>
            <ul>
                <li class='item border-bottom' v-for='item of list' @click='handleCity(item.name)'>{{item.name}}</li>
                <li class='item border-bottom nodata' v-show='!list.length'>无搜索结果</li>
            </ul>
        </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data () {
        return {
            keyword:'',
            list:[],
            timer:null
            
        }
    },
    methods:{
        handleCity (city) {
            // this.$store.dispatch('changeCity',city)
            this.$store.commit('changeCity',city)
        }
    },
     mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    },
    watch: {
        keyword () {
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout( ()=> {
                 let list = []
            for(const i in this.cities){
                this.cities[i].forEach( (value) => {
                    if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                        list.push(value)
                    }
                    
                })
            }
            this.list = list
            // 设置100ms延迟，减少用户操作的频率
            },100)
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
    .search
        background:$bgcolor
        height:.72rem
        padding:.1rem
        .search-input
            height:.64rem
            line-height:.64rem
            width:100%
            border-radius:.06rem
            text-align:center
            color:#666
            padding:0 .5rem
            // 为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。可以抵消padding带来的影响
            box-sizing:border-box

    .search-list
        overflow:hidden
        background:#fff
        position:absolute
        top:1.8rem
        left:0
        right:0
        bottom:0
        z-index:1
        
        .item
            height:.64rem
            line-height:.64rem
            text-indent:.2rem
        .nodata
            text-align:center
</style>