<template>
	<section class="footbox">
		<div class="footer home" @click="goto('/')">门诊</div>
		<div class="footer mycenter" @click="goto('/mycenter')">医生</div>
		<div class="footer consult" @click="goto('/consult')">我的</div>
	</section>
</template>
<script>
	export default{
	  data () {
	    return {
	      msg: '嗷嗷'
	    }
	  },
	  created () {
	  },
	  methods: {
	    goto (path) {
	      this.$router.push(path)
	    }
	  }
	}
</script>
<style lang="scss" scoped>
	@import './static/css/mixin.scss';
	.footbox{
		width: 100%;
		display: flex;
		flex-direction:row;
		background: white;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 100;
		border-top: 1px solid #e6e6e6;
		.footer{
			display: box;
			flex:1;
			font-size: 12px;
			padding-top: 34px;
			color: #999999;
		}
		.home{
			@include footerbg('../../../static/images/index.png');
		}
		.consult{
			@include footerbg('../../../static/images/consult.png');
		}
		.mycenter{
			@include footerbg('../../../static/images/me.png');
		}	
	}
	
	
</style>