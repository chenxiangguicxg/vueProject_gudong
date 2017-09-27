import Vue from 'vue'
import Router from 'vue-router'

import sports from '../components/sports/sports.vue'
import find from '../components/find/find.vue'
import sport from '../components/sport/sport.vue'
import goods from '../components/goods/goods.vue'
import mine from '../components/mine/mine.vue' 

import calculateSteps from '../components/sport/children/calculateSteps.vue'
import sportHistory from '../components/sport/children/sportHistory.vue'
import goSport from '../components/sport/children/goSport.vue'
import sportRecommend from '../components/sport/children/sportRecommend.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: 'sports',
        name: 'sports',
        component: sports
    }, {
        path: '/find',
        name: 'find',
        component: find
    }, {
        path: '/sport',
        name: 'sport',
        component: sport,
        children: [{
            path: 'calculateSteps',
            component: calculateSteps
        },{
            path: 'sportHistory',
            component: sportHistory
        },{
            path: 'goSport',
            component: goSport
        },{
            path: 'sportRecommend',
            component: sportRecommend
        }]
    }, {
        path: '/goods',
        name: 'goods',
        component: goods
    }, {
        path: '/mine',
        name: 'mine',
        component: mine
    }, {
        path: '*',
        redirect: '/sport'
    }]
})