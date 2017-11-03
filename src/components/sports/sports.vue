<template>  
  <div>  
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
                <div class="p-head">热门话题<em>更多 > </em></div>
                <div class="topic-list" id="topic-touch">
                    <router-link :to="{path:'/sports/topics', query: {id:topicItem.title}}" v-for="topicItem in topicList" :style="{ backgroundImage: 'url(' + topicItem.url + ')' }">
                        <h3 :topic-title="topicItem.title">{{ topicItem.title }}</h3>
                        <p>{{ topicItem.people }}万人参与</p>
                    </router-link>
                </div> 
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
              topicList: '' 
            };  
        },
        components: {
            searchInput,
            carousel
        }, 
        mounted: function() {
            let axios = require('axios')
            axios.get('static/json/test.json')
            .then((res) => {
                this.topicTitle = res.data.topicList;
                this.topicList = res.data.topicList;
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
    .mint-tab-container-item {
        height: 120px;
    }
    .mint-tab-container {
        overflow: visible;
    }
    .p-head {
        padding-left: 10px;
        height: 40px;
        width: 100%;
        font-size: 16px;
        line-height: 40px;
        text-align: left;
        font-weight: bold;
    }
    .p-head em {
        position: absolute;
        right: 10px;
        color: #ccc;
        font-size: 16px;
        text-align: center;
    }

    .topic-list { 
        display: -webkit-box;
        overflow-x: scroll;
        -webkit-overflow-scrolling:touch;
    }
    .topic-list a {
        display: block;
        margin-left: 10px;
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
</style>  