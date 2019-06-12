<template>
  <div id="app">
    <div id="back"></div>
    <notify-view v-if="notifyState"></notify-view>
    <header-view></header-view>
    <main>
      <router-view></router-view>
    </main>
    <button @click="popNotify" class="btn btn-danger">pop</button>
    <footer-view></footer-view>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Notification from '@/components/common/Notification'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    'notify-view': Notification,
    'header-view': Header,
    'footer-view': Footer
  },
  methods: {
    popNotify () {
      if (!this.notifyState) {
        this.setNotifyState(true)
      } else {
        console.log('no')
      }
    },
    ...mapMutations([
      'setNotifyState',
    ])
  },
  computed: {
    ...mapGetters([
      'notifyState'
    ])
  }
}
</script>

<style>
html { height:100%; width:100%; }

body {
  margin: 0;
  height:100%; width:100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
}

#back {
  z-index:-1;
  background-color: #f00;
  width: 100%;
  height:1000px;
  position: fixed;
  background: url('https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/PB_green_background.jpg') fixed bottom;
  background-repeat: no-repeat; 
  background-position: bottom;
  background-attachment: fixed;       
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

footer {
  height: 56px;
  width: 100%;
  background-color: #000;
  color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 10000;
}
</style>
