<template>
  <div class="decoration">
    <img class="mooncake" 
    v-if="index == 1" src="@/assets/images/mooncake.png" />
    <img class="pillow"
    v-if="index == 3" src="@/assets/images/pillow.png" />
    <img class="movie"
    v-if="index == 5" src="@/assets/images/movie.png" />
  </div>
</template>

<script>
export default {
  computed: {
    index() {
      return this.$store.state.question.questionIndex;
    }
  }
};
</script>

<style lang="less" scoped>
.decoration {
  position: absolute;
  top:750px;
  left: 400px;
  
  .mooncake {
    width: 211px;
    height: 146px;
  }
  .pillow{
    width: 136px;
    height: 91px;
    position: relative;
    top: 50px;
    left:60px;
  }
  .movie{
    width:117px;
    height: 73px;
    position: absolute;
    top: 60px;
    left:30px;
}
}
</style>