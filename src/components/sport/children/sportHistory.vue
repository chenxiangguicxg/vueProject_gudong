<template>
    <div id="sportHistory">
        <div class="history-head">
            <i class="history-back el-icon-arrow-left" @click="$router.back(-1)"></i>
            历史记录
            <router-link id="sport-statistic" :to="{}">统计</router-link>
        </div>
        
        <ul class="historyList">
            <li class="monthList" v-for="monthItem in monthList">
                <div class="monthTitle">
                    <span class="sportMonth">{{ monthItem.month }}</span>
                    <span class="monthMiles">{{ monthItem.monthMile }} 公里</span>
                </div>
                <ul class="history-detail">
                    <li class="hisDetailList" v-for="detailItem in monthItem.hisDetailList">
                        <div class="hisleft">
                            <i class="iconfont icon-history_run"></i>   <br>
                            <span id="sportDate">{{ detailItem.sportDate }}</span>
                        </div>
                        <div class="hismid">
                            <span id="dayMile">{{ detailItem.dayMile }}</span>
                            <span>公里</span>
                        </div>
                        <div class="hisright">
                            <i class="iconfont icon-total-time"></i><span id="sportSpeed">{{ detailItem.sportSpeed }}</span>   <br>
                            <i class="iconfont icon-average-speed"></i><span id="sportTime">{{ detailItem.sportTime }}</span>   
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <router-view class="sport-statistic"></router-view>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "sportHistory",
        data() {
            return {
                monthList: [
                    {month: '08月', monthMile: '32.00',hisDetailList: [
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                ]},
                    {month: '07月', monthMile: '91.30',hisDetailList: [
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                ]},
                    {month: '06月', monthMile: '32.00',hisDetailList: [
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                    {sportDate: '29日上午',dayMile: '21.07',sportSpeed: '01:03:04',sportTime: '07.12'},
                ]},
                ] 
            }
        }
    }
</script>

<style type="text/css">
    .history-head {
        position: fixed;
        height: 120px;
        width: 100%;
        color: #111;
        font-size: 40px;
        line-height: 120px;
        text-align: center;
        background-color: #fff;
        z-index: 999;
    }
    .historyList {
        position: absolute;
        top: 120px;
        left: 0;
        width: 100%;
    }
    .history-back {
        position: absolute;
        left: 10px;
        top: 30px;
    }
    #sport-statistic {
        position: absolute;
        right: 20px;
        top: 0;
    }

    .monthTitle {
        position: relative;
        height: 80px;
        width: 100%;
        color: #111;
        font-size: 30px;
        line-height: 80px;
        background-color: #ccc;
    }
    .monthTitle span {
        padding: 0 20px;
    }
    .monthMiles {
        position: absolute;
        right: 0;
        top: 0;
    }
    .history-detail li {
        padding: 20px 5% 10px;
    }
    .hisleft, .hismid, .hisright {
        display: inline-block;
        width: 33%;
        color: #111;
        font-size: 30px;
        line-height: 2;
        text-align: center;
    }
    .icon-history_run {
        font-size: 2.5em;
        color: green;
        line-height: 1;
    }
    #dayMile {
        font-size: 2.8em;
        font-weight: bold;
        font-style: italic; 
    }
    .hisright { 
        text-align-last: left;
    }
    .hisright i, .hisright span {
        padding-left: 2em;
        font-size: 1.2em;
    }
    .hisright span {
        padding-left: 0.2em;
    }
</style>