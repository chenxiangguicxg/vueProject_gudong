<template>  
  <div id="sports">  
    <searchInput></searchInput>
    <div class="nav">  
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">热门</mt-button>  
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">关注</mt-button>  
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">直播</mt-button>  
    </div>  
      
    <div class="page-tab-container">  
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>  
            <mt-tab-container-item id="tab-container1">  
                <carousel></carousel>

                <div class="hot-topic">
                    <div class="p-head">热门话题<em @click="transferTo('/sports/more', '')">更多 > </em></div>
                    <div class="topic-list" id="topic-touch">
                        <router-link :to="{path:'/sports/topics', query: {id:topicItem.title}}" v-for="topicItem in topicList" :style="{ backgroundImage: 'url(' + topicItem.url + ')' }">
                            <h3 :topic-title="topicItem.title">{{ topicItem.title }}</h3>
                            <p>{{ topicItem.people }}万人参与</p>
                        </router-link>
                    </div> 
                    <router-link class="fit-daily" :to="{path:'/sports/topics', query: {id:dailyItem.title}}">
                        <div class="daily-left" :style="{ backgroundImage: 'url(' + dailyItem.url + ')' }"></div>
                        <div class="daily-right">
                            <h3>{{ dailyItem.title }}</h3>
                            <p>{{ dailyItem.text }}</p>
                            <span>
                                <img class="daily-img1" :src="dailyItem.iconUrl1" />
                                <img class="daily-img2" :src="dailyItem.iconUrl2" />
                                <img class="daily-img3" :src="dailyItem.iconUrl3" />
                                <span id="daily-people">等{{ dailyItem.people }}万人参加</span>
                            </span>
                        </div>
                    </router-link>
                    <router-link class="fit-wisdom" :to="{path:'/sports/topics', query: {id:wisdomItem.title}}">
                        <div class="wisdom-left" :style="{ backgroundImage: 'url(' + wisdomItem.url + ')' }"></div>
                        <div class="wisdom-right">
                            <h3>{{ wisdomItem.title }}</h3>
                            <p>{{ wisdomItem.text }}</p>
                            <span>
                                <img class="wisdom-img1" :src="wisdomItem.iconUrl1" />
                                <img class="wisdom-img2" :src="wisdomItem.iconUrl2" />
                                <img class="wisdom-img3" :src="wisdomItem.iconUrl3" />
                                <span id="wisdom-people">等{{ wisdomItem.people }}万人参加</span>
                            </span>
                        </div>
                    </router-link>
                </div>

                <div class="hot-activity">
                    <h2>热门活动</h2>
                    <div @click="transferTo('/sports/topics', activity.title)" class="activity-go" :style="{backgroundImage: 'url(' + activity.url + ')'}">{{ activity.title }}</div>
                </div>

                <div class="discuss-area">
                    <div class="p-head">讨论专区<em @click="transferTo('/sports/more', '')">更多 > </em></div>
                    <div @click="transferTo('/sports/equipment', equipment.title)" class="activity-go" :style="{backgroundImage: 'url(' + equipment.url + ')'}">{{ equipment.title }}</div>
                </div>
            </mt-tab-container-item>  
            <mt-tab-container-item id="tab-container2">  
                <!-- cell组件 -->  
              <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>  
            </mt-tab-container-item>  
            <mt-tab-container-item id="tab-container3">  
                <!-- cell组件 -->  
              <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>  
            </mt-tab-container-item>  
        </mt-tab-container>  
    </div>  

    <transition enter-active-class="fadeInRight">
        <router-view class="sport-show animated" ></router-view>
    </transition>
  </div>  
</template>  
  
<script>  
    import EventUtil from '../../../static/util.js'
    import searchInput from '../public/search.vue' 
    import carousel from '../public/carousel.vue'
    export default {  
        name: 'page-tab-container',  
        data() {  
            return {  
              active: 'tab-container1',
              topicTitle: [''],
              topicList: '',
              dailyItem: '',
              wisdomItem: '',
              activity: '',
              equipment: '',
            };  
        },
        components: {
            searchInput,
            carousel
        }, 
        methods: {
            transferTo: function(path, query) {
                this.$router.push({ path: path, query: {id: query}})
            }
        },
        mounted: function() {
            let axios = require('axios')
            axios.get('static/json/test.json')
            .then((res) => {
                this.topicTitle = res.data.topicList;
                this.topicList = res.data.topicList;
                this.dailyItem = res.data.dailyItem;
                this.wisdomItem = res.data.wisdomItem;
                this.activity = res.data.hotActivity;
                this.equipment = res.data.equipment;
            })
            .catch((res) => {
                console.log(error)
            });

            let topicTouch = document.getElementById('topic-touch');
            EventUtil.addHandler(topicTouch, "touchmove", function(event) {
              event = EventUtil.getEvent(event);
              EventUtil.stopPropagation(event);
            });
        }  
    };  
</script>  
  
<style scoped>      
    #sports {
        width: 100%;
        height: 100%;
    }
    .mint-swipe {
        height: 120px;
    }
    .mint-tab-container {
        overflow: visible;
    }
    .p-head {
        height: 40px;
        width: 100%;
        font-size: 14px;
        line-height: 40px;
        text-align: left; 
    }
    .p-head em {
        position: absolute;
        right: 10px;
        color: #ccc;
        font-size: 14px;
        text-align: center;
    }

    .topic-list { 
        display: -webkit-box;
        overflow-x: scroll;
        -webkit-overflow-scrolling:touch;
    }
    .topic-list a {
        display: block;
        margin-right: 10px;
        width: 120px;
        height: 80px;
        border-radius: 8px;
    }  
    .topic-list a h3, .topic-list a p {
        margin-top: 16px;
        font-size: 12px;
        line-height: 24px;
        color: #fff;
        text-align: center;
    } 
    .topic-list a p {
        margin-top: 0;
    }

    .item {  
        display: inline-block;  
    }  
  
    .nav {  
        padding: 10px;  
    }  
      
    .link {  
        color: inherit;  
        padding: 20px;  
        display: block;  
    }  
    
    .fit-daily, .fit-wisdom {
        display: block;
        margin-top: 10px;
        width: 100%;
        height:100px;
    }
    .daily-left, .wisdom-left {
        float: left;
        display: block;
        margin-right: 15px;
        width: 100px;
        height: 100px;
        background-size: 100% 100%;
        border-radius: 6px;
    }
    .daily-right, .wisdom-right {
        float: left;
        height: 100px;
        width: calc(100% - 135px);
    }
    .daily-right h3, .wisdom-right h3 {
        color: #111;
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
    }
    .daily-right p, .wisdom-right p {
        margin: 6px 0;
        height: 32px;
        color: #666;
        font-size: 12px;
        line-height: 16px;
    }
    .daily-right span, .wisdom-right span {
        position: relative;
        width: 100%;
        display: block;
    }
    .daily-right span img, .wisdom-right span img {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .daily-right span .daily-img2, .wisdom-right span .wisdom-img2 {
        left: 20px;
    }
    .daily-right span .daily-img3, .wisdom-right span .wisdom-img3 {
        left: 40px;
    }
    .daily-right span #daily-people, .wisdom-right span #wisdom-people {
        display: block;
        position: absolute;
        left: 80px; 
        font-size: 14px;
        line-height: 30px;
    }

    .hot-activity {
        margin-top: 10px;
        height: 100px;
        width: 100%;
    }
    .hot-activity h2 {
        font-size: 14px;
        line-height: 20px;
    }
    .hot-activity .activity-go {
        height: 80px;
        width: 100%;
        font-size: 20px;
        color: #fff;
        line-height: 80px;
        background-size: 100% 100%;
    }
</style>  