<template>
<div>
<detail-banner></detail-banner>    
<detail-header></detail-header>    
<detail-list :detailList='detailList'></detail-list>    
</div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            detailList:[
                {
                    title:'成人票',
                    children:[{
                        title:'成人中票',
                        children:[{
                            title:'成人小票'
                    },{title:'残疾人票'}]
                },{'title':'人妖票'}]
                },
                {
                    title:'儿童票',
                    children:[{
                        title:'儿童中票',
                        children:[{
                            title:'儿童小票'
                        }]
                    }]
                },
                {
                    title:'老人票',
                    children:[{
                        title:'老人中票',
                        children:[{
                            title:'老人小票'
                        }]
                    }]
                }
            ]
        }
    }
}
</script>

<style lang='stylus' scoped>
    
</style>