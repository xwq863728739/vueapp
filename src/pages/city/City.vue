<template>
<div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities='hotCities' :cities='cities'></city-list>
    <Alphabet :cities='cities'></Alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import Alphabet from './components/Alphabet'
import axios from 'axios'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        Alphabet,
    },
    data () {
        return {
            hotCities:[],
            cities:{}
        }
    },
    methods:{
        getCityInfo () {
            axios.get('/api/city.json')
            .then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.hotCities = data.hotCities
                this.cities = data.cities
            }
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>

<style>
    

</style>