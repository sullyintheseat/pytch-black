<template>
  <footer>
      <div class="footer-contents">
        <router-link to="/option1"><img src='https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_platform.png'></router-link>
        <router-link to="/option2"><img src='https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_data.png'></router-link>
        <router-link to="/"><img src='https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_home.png'></router-link>
        <router-link to="/option3"><img src='https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_connected.png'></router-link>
        <router-link to="/option4"><img src='https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/pytchblack/icon_loyalty.png'></router-link>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'footer-view',
  data () {
    return {
      baseUrl: '../assets'
    }
  }
}
</script>

<style>
footer {
  text-align:center;
  bottom: 0;
  width: 100%;
  position: fixed;
  height: 60px;
  background-color:#fff;
  color: #ffffff;
  z-index: 10001;
}

.footer-contents {
  margin: 0px auto;
  padding: 0px auto;
  height: 50px;
  width: 100%;
  text-align: center;
}
.footer-contents img {
  width: 40px;
  float: none;
  margin: 10px 10px 0px 10px;
}
</style>
