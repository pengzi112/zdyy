<template>
  <div class="home">
    <div class="homeTop">
      <home-search></home-search>
    </div>
    <h1>{{ msg }}</h1>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">这是什么？</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
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
import homeSearch from '../common/search'
import footGuide from '../common/footer'
import { Group, Cell, Alert } from 'vux'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false
    }
  },
  components: {
    Group,
    Cell,
    Alert,
    footGuide,
    homeSearch
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
