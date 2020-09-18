<template>
<div>
    <li v-for="(item,index) in carData" :key="index">
        <input type="checkbox" v-model="item.checked">
        {{item.name}}

        <img :src="item.img" alt="">
        {{item.title}}
        <button @click="jian(item.id)">-</button>
        <span>{{item.sl}}</span>
        <button @click="jia(item.id)">+</button>

    </li>
    <p>shuliang{{shuliang}}</p>
    <p>zongjia{{zongjia}}</p>
    <p>
        全选
        <input type="checkbox" v-model='allCheck'>
    </p>

</div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            val: '',
           
        }
    },

    computed: {
        ...mapState(['carData']),
        ...mapGetters(['shuliang', 'zongjia']),

        allCheck: {
            get() {
                return this.carData.every(item => item.checked)
            },
            set(val) {
                this.carData.forEach(item => (item.checked = val))
            }

        }
    },
    methods: {
        ...mapMutations(['JIA', 'JIAN']),

        jia(id) {
            this.JIA(id)
        },
        jian(id) {
            this.JIAN(id)
        }
    },

}
</script>

<style>

</style>
