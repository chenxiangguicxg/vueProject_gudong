<template>
  <swipe ref="swipe" class="swipe" :auto="3000" id="hot-topic">
      <swipe-item v-for="item in imgList" >
          <router-link :to="{path:''}" :style="{ backgroundImage: 'url(' + item.url + ')' }"></router-link>
      </swipe-item>
  </swipe> 
</template>

<script type="text/javascript">
  import EventUtil from '../../../static/util.js'
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    data() {
      return {
        imgList: ''
      }
    },
    components: {
      Swipe,
      SwipeItem 
    },
    mounted: function() {

      let axios = require('axios');
      let randomBgIndex = Math.round( Math.random() * 2 );
      axios.get('static/json/test.json')
      .then((res) => {
          this.imgList = res.data.sportsCarouelImages;
      })
      .catch((res) => {
          console.log(error)
      });

      let topicTouch = document.getElementById('hot-topic');
      EventUtil.addHandler(topicTouch, "touchmove", function(event) {
        event = EventUtil.getEvent(event);
        EventUtil.stopPropagation(event);
      });
    }
  }
</script>

<style> 

  .swiper-wrapper {
    height: 150px;
  }
  .mint-swipe-item a {
    display: block;
    width: 100%;
    height: 150px; 
    margin: 0;
    background-size: 100% 100%;
  }
</style>