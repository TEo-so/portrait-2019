<template>
  <div class="home">
    <div class="book">
    
        <img class="enter" 
        src="../assets/images/enter.png"
        @click = "getEntrance()" />
    
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {FETCH_JUDGEMENT, FETCH_OLD_AMSWER} from '../store/type/actions'
export default {
  computed:{
    ...mapGetters(['judgeInformation'])
  },
  methods:{
    getEntrance(){
      this.$store.dispatch(FETCH_JUDGEMENT)
      let judgement = this.judgeInformation.judgement
      if(judgement == 0 ){
        this.$router.push({name:'question'})
      }else{
        this.$router.push({name:'result'})
        this.$store.dispatch(FETCH_OLD_AMSWER)
      }
    }
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