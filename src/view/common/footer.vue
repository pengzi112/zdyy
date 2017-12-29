<template>
	<section class="footbox">
		<div class="footer home" @click="goto('/')" v-if="!isIndex">门诊</div>
		<div class="footer homed" @click="goto('/')" v-if="isIndex">门诊</div>
		<div class="footer mycenter" @click="goto('/doctor')" v-if="!isDoctor">医生</div>
		<div class="footer mycenterd" @click="goto('/doctor')" v-if="isDoctor">医生</div>
		<div class="footer consult" @click="goto('/mycenter')" v-if="!isMe">我的</div>
		<div class="footer consulted" @click="goto('/mycenter')" v-if="isMe">我的</div>
	</section>
</template>
<script>
	export default{
	  data () {
	    return {
	      msg: '嗷嗷',
	      isIndex: true,
	      isDoctor: false,
	      isMe: false
	    }
	  },
	  created () {
	    let currentPath = this.$route.path
	    if (currentPath === '/') {
	      this.isIndex = true
	    } else {
	      this.isIndex = false
	    }
	    if (currentPath === '/doctor') {
	      this.isDoctor = true
	    } else {
	      this.isDoctor = false
	    }
	    if (currentPath === '/mycenter') {
	      this.isMe = true
	    } else {
	      this.isMe = false
	    }
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
			font-size: 15px;
			padding-top: 40px;
			color: #999999;
		}
		.home{
			@include footerbg('../../../static/images/index.png');
		}
		.homed{
			@include footerbg('../../../static/images/indexed.png');
		}
		.consult{
			@include footerbg('../../../static/images/consult.png');
		}
		.consulted{
			@include footerbg('../../../static/images/consulted.png');
		}
		.mycenter{
			@include footerbg('../../../static/images/me.png');
		}
		.mycenterd{
			@include footerbg('../../../static/images/meed.png');
		}
	}


</style>
