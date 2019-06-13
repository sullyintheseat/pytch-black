<template>
  <div id="app">
    <div id="back"></div>
    <notify-view v-if="notifyState"></notify-view>
    <header-view></header-view>
    <main>
      <router-view></router-view>
    </main>
    <footer-view></footer-view>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Notification from '@/components/common/Notification'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import {storage} from '@/utils/storage.js'
export default {
  name: 'app',
  components: {
    'notify-view': Notification,
    'header-view': Header,
    'footer-view': Footer
  },
  mounted () {
    if(this.$route.name === 'Main') {
    } else {
      let i = Boolean(this.rootIdentity)
      if (!i) {
        console.log('anonymous user')
      } else {
        if (i) {
          this.$socket.emit('addUser', this.appId + '-' + this.rootIdentity)
          this.setRootIdentity(this.rootIdentity)
        }
      }
    }
  },
  methods: {
    ...mapMutations([
      'setNotifyState',
    ]),
    ...mapActions([
      'setRootIdentity'
    ])
  },
  computed: {
    ...mapGetters([
      'notifyState',
      'appId'
    ])
  },
  sockets: {
    connect () {
      this.isConnected = true
      console.log('server connected')
    },

    disconnect () {
      this.isConnected = false
      console.log('server disconnected')
    },

    chat (data) {
      this.socketMessage = data
    },

    updateApp (data) {
      console.log(data)
      try {
        if (data !== null) {
          this.setNotifyState(true)
          this.promo = JSON.parse(data)
        } else {
          this.setNotification(false)
          if (this.showPrize) {
            this.setPrizeState(false)
          }
          this.promo = null
        }
      } catch (e) {
        this.setNotification(false)
        this.promo = null
      }
    },

    userSigned (data) {
      if (data.username != null) {
        console.log(data)
        let usern = data.username.split('-')
        console.log(usern[1])
        this.setRootIdentity(usern[1])
        storage.storeValue('rootIdentity', usern[1])
      }
    },

    userJoined (data) {
      console.log(data)
    },

    testCall (data) {
      if (data != null) {
        this.setPrize(JSON.parse(data))
        console.log(this.prize)
      } else {
        this.setPrize(false)
        this.prize = null
      }
    }
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
