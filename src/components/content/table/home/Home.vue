<template>
  <div id="home">
    <NavBar id="home-nav">
      <div slot="center">购物车</div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {requestMulti} from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        result: null,
        banner: null,
        recommend: null
      }
    },
    components: {
      NavBar
    },
    created() {
      requestMulti().then(res => {
        console.log(res);
        this.result = res;
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home-nav
  {
    background-color: hotpink;
    color: white;
  }
</style>
