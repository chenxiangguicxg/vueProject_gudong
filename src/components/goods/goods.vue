<template>
    <div id="goods">
        <searchInput></searchInput>

        <div class="nav">
            <a href="javascript: void(0)" v-for="(goodsItem, goodsTabIndex) in goodsTabList" @click="activeContainer = 'tab-container' + goodsTabIndex" :class="{'active': activeContainer == 'tab-container' + goodsTabIndex }">{{ goodsItem.select }}</a>
        </div>

        <div id="goods-tabcontain" class="page-tab-container goods-tabcontain">
            <mt-tab-container class="page-tabbar-tab-container" v-model="activeContainer" swipeable value="tab-container0">
                <mt-tab-container-item id="tab-container0">
                    推荐
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container1">
                    <!-- cell组件 -->
                    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <!-- cell组件 -->
                    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container3">
                    <!-- cell组件 -->
                    <mt-cell v-for="n in 7" title="tab-container 4"></mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container4">
                    <!-- cell组件 -->
                    <mt-cell v-for="n in 7" title="tab-container 5"></mt-cell>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script type="text/javascript">
    import EventUtil from '../../../static/util.js'
    import searchInput from '../public/search.vue'
    import Vue from 'vue'
    export default {
        name: "goods",
        data() {
            return {
                activeContainer: 'tab-container0',
                active: false,
                goodsTabList: [
　　　　　　　　　　{ select: '推荐' },
　　　　　　　　　　{ select: '跑步' },
　　　　　　　　　　{ select: '骑行' },
　　　　　　　　　　{ select: '健身' },
　　　　　　　　　　{ select: '个性' }
　　　　　　　　]
            }
        },
        components: {
            searchInput
        },
        methods: {
            selectStyle(item, index) {
                this.activeContainer = 'tab-container' + index
                // this.$nextTick(function () {
                //     this.items.forEach(function (item) {
                //         Vue.set(item, 'active', false);
                //     });
                //     Vue.set(item, 'active', true);
                // });
            }
        },
        mounted: function () {
            
        }
    }

</script>

<style type="text/css" lang="scss" scoped>
    @import '../../assets/css/mixin.scss';

    .nav {
        position: relative;
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
</style>