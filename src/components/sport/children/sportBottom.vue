<template>
    <div id="sportBottom">
        <div id="bottomTabHead">
            <ul id="bottomTabList">
                <li v-for="bottomTabItem in bottomTabList" :class="[bottomTabItem.active?'active':'']">
                    <i :class="['icon', 'iconfont', 'icon-' + bottomTabItem.icon]"></i>
                </li>
            </ul>
            <p @click="$parent.showSlideUp=false" class="bottomSlideDown"><i class="icon-down iconfont"></i></p>
        </div>
        <div id="bottomRecommend" class="bottomTabCom">
            <p id="recommendTit"><span>为您推荐</span><span id="recomendChange">换一换</span></p>
            <ul id="recommendList">
                <li v-for="recomendItem in recommendList" v-show="recomendItem.recommendShow"> 
                    <router-link class="rcommendLink" :to="{}">
                        <img :src="baseUrl + recomendItem.recommendImgUrl" class="li-img" />
                        <p class="li-tit">{{ recomendItem.tit }}</p>
                        <div class="li-subtit"><span class="matchName">{{ recomendItem.matchName }}</span><span class="matchAddress">{{ recomendItem.matchAddress }}</span></div>
                        <i id="icon-closebtn" class="icon-closebtn iconfont" @click="recomendItem.recommendShow=false"></i>
                    </router-link>
                </li> 
            </ul>
        </div>
        <div class="bottomTabCom">
            <calendar :range="calendar2.range" :lunar="calendar2.lunar" :value="calendar2.value" :begin="calendar2.begin" :end="calendar2.end" @select="calendar2.select"></calendar>
        </div>
    </div>
</template>

<script type="text/javascript">

    import calendar from './calendar.vue'

    export default {
        name: "sportBottom",
        data() {
            return {
                bottomTabList: [
                    {icon: 'menu', active: true},
                    {icon: 'calendar', active: false},
                ],
                datValue: '',
                calendar2: {
                    range:true,
                    value:[[2017,2,16],[2019,2,16]], //默认日期
                    lunar:true, //显示农历
                    begin:[2016,2,16], //可选开始日期
                    end:[2019,2,16], //可选结束日期
                    select(begin,end){
                        // console.log(begin.toString(),end.toString());
                    }
                },  
                baseUrl: "../../../../static/img/",
                recommendList: [
                    {recommendImgUrl: "mls1.jpg", tit: "2017年北京国际马拉松", matchName: "线上比赛", matchAddress: "奥森公园", recommendShow: true},
                    {recommendImgUrl: "same1.jpg", tit: "2017年北京女子半程马拉松", matchName: "同城赛事", matchAddress: "奥森公园", recommendShow: true},
                    {recommendImgUrl: "train1.jpg", tit: "超燃脂训练", matchName: "训练计划", matchAddress: "奥森公园", recommendShow: true}
                ]
            }
        },
        components: {
            calendar
        },
        methods: {
            
        },
        mounted: function() { 
            let bottomTabLists = [...document.querySelectorAll('#bottomTabList li')];
            bottomTabLists.find((item, index, analyzeArr) => {
                item['onclick'] = () => { 
                    let tabItems = [...document.querySelectorAll('.bottomTabCom')];
                    tabItems.find((tabItem, tabIndex, tabArr) => {
                        tabItem.style.display = 'none';   
                    });
                    tabItems[index].style.display = 'block'; 
                    analyzeArr.find((t) => {
                        t.className = '';
                    });
                    analyzeArr[index].className = 'active'; 
                }
            });

            let changeBtn = document.getElementById('recomendChange');
            changeBtn['onclick'] = () => {
                let axios = require('axios');
                let randomBgIndex = Math.round( Math.random() * 2 );
                axios.get('static/json/test.json')
                .then((res) => {
                    this.recommendList = res.data.recommend[randomBgIndex];
                })
                .catch((res) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style type="text/css" scoped>
    /*为您推荐样式*/
    #recommendTit {
        height: 50px;
        width: 100%;
        font-size: 0.8rem;
        line-height: 40px;
    }
    #recommendTit span {
        width: 100px;
        text-align: center;
        float: left;
    }
    #recommendTit #recomendChange {
        float: right;
        color: #009933;
        cursor: pointer;
    }

    .rcommendLink {
        display: block;
        width: 100%;
        height: 70px;
    }

    #bottomTabHead {
        height: 40px;
        border-bottom: 1px solid #ccc;
    }
    #bottomTabList, .bottomSlideDown {
        float: left; 
        height: 40px;
        font-size: 1rem;
        line-height: 36px;
    }
    .bottomSlideDown {
        text-align: right;
        padding-right: 30px;
        float: right;
    }
    #bottomTabList li {
        float: left;
        padding: 0 20px;
    }
    #bottomTabList li.active {
        color: #009933;
        border-bottom: 3px solid #009933;
        margin-bottom: -3px;
    }

    .bottomTabCom {
        display: none;
        height: 700px; 
    }
    #bottomRecommend {
        display: block;
    }

    /*日历样式设计*/
    .calendar, .calendar>div, .calendar>div table {
        height: 100%;
    } 

    /*推荐样式设置*/
    #recommendList li {
        position: relative;
        width: 100%;
        height: 70px;
    }
    .li-img {
        display: block;
        position: absolute;
        left: 20px;
        top: 10px;
        width: 50px;
        height: 50px;
    }
    .li-tit, .li-subtit {
        position: absolute;
        left: 80px;
        top: 10px;
        height: 24px;
        color: #111;
        font-size: 1rem;
        line-height: 24px;
    }
    .li-subtit { 
        top: 35px;
    }
    .li-subtit .matchName {
        color: #009933;
        font-size: 0.7rem;
        border: 1px solid #009933;
        padding: 2px 5px;
    }
    .li-subtit .matchAddress {
        margin-left: 10px;
    }
    .icon-closebtn {
        position: absolute;
        right: 30px;
        top: 30px;
        font-size: 1rem;
    }
</style>