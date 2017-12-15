<template>
<div id="app" style="height: 100%">  
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
    <router-view></router-view>
    </transition>
    <mFooter></mFooter>
</div>
</template>

<script> 
import swiper from '../static/swiper.min.js';
import { adapt } from './assets/js/rootFontsize.js'; 
import mFooter from './components/public/footer.vue';
export default {
  name: 'app',
  components: { 
    mFooter
  },
  mount: function() {
    let defaultFontSize = adapt(640, 100);
  }
}
</script>

<style>
@import '../static/font/iconfont.css';
@import './assets/css/common.css';
@import './assets/css/app.css';
@import './assets/css/animate.css';
@import './assets/css/swiper.min.css';
@import './assets/css/swiper_tab.css';

</style>
