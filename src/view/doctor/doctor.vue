<template>
  <div class="home">
    <div class="homeTop">
      <home-search></home-search>
    </div>
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">这是牙医列表</a></li>
    </ul>
    <group title="弹框">
      <cell title="alert" @click.native="showPlugin" is-link></cell>
    </group>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import homeSearch from '../common/search'
  import footGuide from '../common/footer'
  import { Group, Cell } from 'vux'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '这是牙医列表哦',
        show: false
      }
    },
    components: {
      Cell,
      Group,
      footGuide,
      homeSearch
    },
    methods: {
      onClick () {
        this.show = true
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
  .homeTop{
    width: 100%;
    height: 50px;
    background-color: #1e82d2;
    position: fixed;
    top: 0;
    z-index: 999;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
