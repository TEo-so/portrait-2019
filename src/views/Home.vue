<template>
  <div class="home" v-on:touchmove.self.prevent>
    <div class="book" v-on:touchmove.self.prevent>
    
        <img class="enter" 
        src="@/assets/images/enter.png"
        @touchstart = "getEntrance()" />
    
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {FETCH_JUDGEMENT, FETCH_OLD_ANSWER} from '../store/type/actions'
export default {
  computed:{
    ...mapGetters(['judgment'])
  },
  methods:{
    getEntrance(){
      let judgment = this.judgment
      console.log(judgment)
      console.log(judgment.judgment)
     if(judgment){
      if(judgment.judgment == "0" ){
        this.$router.push({name:'question'})
      }else if(judgment.judgment == "1") {
        this.$router.push({name:'loading'})
        this.$store.dispatch(FETCH_OLD_ANSWER)
      }else{
        alert("未获取到用户信息")
        return
      }
    } else{
        alert("您的网络有问题哦")
        return
      }
    }
  },
  created(){
    this.$store.dispatch(FETCH_JUDGEMENT)
  }
};
</script>

<style lang="less" scoped>
.home {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url("~@/assets/images/home.png");
  background-size: cover;

  .book {
    background: url("~@/assets/images/book.png");
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