<template>
	<div class="searchBox">
		<div class="address">北京ⅴ</div>
		<input type="text" class="search_text" name="search" placeholder="搜索项目/诊所/医生">
	</div>
</template>
<script>
	export default{
	  data () {
	    return {
	      address: '北京'
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
		.address{
			height: 30px;
			line-height: 30px;
			float: left;
			font-size: 16px;
			color: #ffffff;
			margin-left: 15px;
			padding-right: 0.1rem;
			margin-top: 10px;
		};
		.search_text{
			float: left;
			width: 50%;
			height: 30px;
			font-size: 15px;
			text-align: left;
			margin:10px 0 0 10px;
			padding:0 40px;
			border-radius: 12px;
			border: 0;
			background-color:#005bae;
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
</style>
