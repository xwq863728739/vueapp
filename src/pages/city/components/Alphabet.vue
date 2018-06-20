<template>
    <div class='list'>
        <div class='item' v-for='(item,key) of cities' :key='key' @click='handleAlpha'>{{key}}</div>
    </div>
</template>

<script>
export default {
    name:'Alphabet',
    props:{
        cities:Object
    },
    methods:{
        handleAlpha (e) {
            // 获取到点击元素的值
            this.$emit('change',e.target.innerText)
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
    .list
        position:absolute
        right:0
        top:1.78rem
        bottom:0
        width:.4rem
        display:flex
        flex-direction:column
        justify-content:center
        text-align:center
        .item
            color:$bgcolor
            padding:.05rem 0
    
</style>