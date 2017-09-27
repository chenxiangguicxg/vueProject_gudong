<template>
    <div id="sport">
        <div class="s-head">
            <div class="s-weather">
                <iframe name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=52&icon=1&num=3" width="180" height="80" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="color: #fff; font-size: 1rem;"></iframe>
            </div>
            <router-link :to="{path:'/sport/calculateSteps'}" class="s-steps">
                <span>今日步数</span>
                <em id="steps">36</em>
                <i class="el-icon-arrow-right"></i>
            </router-link>
        </div>
        <div class="swiper-container">
            <div class="my-pagination"><ul class="my-pagination-ul"></ul></div>
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <sportType></sportType>
                </div>
                <div class="swiper-slide">
                    <sportType></sportType>
                </div>
                <div class="swiper-slide">
                    <sportType></sportType>
                </div> 
            </div>
        </div> 
        <transition enter-active-class="bounceInUp">
            <div v-show="showSlideUp" class="animated sportSlide" id="sportSlide">
                <sportBottom></sportBottom>
            </div>
        </transition>
        <transition enter-active-class="fadeInLeft">
            <router-view class="sport-show animated"></router-view>
        </transition>
    </div>
</template>

<script type="text/javascript">
    import sportType from './sportType.vue'
    import sportBottom from './children/sportBottom.vue'
    export default {
        data() {
            return {
                showSlideUp: false
            }
        },
        components: {
            sportType,
            sportBottom
        },
        methods: {

        },
        mounted: function() { 
            let mySwiper = new Swiper('.swiper-container', {
                pagination: '.my-pagination-ul',
                paginationClickable: true,
                paginationBulletRender: function(index, className) {
                    switch (index) {
                    case 0:
                        name = '跑步'; 
                        break;
                    case 1:
                        name = '健走'; 
                        break;
                    case 2:
                        name = '骑行'; 
                        break;
                    default:
                        name = '';
                    }
                    return '<li class="' + className + '">' + name + '</li>';
                }
            })
        }
    }
</script>

<style type="text/css">
    html, body, #sport, #app {
        height: 100%;
        background-color: #fff;
    }
    /*运动头部样式*/
    .s-head {
        position: relative;
        height: 40px;
        background-color: #009933;
    }
    .s-weather {
        position: absolute;
        left: 10px;
        top: 10px;  
    } 
    .s-steps {
        position: absolute;
        right: 0;
        top: 10px; 
        padding: 0 0 0 10px;
        color: #fff;
        border-radius: 30px 0 0 30px;
        font-size: 0.6rem;
        line-height: 20px;
        background-color: #006633;
    }
    #steps {
        font-size: 1rem;
        padding-left: 4px;
    }
    /*运动tab切换部分*/ 
    .swiper-container {
        width: 100%;
        height: calc(100% - 100px);
    }
    .my-pagination li {
        width: 20%;
        color: #fff;
        font-size: 1rem;
        padding: 5px 0;
        border: 0;
        height: 30px;
        line-height: 30px;
        background-color: #009933;
    } 
    .my-pagination .swiper-pagination-bullet-active {
        color: #006633;
    } 
    .my-pagination li:after {
        position: absolute;
        top: auto;
        right: auto;
        bottom: 0;
        left: 0;
        z-index: 1;
        display: block;
        width: 100%;
        height: 5px;
        content: ''; 
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transform: scaleY(.5);
    }
    .sport-show {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 88888;
        width: 100%;
        height: 100%;
        display: block;
        background-color: #fff;
    }

    .sportSlide {
        background-color: #fff;
    }
</style>