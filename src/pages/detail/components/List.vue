<template>
<div class='detail-list'>
    <div v-for='item of detailList' >
        <div class='item border-bottom'>
            <span class='item-icon'></span>{{item.title}}
        </div>
        <div v-if='item.children'>
            <detail-list :detailList='item.children' class='item1'></detail-list>
        </div>
    </div>
</div>
   
</template>

<script>
export default {
    props:{
        detailList:Array
    },
    name:'DetailList',
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
.item
    padding:.1rem
    height:.5rem
    line-height:.5rem
    .item-icon
        position:relative
        top:.1rem
        display: inline-block;
        width: .36rem;
        height: .36rem;
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
.item1
    padding:0 .2rem
</style>