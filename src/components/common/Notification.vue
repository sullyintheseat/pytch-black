<template>
  <div id="notifier">
    <p>test</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'notifier',
  data () {
    return {
      mytimer: null
    }
  },
  mounted () {
    console.log('mounted')
    this.mytimer = setInterval(() => {
      this.setNotifyState(false)
      clearInterval(this.mytimer)
		}, 3000)   
  },
  methods: {
    ...mapMutations([
      'setNotifyState',
    ])
  }
}
</script>

<style>
#notifier {
  width: 100%;
  color: #fff;
  background-color: rgba(0,0,0,.75);
  position: fixed;
  z-index: 250000;
}
</style>
