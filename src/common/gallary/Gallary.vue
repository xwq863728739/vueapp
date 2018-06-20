<template>
    <div class='gallary' @click='handleGallary'>   
    <div>
        <swiper :options="swiperOption">
            <swiper-slide v-for='item of imgList'>
                <div class='photo-wrapper' >
                    <img :src='item.imgUrl' class='photo'>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:'Gallary',
    props:{
        imgList:Array
    },
    data () {
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observer : 'true',
                observeParents : 'true'

            },
            imgUrl:[]
        }
    },
    methods:{
        handleGallary () {
            this.$emit('change')
        }
    }
}
</script>

<style lang='stylus' scoped>
    .gallary >>> .swiper-container
        overflow:inherit 
    .gallary
        background:#000
        position:fixed
        z-index:100
        height:100%
        top:0
        left:0
        right:0
        bottom:0
        display:flex
        flex-direction:column
        justify-content:center
        .photo-wrapper
            width:100%
            height:0
            padding-bottom:50%
            .photo
                width:100%
    .swiper-pagination
        position:absolute
        bottom:-1rem
        color:#fff
        z-index:10
            

</style>