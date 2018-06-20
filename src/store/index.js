import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'

Vue.use(Vuex)



export default new Vuex.Store({
    state,
    // actions:{
    //     // 接收两个参数，ctx--上下文，city--传过来的数据
    //     changeCity (ctx,city) {
    //         ctx.commit('changeCity',city)
    //     }
    // },
    mutations
})