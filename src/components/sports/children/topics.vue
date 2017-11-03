<template>
    <div id="topics">
        <div class="topic-head">
            <i class="topic-back el-icon-arrow-left" @click="$router.back(-1)"></i>
            {{ this.$route.query.id }}
            <div id="topic-join">
                <label for="join">参与</label>
                <input type="file" id="join" capture="camera"> 
            </div>
            <!-- <router-link id="sport-statistic" :to="{}">参与</router-link> -->
        </div>

        <div class="topic-subcontent">
            <img :src="topicItems.imgUrl" />
            <p>{{ topicItems.text }}</p>
            <span>{{ topicItems.people }}人参与</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'topics',
        data() {
            return {
                topicItems: ''
            }
        },
        mounted: function() {
            let axios = require('axios')
            axios.get('/static/json/test.json')
            .then((res) => {
                switch(this.$route.query.id) {
                    case "#21天习惯养成记":
                        this.topicItems = res.data.twentyDays;
                    break;
                    case "#秋季脫剽大战":
                        this.topicItems = res.data.weightLose;
                    break;
                    case "#带上咕咚去旅行":
                        this.topicItems = res.data.travels;
                    break;
                    case "#跑就对了":
                        this.topicItems = res.data.runRight;
                    break;
                }
            })
            .catch((res) => {
                console.log(error)
            })
        }
    }
</script>

<style type="text/css">
    .topic-head {
        position: relative;
        height: 40px;
        width: 100%;
        color: #111;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        background-color: #fff;
        z-index: 999;
        border-bottom: 1px solid #ccc;
    } 
    .topic-back {
        position: absolute;
        left: 10px;
        top: 10px;
    }
    #topic-join {
        position: absolute;
        right: 20px;
        top: 0;
        width: 40px;
        height: 40px;
    }
    #topic-join label {
        color:  #1ab567;
    }
    #join{
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
        width: 128px;
        height: 30px;
        position: absolute;
        display:block;
    }

    .topic-subcontent {
        padding: 10px;
    }
    .topic-subcontent img {
        display: block;
        width: 100%;
        height: 150px;
        border-radius: 10px;
    }
    .topic-subcontent p {
        margin: 8px 0;
        color: #111;
        font-size: 16px;
        line-height: 26px;
        font-weight: bold;
    }
    .topic-subcontent span {
        color: #ccc;
        font-size: 14px;
        line-height: 20px;
    }
</style>