<template>
    <div id="detail">
      <div class="detail-head">
        <i class="detail-back el-icon-arrow-left" @click="$router.back(-1)"></i>
        详情
        <i class="icon-more iconfont"></i>
      </div>

      <div class="detail-bottom">
      	<div class="detail-up">
      		<i class="icon-face iconfont"></i>
      		<input type="text" v-on:input ="watchInput()" placeholder="我要评论">
      		<span :class="{sendAct: sendOr}">发送</span>
      	</div>
      	<ul class="detail-down">
      		<li @click="switcher()">
      			<i :class="{'switchOn': isOpen.good}" class="icon-good iconfont"></i>  赞
      		</li>
      		<li @click="popupShow()">
      			<i class="icon-share iconfont"></i>  分享
      		</li>
      		<li @click="switcher2()">
      			<i :class="{'switchOn': isOpen.collection}" class="icon-collection iconfont"></i>  收藏
      		</li>
      	</ul>
      </div>

	    <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade" class="mint-popup">
            分享到
        </mt-popup>
    </div>
</template>

<script type="text/javascript">
    export default {
    	name: "detail",
    	data() {
    		return {
    			sendOr: false,
    			isOpen: {
					good: false,
					collection: false
				},
				popupVisible: false
    		}
    	},
    	methods: {
    		// 对输入框监听
    		watchInput: function() {
    			this.sendOr = true
    		},
    		// 开关设置
    		switcher: function() {
    			this.isOpen.good = !this.isOpen.good 
    		},
    		switcher2: function() { 
    			this.isOpen.collection = !this.isOpen.collection
			},
			// 显示分享界面
            popupShow: function() { 
                this.popupVisible = true 
            }
    	}
    }
</script>

<style type="text/css" lang="scss">
    @import '../../../assets/css/mixin.scss';

    .sendAct {
        background-color: #00BC70 !important;
    }
    .switchOn {
    	color: #00BC70 !important;
    }
    .switchOff {
    	color: #ccc !important;
    }

	.detail-head {
		position: relative;
		@include wh(100%, 2.5rem);
		text-align: center;
		position: relative;
		line-height: 2.5rem;
		color: #111;
		&:before {
			@include bottomBorder;
		}
		.detail-back {
			@include verticalCenter;
			left: 1rem;
		}
		.icon-more {
			@include verticalCenter;
			right: 1rem;
		}
	}

	.detail-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 5;
		@include wh(100%, 5rem);
		background-color: #F8F8F8;
		.detail-up {
			&:before {
				@include bottomBorder;
			}
			@include wh(100%, 50%);
			position: relative;
			line-height: 2.5rem;
			.icon-face {
				padding-left: 1rem;
				font-size: 2rem;
			}
			input {
				border: none;
				padding-left: 8px;
				@include wh(70%, 2rem);
				@include verticalCenter;
				left: 3rem;
				@include prefixer(border-radius, 1rem, webkit moz o ms);
				outline: none;
				caret-color: #00BC70;
			}
			span {
				@include verticalCenter;
				right: 1rem;
				padding: 8px;
				line-height: 1;
				@include prefixer(border-radius, 0.5rem, webkit moz o ms);
				background-color: #ABABAB;
				color: #fff;
			}
		}
		.detail-down {
			@include wh(100%, 50%);
			line-height: 2.5rem;
			li {
				position: relative;
				display: inline-block;
				@include wh(32%, 100%);
				text-align: center;
				&:not(:last-child):after {
					@include rightBorder;
				}
				.iconfont {
					line-height: 2.5rem;
				}
			}
		}
	}
</style>