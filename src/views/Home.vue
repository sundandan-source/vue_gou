<template>
<div class="home">
    <ul class="ul1">
        <li v-for="(item,index) in list " :key="index" :class="ind===index?'active':''" @click="ind=index">
            <p class="p1">
                {{item.title}}
            </p>
        </li>
    </ul>

    <ul class="ul2">
        <li v-for="(i,j) in list[ind].children" :key="j">
            <p>
                {{i.name}}
            </p>
            <img :src="i.img" alt="" @click="Go('/xq/'+i.id)">
            <p>{{i.id}}</p>
            <p> <button>-</button> <span>{{i.sl}}</span> <button>+</button></p>

            <b @click="gou(i)">加入购物车</b>
        </li>
    </ul>

</div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapMutations
} from 'vuex'

export default {
    data() {
        return {
            ind: 0
        }
    },

    components: {

    },
    created() {
        this.getlist()
    },
    computed: {
        ...mapState(['list']),

    },
    methods: {
        ...mapActions(['getlist']),
        ...mapMutations(["SET_CARDATA"]),
        gou(i) {
            this.SET_CARDATA(i)
        },
        Go(url) {
            this.$router.push(url)
        }
    },

}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    list-style: none;
}

.active {
    color: red;
}

.ul1 {
    width: 30%;
    float: left;

}

.ul2 {
    width: 70%;
    float: left;
}

.p1 {
    margin-top: 20px;
}

button {
    width: 20px;
}
</style>
