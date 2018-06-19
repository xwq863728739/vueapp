<template>
    <div class='search'>
        <input placeholder='请输入城市名' class='search-input' />
    </div>
</template>

<script>

export default {
    name:'CitySearch',
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
            padding:0 .1rem
            // 为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
            box-sizing:border-box


</style>