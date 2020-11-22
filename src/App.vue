<template>
  <div id="app">
    <MainTabBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router'
import MainTabBar from "components/content/MainTabBar";

export default {
  name: 'App',
  router,
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
