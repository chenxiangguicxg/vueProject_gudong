<template>
    <div id="sportType">
        <router-link class="miles" :to="{path:'/sport/sportHistory'}">
            <span>{{ sportMiles }}</span>
            <p class="sport-type"></p>
        </router-link>
        <router-link class="sportRecommend" :to="{path:'/sport/sportRecommend'}">{{ sportRecommend }}</router-link>
        <router-link class="goSport" :to="{path:'/sport/goSport'}">GO!</router-link>
        <p @click="$parent.showSlideUp=true" class="sportLideUp">没有别的安排？恰好来运动一下<i class="icon-doubleup iconfont"></i></p>
    </div>

</template>

<script type="text/javascript">
    export default {
         name: "sportType",
         data() {
            return {
                sportMiles: '',
                sportType: '',
                sportRecommend: '',
            }
         },
        mounted: function() {
            let axios = require('axios')
            axios.get('static/json/test.json')
            .then((res) => {
                this.sportMiles = res.data.sport_run.sportMiles;
                this.sportRecommend = res.data.sport_run.sportRecommend;
            })
            .catch((res) => {
                console.log(error)
            });
        }
    }
</script>

<style type="text/css">
    #sportType {
        position: relative;
        text-align: center;
        height: calc(100% - 50px);
    }
    .miles, .goSport, .sportRecommend {
        margin: 20px auto 0;
        display: block; 
    } 
    .miles span, .miles p {
        display: block;  
        color: #000;
        font-size: 3rem;
        font-weight: bold;
    }
    .miles span {
        font-style: italic;
    }
    .miles p {
        margin-top: 10px;
        font-size: 4em;
        color: #009933;
    }
    .sportRecommend {
        margin-top: 2em;
        height: 5px;
        font-size: 1rem;
        color: #bbb !important;
        border: 1px solid #ccc;
        line-height: 30px;
        height: 30px;
        width: 50%;
        border-radius: 20px; 
    } 
    .goSport {
        margin-top: 1em; 
        height: 100px;
        width: 100px;
        border-radius: 100%;
        background-color: #009933;
        color: #fff !important;
        font-size: 3rem;
        font-style: italic;
        line-height: 100px;
        font-weight: bold;
    }
    .sportLideUp {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 666;
        text-align: center; 
        height: 50px; 
        width: 100%;
        border-top: 1px solid #ccc;
        font-size: 1rem; 
        line-height: 50px;
    }
    .icon-doubleup {
        float: right;
        margin-right: 1em;
        font-size: 1rem; 
        opacity: .5;
    }
    .animated {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 88888;
        width: 100%;
        height: 100%; 
    }
</style>