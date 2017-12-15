<template>
    <div id="find">
        <ul class="find-list">
            <li v-for="findItem in findList">
                <router-link :to="{path: findItem.path }">
                    <div class="find-left">
                        <span class="find-subtitle">{{ findItem.subtitle }}</span><br>
                        <span class="find-subtext">{{ findItem.subtext }}</span>
                    </div>
                    <img :src="findItem.imgUrl" class="find-right" />
                </router-link>
            </li>
        </ul>

        <transition enter-active-class="fadeInRight">
            <router-view class="sport-show animated" ></router-view>
        </transition>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "find",
        data() {
            return {
                findList: '',
            }
        },
        mounted: function() {
            let axios = require('axios')
            axios.get('static/json/test.json')
            .then((res) => {
                this.findList = res.data.findList
            })
            .catch((res) => {
                console.log(error)
            })
        }
    }
</script>

<style type="text/css" lang="scss" scoped>
    @import '../../assets/css/mixin.scss';
    .sport-show {
        background-color: #fff;
    }
    #find {
        @include wh(100%, 100%);
        .find-list {
            @extend #find;
            li {
                position: relative;
                padding: 0.7rem;
                @include wh(calc(100% - 1.4rem), 4.4rem); 
                &:before {
                    content: '';
                    background-color: #ccc;
                    @include leftDownCorner(0, 0);
                    @include wh(100%, 1px); 
                    @include prefixer(transform, scaleY(0.2), webkit moz o ms); 
                }
                a {
                    display: block;
                    @extend #find;
                    .find-left {
                        float: left;
                        .find-subtitle {
                            @include fsc(1rem, #111);
                        }
                        .find-subtext {
                            @include fsc(0.8rem, #999); 
                        }
                    }
                    .find-right {
                        float: right; 
                        @include wh(4rem, 4rem);
                        @include prefixer(clip-path, polygon(5% 5%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%), webkit moz o ms); 
                    }
                }
            }
        }
    }
</style>