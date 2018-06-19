<template>
    <div class='icons'>
        <swiper >
        <swiper-slide v-for='page of pages'>
        <div class='icon' v-for='item of page' :key="item.id">
            <div class='icon-img'>
                <img :src='item.imgUrl' class='icon-img-content' />
            </div>
            <span v-text='item.text' class='img-desc'></span>
        </div>
        </swiper-slide>
    </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcon',
    data () {
        return {
            iconList:[
                {id:'001',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',text:'景点门票'},
                {id:'002',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',text:'必游榜单'},
                {id:'003',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',text:'夏日玩水'},
                {id:'004',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',text:'一日游'},
                {id:'005',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',text:'景点门票'},
                {id:'006',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',text:'必游榜单'},
                {id:'007',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',text:'夏日玩水'},
                {id:'008',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',text:'一日游'},
                {id:'008',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',text:'一日游'},
            ]
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