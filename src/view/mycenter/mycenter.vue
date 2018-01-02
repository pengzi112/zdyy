<template>
  <div class="home">
    <div class="headBox">
      <div class="head_img">
        <img src="static/images/test2.jpg">
        <div class="userName">朋子</div>
      </div>
    </div>
    <ul class="menuBox">
      <li><a href="http://router.vuejs.org/" target="_blank">我的订单</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">评论</a></li>
      <li class="no_border"><a href="http://vue-loader.vuejs.org/" target="_blank">关注</a></li>
    </ul>
    <group>
      <cell title="我的账户" value="保护中" @click.native="onClick"></cell>
    </group>
    <alert v-model="show" title="Congratulations" @on-show="onShow" @on-hide="onHide">'Your Message is sent successfully~'</alert>
    <group title="弹框">
      <cell title="alert" @click.native="showPlugin" is-link></cell>
    </group>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import footGuide from '../common/footer'
  import { Group, Cell, Alert } from 'vux'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '这是我的个人中心',
        show: false
      }
    },
    components: {
      Group,
      Cell,
      Alert,
      footGuide
    },
    methods: {
      onClick () {
        this.show = true
      },
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      showPlugin () {
        this.$vux.alert.show({
          title: 'Vux is Cool',
          content: 'Do you agree?',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
          }
        })
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
    li{
      flex: 1;
      border-right: 1px solid #999999;
    };
    .no_border{
      border: 0;
    }
  };
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
