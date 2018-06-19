<template>
    <div class='list'>
        <div class='item' v-for='(item,key) of cities' :key='key'>{{key}}</div>
    </div>
</template>

<script>
export default {
    name:'Alphabet',
    props:{
        cities:Object
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