<template>
    <div id="searchIput">
        <router-link :to="{}" class="search">
            <i class="icon-search iconfont" ></i>
            <input type="text" placeholder="搜索用户 运动团 文章 动态 商品" />
        </router-link>
        <i class="icon-code iconfont"></i>
    </div> 
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

<style type="text/css" lang="scss" scoped>
    @import '../../assets/css/mixin.scss'; 
    #searchIput {
        position: relative;
        @include wh(97%, 2.5rem); 
        .search {
            display: block;
            position: absolute;
            left: 5%;
            top: 5px;
            @include wh(80%, 100%);
            float: left; 
            input {
                padding-left: 10%;
                outline: none;
                background-color: rgba(221, 221, 221, 0.37);
                border: none;
                @include wh(90%, 2rem); 
                @include prefixer(border-radius, 0.25rem, webkit moz o ms); 
            }
            .icon-search {
                position: absolute;
                top: 4px; 
                color: #ccc;
            }
        }
        .icon-code {
            float: right;
            width: 2rem;
            text-align: left;
            margin-top: 8px;
        }
    }  
    
</style>