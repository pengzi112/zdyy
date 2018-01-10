<template>
  <div class="home">
    <div class="homeTop">
      <span class="arrowleft" @click="goBack"><img src="/static/images/arrowleft.png"></span>
      医生列表
    </div>
    <ul class="clinicList">
      <li v-for="(item, index) in tableData" @click="toDetail">
        <div class="clinic_top">
          <div class="clinic_left"><img src="static/images/doctor.jpeg"/></div>
          <ul class="clinic_right">
            <li class="store_name">李医生</li>
            <li class="distance">合众智齿（中关村店)</li>
            <li class="doctorDetail">
              <span class="position">副主任医师</span>
              <rater v-model="star" :font-size="16" disabled></rater>
              <span class="price">335条</span>
            </li>
            <li class="beGood"><span class="type">烤瓷牙</span><span class="type">蛀牙</span><span class="type">烤瓷牙</span></li>
          </ul>
        </div>
        <!-- <div class="clinic_bottom">
          <ul>
            <li>优惠券  满100减99</li>
            <li>购物券 【正畸】9.9元隐形牙齿矫正</li>
          </ul>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
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
    Rater
  },
  methods: {
    onShow () {
      console.log('on show')
    },
    toDetail () {
      this.$router.push({path: '/doctorDetail'})
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{
  padding: 50px 0;
}
.homeTop{
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #ffffff;
  text-align: center;
  background-color: #3fa7ff; /* #1e82d2 */
  position: fixed;
  top: 0;
  z-index: 999;
  .arrowleft{
    padding: 0 16px;
    position: absolute;
    left: 0;
    top: center;
    img{
      width: 10px;
    }
  }
}
.clinicList{
  width:100%;
  font-size: 12px;
  .store_name{
    font-size: 16px;
  }
  li{
    width:100%;
    background-color: #ffffff;
    .clinic_top{
      overflow: hidden;
      border-bottom: 1px solid #e6e6e6;
      padding: 12px 8px 8px;
      .clinic_left{
        width: 26%;
        float: left;
        img{
          display: block;
          width: 80px;
          height: 80px;
          -webkit-border-radius:80px;
          -moz-border-radius:80px;
          border-radius: 80px;
        }
      };
      .clinic_right{
        width: 72%;
        float: right;
        li{
          text-align: left;
          .position{
            font-size: 12px;
            float: left;
          };
          .price{
            float: right;
            margin-left: 10px;
            margin: 0 10px 0 20px;
          };
          .type{
            padding: 4px 6px;
            color: #999999;
          }
        };
        .doctorDetail{
          text-align: right;
        };
        .beGood{
          margin-top: 10px;
        };
        .distance{
          font-size: 14px;
        };
      }
    }
    /* .clinic_bottom{
      padding: 0 8px;
      ul{
        padding: 8px 0;
        li{
          text-align: left;
        }
      }
    } */
  }
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
