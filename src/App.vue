<template>
  <div id="app">
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
export default {
  name: 'app',
  components: {
    'header-view': Header,
    'footer-view': Footer
  }
}
</script>

<style>
body {
  margin: 0;
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
