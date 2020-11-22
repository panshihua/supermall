<template>
  <div id="TabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #TabBar
  {
    display: flex;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 49px;
    background-color: #f2f2f2;
    box-shadow: 0px -3px 1px whitesmoke;
  }
</style>
