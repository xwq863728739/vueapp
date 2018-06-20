<template>
<div>
    <div class='header' @click='backHome'>
        <div class='header-back' v-show='!isshow'><span class='iconfont'>&#xe625;</span></div>
        <div class='header-fix' 
        v-show='isshow'
        :style='opacityClass'>
        <router-link tag="span" to='/' class='iconfont icon-pos'>&#xe625;</router-link>景点详情</div>
    </div>
</div>
   
</template>

<script>
export default {
    name:'DetailHeader',
    methods:{
        backHome () {
            this.$router.push('/')
        },
        // 滚动事件
        scrollFun () {
            console.log('scroll')
            // 获取元素距顶部的距离
            let top = document.documentElement.scrollTop
            if(top>60){
                // 通过计算获得透明度
                let opacity = top/140
                opacity = opacity > 1 ? 1 :opacity
                // 给样式类重新赋值
                this.opacityClass = {
                    opacity
                }
                this.isshow=true
            }else{
                this.isshow=false
            }
        }
    },
    data () {
        return {
            isshow:false,
            // 动态样式类
            opacityClass:{
                opacity:0
            }
        }
    },
    // 监听滚动事件
    // 在keep-alive激活时调用，每次页面展示时执行
    activated () {
        window.addEventListener('scroll',this.scrollFun)
    },
    // 在keep-alive停止时调用，页面被替换时执行
    deactivated () {
        window.removeEventListener('scroll',this.scrollFun)
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
    .header-back
        height:.8rem
        width:.8rem
        border-radius:100%
        background:rgba(0,0,0,0.8)
        color:#fff
        text-align:center
        line-height:.8rem
        position:absolute
        top:.1rem
        left:.1rem
    .header-fix
        background:$bgcolor
        height:.8rem
        line-height:.8rem
        color:#fff
        position:fixed
        top:0
        left:0
        width:100%
        text-align:center
        .icon-pos
            position:absolute
            left:.1rem
    .dd
        height:20rem
</style>