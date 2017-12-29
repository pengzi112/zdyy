<template>
  <div class="home">
    <div class="homeTop">
      <home-search></home-search>
    </div>
    <ul class="conditionBox">
      <li>全部地区  v</li>
      <li>全部项目  v</li>
      <li>智能推荐  v</li>
      <li>筛选  v</li>
    </ul>
    <ul class="clinicList">
      <li v-for="(item, index) in tableData">
        <div class="clinic_top">
          <div class="clinic_left"><img src="static/images/talkdetail.jpg"/></div>
          <ul class="clinic_right">
            <li class="store_name">众合齿科（中关村店）</li>
            <li><rater v-model="star" :font-size="16" disabled></rater> <span class="price">335条 ¥245/人</span></li>
            <li class="distance">苏州街 齿科 <span>7.2km</span></li>
            <li><span class="type">烤瓷牙</span><span class="type">蛀牙</span><span class="type">烤瓷牙</span></li>
          </ul>
        </div>
        <div class="clinic_bottom">
          <ul>
            <li>优惠券  满100减99</li>
            <li>购物券 【正畸】9.9元隐形牙齿矫正</li>
          </ul>
        </div>
      </li>
    </ul>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import homeSearch from '../common/search'
import footGuide from '../common/footer'
import { Rater } from 'vux'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      star: 3,
      tableData: [1, 2, 3]
    }
  },
  components: {
    Rater,
    footGuide,
    homeSearch
  },
  methods: {
    onShow () {
      console.log('on show')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home{
    padding-bottom: 70px;
  }
.homeTop{
  width: 100%;
  height: 50px;
  background-color: #3fa7ff;
  position: fixed;
  top: 0;
  z-index: 999;
}
.conditionBox{
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction:row;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 8px;
  padding-top: 6px;
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 999;
  background-color: #F5F5F5;
  li{
    display: box;
    flex:1;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    color: #666666;
    border-right: 1px solid #e6e6e6;
  }
}
.clinicList{
  width:100%;
  font-size: 14px;
  margin-top: 92px;
  .store_name{
    font-size: 18px;
  }
  li{
    width:100%;
    margin-bottom: 8px;
    background-color: #ffffff;
    .clinic_top{
      overflow: hidden;
      border-bottom: 1px solid #e6e6e6;
      padding: 12px 8px 8px;
      .clinic_left{
        width: 36%;
        float: left;
        img{
          display: block;
          width: 100px;
          height: 100px;
        }
      };
      .clinic_right{
        width: 64%;
        float: right;
        li{
          text-align: left;
          .price{
            float: right;
          };
          .type{
            border: 1px solid #e6e6e6;
            padding: 4px 6px;
            -webkit-border-radius:12px;
            -moz-border-radius:12px;
            border-radius: 12px;
          }
        };
        .distance{
          span{
            float: right;
          }
        }
      }
    }
    .clinic_bottom{
      padding: 0 8px;
      ul{
        padding: 8px 0;
        li{
          text-align: left;
        }
      }
    }
  }
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
