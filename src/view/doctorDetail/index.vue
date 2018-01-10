<template>
  <div class="home">
    <div class="homeTop">
      <span class="arrowleft" @click="goBack"><img src="/static/images/arrowleft.png"></span>
      <span>医生详情</span>
    </div>
    <section class="headBox">
      <div class="head_img">
        <img src="static/images/test2.jpg">
        <div class="userName">朋子</div>
        <div class="userAddress">北京悦丽汇三里屯诊所</div>
        <div class="userFocus">+ 关注</div>
      </div>
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
          <li class="address-text" @click="toMap">北京市海淀区新中关购物中心3层5669科室</li>
          <li class="address-other">
            <img class="msg" src="static/images/msg.png">
            <a href="tel:18301402355"><img class="phone" src="static/images/phone.png"></a>
          </li>
        </ul>
        <ul class="clinicTime">
          <li class="address-icon"><img src="static/images/time.png"></li>
          <li class="clinicTime-text">门诊：周一至周日/8:00-17:00</li>
        </ul>
      </div>
    </section>
    <section class="doctorList-box discoutBox">
      <div class="doctorList-title">优惠预定</div>
      <ul class="clinicList">
        <li v-for="(item, index) in tableData">
          <div class="clinic_top">
            <div class="clinic_left"><img src="static/images/talkdetail.jpg"/></div>
            <ul class="clinic_right">
              <li class="store_name project_name"><span>[洗牙]</span>声波儿童洗牙</li>
              <li class="projectPrice">
                <span class="nowPrice">￥299</span>
                <span class="oldPrice">￥599</span>
                <span>已售3016</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="doctorList-more">查看全部15个</div>
    </section>
    <section class="doctorList-box professionalBox">
      <div class="doctorList-title">专业擅长</div>
      <div class="proferTab">
        <span v-for="(item, index) in tableData">拔牙</span>
      </div>
    </section>
    <section class="doctorList-box introduce">
      <div class="doctorList-title">医生简介</div>
      <div class="content" v-if="isfold">{{doctorMsg}}</div>
      <div class="contentAll" v-if="!isfold">{{doctorMsg}}</div>
      <div class="contentMore" @click="lookMorecontent" v-if="isfold">展开全文</div>
    </section>
  </div>
</template>

<script>
import { Rater } from 'vux'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isfold: true,
      show: false,
      star: 3,
      tableData: [1, 2, 3],
      doctorMsg: '2002年毕业于中国协和医科大学；一直在内科从事临床工作，完成了内科各专科病房、急诊、重症监护室的轮转；2007年任内科总住院医师；2007被聘为北京协和医内科主治医师；2008年赴美国约翰.霍普金斯大学医学院、老年医学中心进修老年医学、为期半年。回国后一直在老年病房从事老年医学临床、教学及科研工作。参与并负责北京市科委及米尔斯汀.亚美基金的多项科研项目的研究。主编：《北京协和医院老年医学诊疗常规》、《老年医学速查手册》，参与翻译《现代老年医学概要》、参与编写《老年医学进展2013》、《新概念老年医学》等多部老年医学书籍兼职：北京医学会老年医学分会青年委员会学术秘书，中华医学会老年医学分会流行病学组委员，《中国实用内科杂志》青年编委,中国老年保健医学研究会缓和医学分会委员兼学术秘书，北京医师协会老年医学分会理事。'
    }
  },
  components: {
    Rater
  },
  methods: {
    onShow () {
      console.log('on show')
    },
    goBack () {
      this.$router.go(-1)
    },
    doctorMore () {
      this.$router.push({path: '/doctorList'})
    },
    lookMorecontent () {
      this.isfold = false
    },
    toMap () {
      this.$router.push({path: '/map'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './static/css/mixin.scss';
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
    img{
      width: 10px;
    }
  }
  span{
    line-height: 50px;
    color: #ffffff;
  }
}
.headBox{
  width: 100%;
  height: 180px;
  @include bis('../../assets/img/doctorBg.png');
  background-color: green;
  .head_img{
    width: 100%;
    height: 180px;
    margin: auto;
    padding-top: 20px;
    img{
      display: block;
      width: 60px;
      height: 60px;
      margin: 0 auto;
      -webkit-border-radius:60px;
      -moz-border-radius:60px;
      border-radius: 60px;
      border: 2px solid #ffffff;
    };
    .userName{
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 16px;
      color: #ffffff;
    };
    .userAddress{
      width: 100%;
      font-size: 14px;
      color: #ffffff;
    };
    .userFocus{
      display: inline-block;
      padding: 2px 8px;
      font-size: 14px;
      color: #ffffff;
      background: rgba(255,255,255, 0.2);
      border-radius: 4px;
      margin-top: 8px;
    }
  };
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
          width: 60%;
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
        };
        .msg{
          margin-right: 10px;
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
          width: 52%;
          margin: auto;
        }
      }
    }
  }
}
/* 优惠列表 */
.doctorList-box{
  padding: 0 10px;
  background-color: #ffffff;
  .doctorList-title{
    width:100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: left;
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
          width: 26%;
          float: left;
          img{
            display: block;
            width: 80px;
            height: 80px;
          }
        };
        .clinic_right{
          width: 70%;
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
          .project_name{
            margin-top: 10px;
            span{
              color: #eb818f;
            }
          };
          .distance{
            span{
              float: right;
            }
          }
          .projectPrice{
            margin-top: 18px;
            .nowPrice{
              color: #eb818f;
              margin-right: 10px;
            };
            .oldPrice{
              margin-right: 10px;
              text-decoration: line-through;
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
    color: #eb818f;
  }
}
.professionalBox{
  margin-top: 20px;
  .proferTab{
    padding-bottom: 10px;
    text-align: left;
    span{
      font-size: 14px;
      padding: 2px 12px;
      background-color: #e6e6e6;
      color: #333333;
      border-radius: 8px;
      margin-right: 20px;
    }
  }
}
.introduce{
  margin-top: 20px;
  .content{
    text-align: left;
    font-size: 14px;
    color: #999999;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  };
  .contentAll{
    text-align: left;
    font-size: 14px;
    color: #999999;
    padding-bottom: 10px;
  };
  .contentMore{
    font-size: 14px;
    text-align: left;
    color: #eb818f;
    padding-bottom: 10px;
  }
}
.discoutBox{
  margin-top: 20px;
}
</style>
