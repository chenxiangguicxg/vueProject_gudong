<template>
    <div id="foot-nav">
        <ul class="foot-nav">
          <li v-for="nav in footNav" :class="['link']">
            <router-link :to="{ name: nav.hash}">
              <i :class="['iconfont', 'icon-display', 'icon-' + nav.icon]"></i>
              <em :class="['nav-text']">{{ nav.title }}</em>
            </router-link>
          </li>
        </ul> 
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'foot-nav',
        data() {
            return {
                footNav: [
                    {title: '运动圈', icon: 'sports', hash: 'sports'},
                    {title: '发现', icon: 'find', hash: 'find'},
                    {title: '运动', icon: 'sport', hash: 'sport'},
                    {title: '干货', icon: 'goods', hash: 'goods'},
                    {title: '我的', icon: 'mime', hash: 'mine'}
                ]
            }
        },
        mounted: function() {
            let mineBadge = document.createElement('sup');
            let mineLocation = document.getElementsByTagName('li');
            let arg = mineLocation.length; 
            mineBadge.innerHTML = 23;
            mineBadge.style.cssText = 'width:20px;height:20px;line-height: 20px;position:absolute;right:10px; top: -8px;background: red;border-radius: 100%;';
            mineLocation[arg - 1].appendChild(mineBadge);
        }
    }
</script>

<style type="text/css" lang="scss">
    @import '../../assets/css/mixin.scss';
    #foot-nav {
        @include prefixer(box-shadow, 0 2px 5px 8px #fff, webkit moz o ms);
        &:before {
            @include bottomBorder;
            @include leftUpCorner(0, 0);
        }
    }
</style>