<template>
  <div class="home">
    <img class="background" src="../assets/images/home.png" />

    <router-link to = "/question">
    <img class="enter" src="../assets/images/enter.png">
    </router-link>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .background {
    width: 100%;
    height: 100%;
    display: block;
  }
  .enter {
    width: 134px;
    height:218px;
    position: fixed;
    top:1100px;
    left: 500px;
   
    
  }
}
</style>