<template>
  <div class="home">
    <div class="homeTop">
      <span class="arrowleft" @click="goBack"> < </span>
      <span>详情</span>
    </div>
    <section class="slideBox">
      <home-banner></home-banner>
      <div class="clinic-title">合众智齿（中关村店）</div>
    </section>
    <section class="detailBox">
      <div class="evaluationBox">
        <rater v-model="star" :font-size="16" disabled></rater> <span class="people">共3014人评价</span>
        <ul class="evaluation">
          <li>效果 5.0</li>
          <li>服务 5.0</li>
          <li>环境 5.0</li>
        </ul>
        <ul class="address">
          <li class="address-icon"><img src="static/images/address.png"></li>
          <li class="address-text">北京市海淀区新中关购物中心3层5669科室</li>
          <li class="address-other">
            <img src="static/images/address.png">
            <img src="static/images/address.png">
          </li>
        </ul>
        <ul class="clinicTime">
          <li class="address-icon"><img src="static/images/address.png"></li>
          <li class="clinicTime-text">门诊：周一至周日/8:00-17:00</li>
        </ul>
      </div>
    </section>
    <section class="doctorList-box">
      <div class="doctorList-title">医生资源</div>
      <ul class="clinicList">
        <li v-for="(item, index) in tableData">
          <div class="clinic_top">
            <div class="clinic_left"><img src="static/images/talkdetail.jpg"/></div>
            <ul class="clinic_right">
              <li class="store_name"><span>李医生</span><rater v-model="star" :font-size="16" disabled></rater></li>
              <li class="distance">副主任医师</li>
              <li>合众齿科明星医师，主治：拔牙、牙齿矫正</li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="doctorList-more">查看全部医生</div>
    </section>
    <section class="doctorList-box discoutBox">
      <div class="doctorList-title">优惠预定</div>
      <ul class="clinicList">
        <li v-for="(item, index) in tableData">
          <div class="clinic_top">
            <div class="clinic_left"><img src="static/images/talkdetail.jpg"/></div>
            <ul class="clinic_right">
              <li class="store_name"><span>[洗牙]</span>声波儿童洗牙</li>
              <li>
                <span>￥299</span>
                <span>599</span>
                <span>已售3016</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="doctorList-more">查看全部15个</div>
    </section>
  </div>
</template>

<script>
import homeBanner from '../common/banner'
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
    homeBanner
  },
  methods: {
    onShow () {
      console.log('on show')
    },
    goBack () {
      this.$router.push({path: '/'})
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
  position: relative;
  .arrowleft{
    padding: 0 16px;
    position: absolute;
    left: 0;
    top: center;
    font-size: 26px;
  }
  span{
    line-height: 50px;
    color: #ffffff;
  }
}
.slideBox{
  width: 100%;
  position: relative;
  .clinic-title{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: rgba(0,0,0,0.3);
    color: #ffffff;
    z-index: 999;
    font-size: 14px;
    text-align: left;
    text-indent: 10px;
  }
}
/* 门诊详细信息 */
.detailBox{
  background-color: #ffffff;
  padding: 0 10px;
  margin-bottom: 20px;
  .evaluationBox{
    text-align: left;
    padding-top: 10px;
    .people{
      margin-left: 10px;
      font-size: 12px;
    };
    ul{
      padding: 10px 0;
      width: 100%;
      overflow: hidden;
      border-top: 1px solid #e6e6e6;
      li {
        float: left;
      }
    };
    .evaluation{
      border: 0;
      li{
        width: 80px;
        font-size: 12px;
        text-align: center;
        border-right: 1px solid #e6e6e6;
      }
    };
    .address{
      li {
        font-size: 14px;
      }
      .address-icon{
        width: 10%;
        text-align: center;
        img{
          width: 70%;
          margin: auto;
        };
      };
      .address-text{
        width: 60%;
        border-right: 1px solid #e6e6e6;
      };
      .address-other{
        width: 30%;
        text-align: center;
        img{
          width: 30%;
          margin: 0 4px;
        }
      }
    };
    .clinicTime{
      li{
        font-size: 14px;
      };
      .address-icon{
        width: 10%;
        text-align: center;
        img{
          width: 70%;
          margin: auto;
        }
      }
    }
  }
}
/* 医生列表 */
.doctorList-box{
  padding: 0 10px;
  background-color: #ffffff;
  .doctorList-title{
    width:100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: left;
    background: url(/static/images/arrowright.png) no-repeat right center;
    background-size: auto 30%;
  }
  .clinicList{
    width:100%;
    font-size: 12px;
    li{
      width:100%;
      background-color: #ffffff;
      .clinic_top{
        overflow: hidden;
        border-top: 1px solid #e6e6e6;
        padding: 12px 0 8px;
        .clinic_left{
          width: 36%;
          float: left;
          img{
            display: block;
            width: 80px;
            height: 80px;
          }
        };
        .clinic_right{
          width: 64%;
          float: right;
          li{
            width: 100%;
            margin-top: 8px;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          };
          .store_name{
            font-size: 14px;
            margin-top: 0;
            span{
              margin-right: 10px;
            }
          };
          .distance{
            span{
              float: right;
            }
          }
        }
      }
    };
  };
  .doctorList-more{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #3fa7ff;
  }
}
.discoutBox{
  margin-top: 20px;
}
</style>
