<template>
<div>
    sd{{$route.params.id}}

    <li v-if="item">{{item.name}}

        <img :src="item.img" alt="">

        <button @click="gou">加入购物车</button>
    </li>
</div>
</template>

<script>
import {
    mapMutations,
    mapState,

} from 'vuex'
export default {
    data() {
        return {
            item: []
        }
    },
    computed: {
        ...mapState(['list'])
    },
    methods: {
        ...mapMutations(['SET_CARDATA']),
        gou() {
            this.SET_CARDATA(this.item)
        }
    },
    created() {
        this.item = this.list[0].children.find((item) => {
            return item.id + '' === this.$route.params.id + ''
        })
    },
    // created() {
    //     this.item = this.list[0].children.find((item) => {
    //         return item.id + '' === this.$route.params.id + ''
    //     })
    // },
}
</script>

<style>

</style>
