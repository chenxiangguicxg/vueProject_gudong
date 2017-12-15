<template>
    <div id="sports">
        <div class="sports-head">
            <searchInput></searchInput>
            <div class="nav">
                <a href="javascript: void(0)" v-for="(sportsItem, sportsTabIndex) in sportsTabList" @click="activeContainer = 'tab-container' + sportsTabIndex" :class="{'active': activeContainer == 'tab-container' + sportsTabIndex }">{{ sportsItem.select }}</a>
            </div>
        </div>

        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" v-model="activeContainer" swipeable>
                <mt-tab-container-item id="tab-container0">
                    <carousel></carousel>
                    <hotTmp></hotTmp>    

                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container1">
                    <!-- cell组件 -->
                    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <!-- cell组件 -->
                    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

        <div class="sports-popup" :class="{popupRotate:classOr}" @click="popupShow()" size="large">
            <i :class="{popupRotate:classOr}" class="icon-plus iconfont"></i>
        </div>

        <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade" class="mint-popup-4">
            <ul class="popup-list">
                <li v-for="popupItem in popupList">
                    <span>{{ popupItem.type }}</span>
                    <router-link :to="{path: popupItem.path }"><i :class="['iconfont', 'icon-' + popupItem.icon]"></i></router-link>
                </li>
            </ul>
        </mt-popup>

        <transition enter-active-class="fadeInRight">
            <router-view class="sport-show animated"></router-view>
        </transition>
    </div>
</template>

<script>   
import EventUtil from '../../../static/util.js' 
    import searchInput from '../public/search.vue'
    import carousel from '../public/carousel.vue'
    import hotTmp from './children/hotTmp.vue'
    import { Popup } from 'mint-ui'
    export default {
        name: 'sports',
        data() {
            return {
                activeContainer: 'tab-container0',
                sportsTabList: [
                    {select: '热门'},
                    {select: '关注'},
                    {select: '直播'}
                ],
                popupVisible: false, 
                classOr: false, 
                popupList: [
                    {type: '发图片', path: '/sports/topics', icon: 'image'},
                    {type: '发视频', path: '/sports/topics', icon: 'video'},
                    {type: '开直播', path: '/sports/topics', icon: 'live'}
                ]
            };
        },
        components: {
            searchInput,
            carousel,
            hotTmp,
            Popup
        },
        methods: {
            popupShow: function() { 
                this.popupVisible = true
                this.classOr = true 
            }
        },
        mounted: function() {
                // console.log(this.$el.children[4].className)
            // EventUtil.addHandler(moduleElm, "click", function (event) {
            //     this.popupVisible = false
            //     this.classOr = false
            // })
        }
    };  
</script>

<style lang="scss">
    @import '../../assets/css/mixin.scss';

    .animated {
        @include leftUpCorner(0, 0);
        @include wh(100%, 100%);
        z-index: 666;
        background-color: #fff;
    }

    .popupRotate {
        @include prefixer(transform, rotate(45deg), webkit moz o ms);
        @include prefixer(transition-duration, 500ms, webkit moz o ms);
    }

    .sports-head {
        width: 100%;
        position: fixed;
        top: 0;
        left: 10px;
        z-index: 555;
        background-color: #fff;
        .nav {
            margin: 10px 0;
            position: relative;
            @include prefixer(box-shadow, 0 25px 10px -10px #fff, webkit moz o ms);
            &:before {
                content: '';
                background-color: #ccc;
                @include leftDownCorner(0, 0);
                @include wh(100%, 1px);
                @include prefixer(transform, scaleY(0.2), webkit moz o ms);
            }
            a {
                display: inline-block;
                padding: 5px 10px;
            }
            .active {
                color: #1ab567;
                border-bottom: 2px solid #1ab567;
            }
        }
    }

    .sports-popup {
        @include wh(3rem, 3rem);
        @include rightDownCorner(5rem, 1rem);
        @include prefixer(border-radius, 50%, webkit moz o ms);
        position: fixed;
        z-index: 5;
        text-align: center;
        background-color: #00BC70;
        line-height: 3rem;
        @include fsc(1.3rem, #fff);
    }
    .mint-popup-bottom {
        top: auto;
        right: -2.5rem;
        bottom: 8rem;
        left: auto;
        @include prefixer(transform, translate3d(-50%, 0, 0), webkit moz o ms); 
        background-color: transparent;
        .popup-list {
            @include wh(100%, 100%);
            li {
                @include wh(100%, 4rem);
                span { 
                    line-height: 3rem;
                    padding-left: 10px;
                    @include fsc(1rem, #111);
                }
                a {
                    display: inline-block;
                    @include wh(3rem, 3rem);
                    @include prefixer(border-radius, 50%, webkit moz o ms);
                    background-color: #00BC70;
                    text-align: center;
                    line-height: 3rem;
                    .iconfont {
                        @include fsc(1.2rem, #fff);
                    }
                }
            }
        }
    }

    #sports {
        padding-top: 94px;
        @include wh(100%, 100%);
        .v-modal {
            background-color: #fff;
            opacity: 0.8;
        }
        .page-tab-container {
            height: 100%;
            .page-tabbar-tab-container {
                height: 100%;
                .mint-tab-container-wrap {
                    height: 100%;
                    .mint-tab-container-item {
                        height: 100%; 
                        .mint-swipe {
                            height: 120px;
                        }
                    }
                }
            }
        }
    }  
</style>