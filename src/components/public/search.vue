<template>
    <div id="searchIput">
        <router-link :to="{}" class="search">
            <i class="icon-search iconfont" ></i>
            <input type="text" placeholder="搜索用户 运动团 文章 动态 商品" />
        </router-link>
        <i class="icon-code iconfont"></i>
    </div> 
<!--     <transition enter-active-class="fadeIn">
        <div v-show="" class="animated sportSlide" id="">
            
        </div>
    </transition> -->
</template>

<script>
    export default {
        name: 'searchIput',
        data() {
            return {
              
            }
        }
    }
</script>

<style type="text/css" scoped>
    #searchIput {
        height: 40px;
    } 
    .search {
        display: block;
        padding: 5px 5%;
        width: 80%;
        float: left;
        font-size: 1rem;
        left: 120px;
    }
    .search input {
        padding-left: 10%;
        width: 90%;
        height: 30px;
        outline: none;
        background-color: rgba(221, 221, 221, 0.37);
        border: none;
        border-radius: 4px;
    }
    .search .icon-search {
        position: absolute;
        top: 8px;
        left: 6%;
        color: #ccc;
    }
    .icon-code {
        float: right;
        width: 10%;
        text-align: left;
        margin-top: 8px;
    }
</style>