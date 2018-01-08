<template>
	<swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
	    <swiper-slide class="swiper-item"><img src="../../assets/img/banner1.jpeg"></swiper-slide>
	    <swiper-slide class="swiper-item"><img src="../../assets/img/banner2.jpg"></swiper-slide>
	    <swiper-slide class="swiper-item"><img src="../../assets/img/banner3.jpg"></swiper-slide>
	    <swiper-slide class="swiper-item"><img src="../../assets/img/banner4.jpg"></swiper-slide>
	    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
	 </swiper>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
	  components: {
	    swiper,
	    swiperSlide
	  },
	  data () {
	    return {
	      swiperOption: {
	        spaceBetween: 0,
	        centeredSlides: true,
	        autoplay: {
	          delay: 2000,
	          disableOnInteraction: false
	        },
	        /* pagination: {
	          el: '.swiper-pagination',
	          clickable: true
	        }, */
	        loop: true
	      }
	    }
	  },
	  computed: {
	    swiper () {
	      return this.$refs.mySwiper.swiper
	    }
	  }
	}
</script>
<style lang='scss' scoped>
  .swiper-box {
    width: 100%;
    height: 160px;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #eeeeee;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    img {
    	width: 100%;
    }
  }
</style>