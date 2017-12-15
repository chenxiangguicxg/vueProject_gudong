<template>
    <div id="hot">
        <div class="hot-topic">
            <div class="p-head">热门话题
                <em @click="transferTo('/sports/more', '')">更多 > </em>
            </div>
            <div class="topic-wrap">
                <div class="topic-list" id="topic-touch">
                    <router-link :to="{path:'/sports/topics', query: {id:topicItem.title}}" v-for="topicItem in topicList" :style="{ backgroundImage: 'url(' + topicItem.url + ')' }">
                        <h3 :topic-title="topicItem.title">{{ topicItem.title }}</h3>
                        <p>{{ topicItem.people }}万人参与</p>
                    </router-link>
                </div>
            </div>
            <router-link class="fit-com" :to="{path:'/sports/topics', query: {id:dailyItem.title}}">
                <div class="com-left" :style="{ backgroundImage: 'url(' + dailyItem.url + ')' }"></div>
                <div class="com-right">
                    <h3>{{ dailyItem.title }}</h3>
                    <p>{{ dailyItem.text }}</p>
                    <span>
                        <img class="com-img1" :src="dailyItem.iconUrl1" />
                        <img class="com-img2" :src="dailyItem.iconUrl2" />
                        <img class="com-img3" :src="dailyItem.iconUrl3" />
                        <span class="com-people">等{{ dailyItem.people }}万人参加</span>
                    </span>
                </div>
            </router-link>
            <router-link class="fit-com" :to="{path:'/sports/topics', query: {id:wisdomItem.title}}">
                <div class="com-left" :style="{ backgroundImage: 'url(' + wisdomItem.url + ')' }"></div>
                <div class="com-right">
                    <h3>{{ wisdomItem.title }}</h3>
                    <p>{{ wisdomItem.text }}</p>
                    <span>
                        <img class="com-img1" :src="wisdomItem.iconUrl1" />
                        <img class="com-img2" :src="wisdomItem.iconUrl2" />
                        <img class="com-img3" :src="wisdomItem.iconUrl3" />
                        <span class="com-people">等{{ wisdomItem.people }}万人参加</span>
                    </span>
                </div>
            </router-link>
        </div>

        <div class="hot-activity">
            <h2 class="nomore">热门活动</h2>
            <div @click="transferTo('/sports/topics', activity.title)" class="activity-go" :style="{backgroundImage: 'url(' + activity.url + ')'}">{{ activity.title }}</div>
        </div>

        <div class="discuss-area">
            <div class="p-head">讨论专区
                <em @click="transferTo('/sports/more', '')">更多 > </em>
            </div>
            <div @click="transferTo('/sports/equipment', equipment.title)" class="activity-go" :style="{backgroundImage: 'url(' + equipment.url + ')'}">{{ equipment.title }}</div>
        </div>

        <div class="recomd-pl">
            <div class="p-head">推荐达人
                <em @click="transferTo('/sports/more', '')">更多 > </em>
            </div>
            <ul class="rcmd-list"  id="rcmd-touch">
                <li v-for="(rcmdItem, rcmdIndex) in rcmdList">
                    <div class="rcmd-up">
                        <router-link class="rcmd-img" :to="{path:''}" :style="{ backgroundImage: 'url(../../../../static/img/' + rcmdItem.url + ')' }"></router-link>
                        <span class="rcmd-name">{{ rcmdItem.name }}</span>
                        <span class="rcmd-attention" :id="rcmdIndex" @click="attention(rcmdIndex)">关注</span>
                    </div>
                    <ul class="rcmd-description">
                        <li>{{ rcmdItem.description1 }}</li>
                        <li>{{ rcmdItem.description2 }}</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="video-area">
            <h2 class="nomore">精选视频</h2>
            <div class="video-list" id="video-touch">
                <router-link :to="{path:'/sports/detail'}" v-for="videoItem in videoList">
                    <div class="video-item" :style="{ backgroundImage: 'url(../../../../static/img/' + videoItem.url + ')' }">
                        <i class="icon-play iconfont"></i>
                    </div>
                    <p>{{ videoItem.txt }}</p>
                </router-link>
            </div>
        </div>

        <div class="dynamic-area">
            <h2 class="nomore">精选动态</h2>
            <div class="dynamic-list">
                <router-link :to="{path:'/sports/detail'}" v-for="dynamicItem in dynamicList">
                    <div class="dynamic-item" :style="{ backgroundImage: 'url(../../../../static/img/' + dynamicItem.url + ')' }"></div>
                    <p>{{ dynamicItem.txt }}</p>
                    <div class="dymc-port" :style="{ backgroundImage: 'url(../../../../static/img/' + dynamicItem.url2 + ')' }">{{ dynamicItem.name }}</div>
                    <span class="dymc-zan"><i class="icon-good iconfont"></i>{{ dynamicItem.zan }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import EventUtil from '../../../../static/util.js' 
import { Toast } from 'mint-ui';
export default {
    name: 'hot',
    data() {
        return { 
            topicTitle: [''],
            topicList: '',
            dailyItem: '',
            wisdomItem: '',
            activity: '',
            equipment: '',
            rcmdList: '',
            videoList: '',
            dynamicList: ''
        };
    }, 
    methods: {
        // 跳转到指定页面
        transferTo: function (path, query) {
            this.$router.push({ path: path, query: { id: query } })
        },
        // 关注和取消关注设置
        attention: function(id) {
            let mark = document.getElementById(id);
            let markTxt = mark.innerText;
            if (markTxt == '关注') {
                document.getElementById(id).innerText = "已关注";
                mark.style.cssText = 'background-color: #fff; border: 1px solid #ccc; color: #ccc; right: 0.2rem;';
                Toast({message: '正在关注', duration: 1000});
            }
            else {
                document.getElementById(id).innerText = "关注";
                mark.style.cssText = 'background-color: #1ab567; border: none; color: #fff; right: 0.5rem;';
                Toast({message: '正在取消关注', duration: 1000});
            }
        },
        stopPropagationTouch: function(elmId) {
            let tochElm = document.getElementById(elmId);
            EventUtil.addHandler(tochElm, "touchmove", function (event) {
                event = EventUtil.getEvent(event);
                EventUtil.stopPropagation(event);
            });
        }
    },
    mounted: function () {
        let axios = require('axios')
        axios.get('static/json/test.json')
            .then((res) => {
                this.topicTitle = res.data.topicList;
                this.topicList = res.data.topicList;
                this.dailyItem = res.data.dailyItem;
                this.wisdomItem = res.data.wisdomItem;
                this.activity = res.data.hotActivity;
                this.equipment = res.data.equipment;
                this.rcmdList = res.data.rcmdList;
                this.videoList = res.data.videoList;
                this.dynamicList = res.data.dynamicList;
            })
            .catch((res) => {
                console.log(error)
            });
        function stopPropagationTouch (elmId) {
            let tochElm = document.getElementById(elmId);
            EventUtil.addHandler(tochElm, "touchmove", function (event) {
                event = EventUtil.getEvent(event);
                EventUtil.stopPropagation(event);
            });
        }
        stopPropagationTouch('topic-touch');
        stopPropagationTouch('rcmd-touch');
        stopPropagationTouch('video-touch');
    }
}; 
</script>

<style type="text/css" lang="scss" scoped>
    @import '../../../assets/css/mixin.scss';
    .p-head {
        position: relative;
        @include wh(100%, 2.5rem); 
        font-size: 0.9rem;
        line-height: 2.5rem;
        text-align: left;
        em {
            @include rightUpCorner(0, 0.7rem); 
            @include fsc(0.9rem, #ccc); 
            text-align: center;
        }
    }
    .topic-wrap {
        @include wh(100%, 5rem);
        overflow: hidden;
        .topic-list {
            @include scrollHorizontal;
            a {
                display: block;
                margin-right: 10px;
                @include wh(120px, 100%); 
                @include prefixer(border-radius, 0.5rem, webkit moz o ms);
                p {
                    margin-top: 0;
                    @include fsc(0.8rem, #fff); 
                    line-height: 1.5rem; 
                    text-align: center;
                }
                h3 {
                    margin-top: 1rem;
                    @extend p;
                } 
            }
        }
    }
    .fit-com {
        display: block;
        margin-top: 10px;
        @include wh(100%, 100px);
        .com-left {
            float: left;
            display: block;
            margin-right: 1rem;
            @include wh(100px, 100px);
            background-size: $bsize;
            @include prefixer(border-radius, 0.5rem, webkit moz o ms);
        }
        .com-right {
            float: left;
            @include wh(calc(100% - 135px), 100px); 
            h3 {
                @include fsc(1rem, #111); 
                line-height: 1.5rem;
                font-weight: bold;
            }
            p {
                margin: 6px 0;
                height: 2rem;
                @include fsc(0.8rem, #666);  
                line-height: 1rem;
            }
            span {
                position: relative;
                width: 100%;
                display: block;
                img {
                    @include leftUpCorner(0, 0);
                    display: block;
                    @include wh(30px, 30px);
                    @include prefixer(border-radius, 50%, webkit moz o ms);
                }
                .com-img2 {
                    left: 20px;
                }
                .com-img3 {
                    left: 40px;
                }
                .com-people {
                    display: block;
                    @include leftUpCorner(0, 80px); 
                    font-size: 0.9rem;
                    line-height: 30px;
                }
            }
        }
    }
    .hot-activity {
        margin-top: 10px;
        @include wh(100%, 120px);
        .nomore {
            font-size: 0.9rem;
            line-height: 1.4rem;
        }
        .activity-go {
            @include wh(100%, 80px); 
            @include fsc(1.4rem, #fff); 
            line-height: 5rem;
            background-size: $bsize;
        }
    }
    .discuss-area {
        margin: 0;
        text-align: center;
        @extend .hot-activity;
    }
    .recomd-pl {
        @include wh(100%, 9rem);
        .rcmd-list {
            @include wh(100%, 6.5rem);
            @include scrollHorizontal;
            li { 
                @include wh(180px, 100%);
                background-color: #f9f9fd;
                margin-right: 0.5rem;
                .rcmd-up {
                    &:before {
                        @include bottomBorder;
                    };
                    position: relative;
                    @include wh(100%, 60%);
                    .rcmd-img {
                        @include verticalCenter;
                        @include wh(2.5rem, 2.5rem);
                        background-size: $bsize;
                        @include prefixer(border-radius, 50%, webkit moz o ms);
                    }
                    .rcmd-name { 
                        @include fsc(0.8rem, #000);
                        @include verticalCenter;
                        left: 3rem;
                    }
                    .rcmd-attention {
                        @include verticalCenter;
                        right: 1rem;
                        padding: 5px 12px;
                        background-color: #1ab567;
                        @include fsc(0.6rem, #fff);
                        @include prefixer(border-radius, 50%, webkit moz o ms);
                    }
                }
                .rcmd-description {
                    li {
                        padding-top: 0.15rem;
                        @include fsc(0.6rem, #222);
                        list-style: inside;
                    }
                }
            }
        }
    }
    .video-area {
        margin-top: 1rem;
        @include wh(100%, 10rem);
        .nomore {
            font-size: 0.9rem;
            line-height: 1.4rem;
        }
        .video-list {
            @include scrollHorizontal;
            @include wh(100%, 100%);
            a {
                display: block;
                @include wh(7rem, 100%);
                margin-right: 0.8rem;
                .video-item {
                    @include wh(7rem, 6.5rem);
                    background-size: $bsize;
                    @include prefixer(border-radius, 0.5rem, webkit moz o ms);
                    text-align: center;
                    @include prefixer(filter, brightness(.5), webkit moz o ms); 
                    .icon-play {
                        @include fsc(3rem, #fff);
                        line-height: 6.5rem;

                    }
                }
                p {
                    margin-top: 0.3rem;
                    width: 7rem;
                    @include fsc(0.6rem, #111);
                }
            }
        }
    }

    .dynamic-area {
        margin-top: 1rem;
        width: 100%;
        .nomore {
            font-size: 0.9rem;
            line-height: 1.4rem;
        }
        .dynamic-list { 
            @include clearfix;
            a {
                position: relative;
                @include wh(46%, 12rem);
                display: block;
                float: left;
                margin-right: 1rem;
                &:nth-child(2n) {
                    margin-right: 0;
                }
                .dynamic-item {
                    @include wh(100%, 9rem);
                    background-size: $bsize;
                    @include prefixer(border-radius, 0.5rem, webkit moz o ms);
                }
                p {
                    @include fsc(0.6rem, #111);
                }
                .dymc-port {
                    height: 1.5rem;
                    padding-left: 1.5rem;
                    @include fsc(0.6rem, #111);
                    line-height: 1.5rem;
                    background-size: 1.2rem 1.2rem;
                    background-position: 0.2rem 0.2rem;
                    background-repeat: no-repeat;
                }
                .dymc-zan {
                    @include rightDownCorner(0.5rem, 0.5rem);
                    z-index: 3;
                    cursor: pointer;
                }
            }
        }
    }
</style>