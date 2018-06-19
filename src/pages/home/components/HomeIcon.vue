<template>
    <div class='icons'>
        <swiper :options='swiperOption'>
        <swiper-slide v-for='(page,index) of pages' :key='index'>
        <div class='icon' v-for='item of page' :key="item.id">
            <div class='icon-img'>
                <img :src='item.imgUrl' class='icon-img-content' />
            </div>
            <span v-text='item.desc' class='img-desc'></span>
            
        </div>
        </swiper-slide>
    </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcon',
    props:{
        iconList:Array
    },
    data () {
        return {
            swiperOption:{
                    // 循环滚动
                    autoplay:false
                },
        }
    },
    computed:{
    //  自动分页功能
        pages () {
            const pages = []
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
    .icons
        width:100%
        overflow:hidden
        height:0
        padding-bottom:50%
        .icon  
            overflow:hidden
            width:25%
            padding-bottom:25%
            float:left
            position:relative
            height:0
            
            .icon-img
                overflow:hidden
                width:100%
                position:absolute
                left:0
                top:0
                bottom:.44rem
                
                .icon-img-content
                    height:80%
                    display:block
                    margin:0 auto
                    padding:.2rem
            .img-desc
                position:absolute
                bottom:0
                left:0
                height:.44rem
                line-height:.44rem
                text-align:center
                display:block
                width:100%
                ellipsis()
                

</style>