import Vue from 'vue'
import Router from 'vue-router'

import sports from '../components/sports/sports.vue'
import topics from '../components/sports/children/topics.vue'
import more from '../components/sports/children/more.vue'
import equipment from '../components/sports/children/equipment.vue'
import detail from '../components/sports/children/detail.vue'

import find from '../components/find/find.vue'
import storeFind from '../components/find/children/storeFind.vue'
import sportFind from '../components/find/children/sportFind.vue'
import matches from '../components/find/children/matches.vue'
import team from '../components/find/children/team.vue'
import playground from '../components/find/children/playground.vue'
import gudonggo from '../components/find/children/gudonggo.vue'


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
        },
        {
            path: 'detail',
            component: detail
        }]
    }, {
        path: '/find',
        name: 'find',
        component: find,
        children: [{
            path: 'storeFind',
            component: storeFind
        },{
            path: 'sportFind',
            component: sportFind
        },{
            path: 'matches',
            component: matches
        },{
            path: 'team',
            component: team
        },{
            path: 'playground',
            component: playground
        },{
            path: 'gudonggo',
            component: gudonggo
        }]
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