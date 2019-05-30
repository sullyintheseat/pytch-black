<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{rootIdentity}}</p>
    <p>Consider a loading screen, here we will look to see if a user has been supplied and make a decision based on that,
       if user, move to user path, if none exists, head to user selection</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'main-view',
  data () {
    return {
      msg: 'Pytch Black Demo'
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.setRootIdentity(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions([
      'setRootIdentity'
    ])
  },
  computed: {
    ...mapGetters([
      'rootIdentity'
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
</style>
