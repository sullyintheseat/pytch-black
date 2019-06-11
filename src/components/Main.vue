<template>
  <div class="menu">
    <div style="width: 98%; margin-left: 2%; height:100%;" v-for="item in navItems" v-bind:key="item._id">
      <div style="width:50%; float:left;">
        <menu-tile v-bind:item="item"></menu-tile>
      </div>
    </div>
    <div style="height: 350px; padding-bottom:360px;"><br/><br/></div>
  </div>
</template>

<script>
import Tile from '@/components/common/Tile'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'main-view',
  components: {
    'menu-tile': Tile
  },
  data () {
    return {
    }
  },
  mounted () {
    if (this.rootIdentity !== false) {
      // this.$router.push({name: 'Lander'})
    } else {
      if (this.$route.params.id) {
        this.setRootIdentity(this.$route.params.id)
      } else {
        this.$router.push({name: 'Selection'})
      }
    }
  },
  methods: {
    ...mapActions([
      'setRootIdentity'
    ])
  },
  computed: {
    ...mapGetters([
      'rootIdentity',
      'navItems'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}

.menu {
  min-height:360px;
  width: 100%;
  text-align: center;
}
</style>
