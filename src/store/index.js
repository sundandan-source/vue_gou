import Vue from 'vue'
import Vuex from 'vuex'
import $http from '../http/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {//state=data
    list: [], //获取的数据存放在list中
    loading: false,
    token: '',
    carData: [] //购物车数据
  },
  mutations: {
    SET_LOADING(state, data) {
      state.loading = data
    },
    SET_LIST(state, data) {
      state.list = data
    },
    SET_TOKEN(state, data) {
      state.token = data
    },
    //加入购物车
    SET_CARDATA(state, obj) {
      let ind = state.carData.find(item => item.id === obj.id) //寻找购物车数据中的每一项
      if (ind) {
        //如果购物车中存在就让他的数量佳佳
        state.count++
        state.sl++
      } else {
        //否则就往购物车中push进去
        state.carData.push({
          //结构obj，因为obj是定义的空对象，往购物车中添加obj，然后数量为1
          ...obj,
          count: 1
        })
      }
      console.log(state.carData)
    },
    //加数量
    JIA(state, id) {
      let ind = state.carData.find(item => item.id === id)
      if (ind) {
        ind.sl++
      }
    },
    //减数量
    JIAN(state, id) {
      let ind = state.carData.find(item => item.id === id)
      if (ind.sl > 1) {
        ind.sl--
      } else {
        //如果等于0的话就删除
        state.carData.splice(ind, 1)
      }
    },

  

  },
  actions: {
    //封装axios后在这里接受数据
    getlist(context) {
      $http.get('/api/list').then(res => {
        console.log('/api/list', res)
        context.commit('SET_LIST', res.data)
      })
    }
  },
getters:{
  shuliang(state){
    return state.carData.reduce((a,b)=>{
      return b.checked?a+b.sl:a
      //如果不全选就  a=a+b.sl
    },0)
  },
  zongjia(state){
    return state.carData.reduce((a,b)=>{
      return b.checked ? a+b.sl*b.jq:a
      //如果不全选就  a=a+sl*b.jq

    },0)
  }
},

  modules: {},

})