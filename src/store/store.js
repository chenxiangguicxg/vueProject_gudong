import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

const state = {
    sportMiles: 233,
    sportType: '健走',
    sportRecommend: '菜鸟',
}

export default new Vuex.Store({
    state, 
    actions,
    mutations,
})