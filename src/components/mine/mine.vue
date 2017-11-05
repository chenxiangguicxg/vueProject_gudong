<template>
    <div id="mine">
        <i class="mine-info iconfont icon-comment" @click="">
            <mt-badge class="comment-badge" size="small" type="error">10</mt-badge>
        </i>

        <div class="mine-head" visible="hidden"></div>

        <mt-cell title="" is-link>
           <img class="user-portrait" :src="user.portrait" /><span>{{ user.userName }}</span><img :src="user.rank" class="mine-rank" />
        </mt-cell>

        <ul class="mine-banner">
            <li><router-link :to="{path: '/mine/concern'}"><span>1</span><br>关注</router-link></li>
            <li><router-link :to="{path: '/mine/fans'}"><span>4</span><br>粉丝</router-link></li>
            <li><router-link :to="{path: '/mine/dynamic'}"><span>5</span><br>动态</router-link></li>
        </ul>

        <div class="mine-record" @click="">
            <i class="iconfont icon-sport"></i>
            <span class="sport-times">{{ mineSport.times }}次运动</span>
            <span class="recent-miles">最近运动{{ mineSport.miles }}公里</span>
            <span class="record-check">查看记录</span>
            <i class="iconfont icon-arrow-right"></i>
        </div>
        
        <ul class="mine-list">
            <li v-for="mineItem in mineList">
                <router-link :to="{path: '/mine/mineItem.path'}">
                    <i :class="['iconfont', 'icon-' + mineItem.icon]"></i>
                    <span class="mine-name">{{ mineItem.name }}</span>
                    <i class="iconfont icon-arrow-right"></i>
                </router-link>
            </li>
        </ul>

        <transition enter-active-class="fadeInRight">
            <router-view class="sport-show animated" ></router-view>
        </transition>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "mine",
        data() {
            return {
                user: '',
                mineSport: '',
                mineList: ''
            }
        },
        components: {

        },
        mounted: function() {
            let axios = require('axios')
            axios.get('static/json/test.json')
            .then((res) => {
                this.user = res.data.user
                this.mineSport = res.data.mineSport
                this.mineList = res.data.mineList
            })
            .catch((res) => {
                console.log(error)
            })
        }
    }
</script>

<style type="text/css" lang="scss" scoped>
    $color: #111;
    $border: 1px solid #ccc;
    $barBorderRadius: 50%;
    .iconfont {
        padding-left: 8px;
        color: #1ab567;
        font-size: 18px;
        line-height: 50px;
    }
    .icon-arrow-right {
        position: absolute;
        right: 6px;
        color: #ccc;
        font-weight: bold;
    }

    .mine {
        background-color: #fff;
    }
    .mine-head {
        height: 40px;     
    }
    .mine-info {
        position: fixed;
        right: 10px;
        top: 10px;
        z-index: 33;
        color: #ccc;
        line-height: 1; 
        font-size: 1.4rem;
        .comment-badge {
            position: absolute;
            top: -5px;
            right: -10px; 
        }
    }
    .mint-badge.is-size-small {
        width: 12px;
        height: 12px;
        font-size: 10px;
        line-height: 12px;
        border-radius: $barBorderRadius;
    }

    .mint-cell-value {
        font-size: 16px;
        color: $color;
        height: 90px;
        .user-portrait {
            position: absolute;
            left: 20px;
            top: 0px;
            display: block;
            width: 44px;
            height: 44px;
            border-radius: $barBorderRadius;
        }
        .mine-rank {
            @extend .user-portrait;
            left: 80px;
            top: 25px;
            height: 20px;
        }
        span {
            position: absolute;
            left: 80px;
            font-size: 1rem;
            top: 4px;
        }
    }

    .mine-banner {
        height: 40px;
        width: 100%;
        border-top: $border;
        li {
            float: left;
            width: 33%; 
        }
        a {
            display: block;
            padding: 10% 0;
            width: 100%;
            font-size: 12px;
            text-align: center;
            span {
                color: $color;
            }
        }
    }

    .mine-record {
        position: relative;
        height: 40px;
        width: 100%;
        color: #ccc;
        line-height: 40px;
        font-size: 12px; 
        .iconfont {
            color: #1ab567;
        }
        .sport-times {
            position: absolute;
            left: 28px;
            top: 8px;
            font-size: 16px;
            @extend .iconfont;
        }
        .recent-miles {
            top: 24px;
            font-size: 12px;
            color: #ccc;
            @extend .sport-times;
        }
        .record-check {
            position: absolute;
            right: 30px;
            line-height: 40px;
        }
    }

    .mine-list {
        margin-top: 20px;
        li {
            height: 50px;
            width: 100%;
            border-bottom: $border;
            a {
                position: relative;
                display: block;
                width: 100%;
                height: 100%;
                span {
                    padding-left: 20px; 
                    font-size: 14px;
                }
            }
        }
    }

</style>