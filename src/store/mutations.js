import router from '@/router'
export default {
    changeCity (state,city) {
        state.city = city
        // 改变后跳转到主页
        router.push('/')
        // 将city存入缓存中
        try{
            localStorage.city = city
        }catch (e) {
        
        }
    }
}