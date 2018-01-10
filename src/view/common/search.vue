<template>
	<div class="searchBox">
		<div class="address" @click="selectCity">北京</div>
		<div class="textBox">
			<input type="text" class="search_text" name="search" placeholder="搜索项目/诊所/医生">
			<div class="searchBtn"></div>
			<div class="searchDelbtn" @click="searchDel"></div>
		</div>
		<toast v-model="showTips" width="10em" type="text" :time="800" position="middle">暂只支持北京地区</toast>
	</div>
</template>
<script>
	import { Toast } from 'vux'
	export default{
	  components: {
	    Toast
	  },
	  data () {
	    return {
	      address: '北京',
	      showTips: false
	    }
	  },
	  methods: {
	    searchDel () {
	      console.log('ok')
	    },
	    selectCity () {
	      this.showTips = true
	    }
	  }
	}
</script>
<style lang="scss" scoped>
	@import "./static/css/mixin.scss";
	.searchBox{
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: left;
		.address{
			height: 30px;
			line-height: 30px;
			float: left;
			font-size: 14px;
			color: #ffffff;
			margin-left: 15px;
			padding-right: 20px;
			margin-top: 10px;
			background: url(/static/images/arrowdown.png) no-repeat right center;
			background-size: auto 26%;
		};
		.textBox{
			position: relative;
			overflow: hidden;
			float: left;
			background:url(/static/images/searchDel.png) no-repeat right 8px center;
			background-size: auto 56%;
			margin-top: 10px;
			.searchBtn{
				width: 30px;
				height: 30px;
				position: absolute;
				left: 4px;
				top: 0;
			};
			.searchDelbtn{
				width: 30px;
				height: 30px;
				position: absolute;
				right: 0;
				top: 0;
			};
			.search_text{
				height: 30px;
				font-size: 14px;
				text-align: center;
				margin-left:10px;
				padding:0 20px;
				border-radius: 8px;
				border: 0;
				background:url(/static/images/search.png) no-repeat 6px center;
				background-size: auto 60%;
				background-color:#3c85ff;
				opacity: 0.6;
	      		color: #ffffff;
			};
			::-webkit-input-placeholder { /* WebKit, Blink, Edge */
			   color: #ffffff;
			};
			:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
			   color: #ffffff;
			};
			::-moz-placeholder { /* Mozilla Firefox 19+ */
			   color: #ffffff;
			};
			:-ms-input-placeholder { /* Internet Explorer 10-11 */
			   color: #ffffff;
			}
		}
		
	}
</style>
