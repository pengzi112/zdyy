<template>
  <div class="home">
    <div class="headBox">
      <div class="head_img">
        <img src="static/images/test2.jpg">
        <div class="userName">朋子</div>
      </div>
    </div>
    <ul class="menuBox">
      <li><a @click="showTips">我的订单</a></li>
      <li><a @click="showTips">评论</a></li>
      <li class="no_border"><a @click="showTips">关注</a></li>
    </ul>
    <ul class="setBox">
      <li><img src="static/images/feedback.png">反馈</li>
      <li class="setting"><img src="static/images/setting.png">设置</li>
    </ul>
    <toast v-model="toastShow" position="middle" :time="800" type="text">暂未开通</toast>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import footGuide from '../common/footer'
  import { Toast } from 'vux'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '这是我的个人中心',
        show: false,
        toastShow: false
      }
    },
    components: {
      Toast,
      footGuide
    },
    methods: {
      onClick () {
        this.show = true
      },
      showTips () {
        this.toastShow = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './static/css/mixin.scss';
  .headBox{
    width: 100%;
    height: 120px;
    @include bis('../../assets/img/center2.jpg');
    background-color: green;
    .head_img{
      width: 100px;
      height: 120px;
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
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        color: #ffffff;
      }
    };
  }
  .menuBox{
    display: flex;
    padding: 12px 0;
    background-color: #ffffff;
    li{
      font-size: 14px;
      flex: 1;
      border-right: 1px solid #999999;
    };
    .no_border{
      border: 0;
    }
  };
  .setBox{
    text-align: left;
    margin-top: 4px;
    li{
      background-color: #ffffff;
      height: 40px;
      line-height: 40px;
      padding-left: 30px;
      font-size: 14px;
      img{
        width: 18px;
        margin-right: 10px;
      }
    };
    .setting{
      margin-top: 10px;
    }
  };
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
