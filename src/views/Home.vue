<template>
  <div class="home">
    <div class="book">
      <router-link to="/question">
        <img class="enter" src="../assets/images/enter.png" />
      </router-link>
    </div>
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
  background: url("../assets/images/home.png");
  background-size: cover;

  .book {
    background: url("../assets/images/book.png");
    width: 744px;
    height: 1011px;
    background-size: 100%;
    position: absolute;
    bottom: 15%;

  }
  .enter {
    width: 134px;
    height: 218px;
    position: fixed;
    top: 78%;
    left: 70%;   
  }
}
</style>