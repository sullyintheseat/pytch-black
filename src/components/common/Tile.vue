<template>
  <div>
    <div class="tile-main">
      <div class="tile">
        <div class="tile-container">
          <router-link v-bind:to="mylink">
          <img v-bind:src="myimage" style="width:95%;">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menutile',
  props: [
    'item'
  ],
  data () {
    return {
    }
  },
  computed: {
    myimage: function () {
      return require(`../../assets/${this.item.image}`)
    },
    mylink: function () {
      return this.item.target
    }
  }
}
</script>

<style>

.tile-main {
  width: 100%;
  margin: 0px auto;
  padding: 0px auto;
}

.tile {
  width: 98%;
  padding-left: 1%;
  margin: 0%;
  height: 100%;
}

.tile-container {
  /* margin-top: 18px; */
  text-align: left;
  /* padding :5%; */
}

.tile-link {
  color: #fff;
  font-size: 22px;
}

</style>
