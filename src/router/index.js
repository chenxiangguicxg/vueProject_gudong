import Vue from 'vue'
import Router from 'vue-router'

import sports from '../components/sports/sports.vue'
import topics from '../components/sports/children/topics.vue'
import more from '../components/sports/children/more.vue'
import equipment from '../components/sports/children/equipment.vue'

import find from '../components/find/find.vue'
import goods from '../components/goods/goods.vue'

import mine from '../components/mine/mine.vue' 
import concern from '../components/mine/children/concern.vue' 
import fans from '../components/mine/children/fans.vue' 
import dynamic from '../components/mine/children/dynamic.vue' 

import sport from '../components/sport/sport.vue'
import calculateSteps from '../components/sport/children/calculateSteps.vue'
import sportHistory from '../components/sport/children/sportHistory.vue'
import goSport from '../components/sport/children/goSport.vue'
import sportRecommend from '../components/sport/children/sportRecommend.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/sports',
        name: 'sports',
        component: sports,
        children: [{
            path: 'topics',
            component: topics
        },
        {
            path: 'more',
            component: more
        },
        {
            path: 'equipment',
            component: equipment
        }]
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
        component: mine,
        children: [{
            path: 'concern',
            component: concern
        },{
            path: 'fans',
            component: fans
        },{
            path: 'dynamic',
            component: dynamic
        }]
    }, {
        path: '*',
        redirect: '/sport'
    }]
})