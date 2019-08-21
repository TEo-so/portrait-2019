<template>
  <div class="action">
    <div class="back">
      <p v-if="index == 1 ">首页</p>
      <p v-else @touchstart="reduceIndex()">上一题</p>
    </div>
    <div class="next">
      <p v-if="index == 5 " @touchstart="submit()">提交</p>
      <p v-else @touchstart="addIndex(choosedNum)">下一题</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ADD_INDEX, REDUCE_INDEX } from "@/store/type/mutations.js";
import { FETCH_FIRST_ANSWER } from "@/store/type/actions.js";
import { setTimeout } from "timers";
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    addIndex(choosedNum) {
      this.$emit("turnPage");
      setTimeout(() => {
        this.$store.commit(ADD_INDEX, choosedNum);
      }, 400);
    },
    reduceIndex() {
      this.$store.commit(REDUCE_INDEX);
    },
    // submmit(resultToBack){
    //   this.$store.dispatch( FETCH_FIRST_ANSWER, resultToBack)
    //   this.$router.push({name:'loading'})
    // }
    submit() {
      let eat = this.choosedList[1];
      let exercise = this.choosedList[2];
      let sleep = this.choosedList[3];
      let peopel_set = this.choosedList[4];
      let movie = this.choosedList[5];
      let user_name = localStorage.getItem("user_name");
      let user_id = localStorage.getItem("user_id");
      let judgment = localStorage.getItem("judgment");
      let resultToBack = {
        eat,
        exercise,
        sleep,
        peopel_set,
        movie,
        user_name,
        user_id,
        judgment
      };
      console.log(resultToBack);
      this.$router.push({ name: "loading" });
    }
  },
  computed: {
    ...mapGetters(["choosedNum", "choosedList"])
  }
};
</script>

<style lang="less" scoped>
.action {
  display: flex;
  position: absolute;
  top: 960px;
  left: 50px;
}
.back,
.next {
  width: 183px;
  height: 85px;
  display: flex;
  align-items: center;
}
.back {
  background: url("~@/assets/images/back.png");
  margin-right: 225px;
  background-size: 100%;
  p {
    font-family: "themeWord";
    color: #ffffff;
    font-size: 40px;
    margin: 0 auto;
  }
}

.next {
  background: url("~@/assets/images/next.png");
  background-size: 100%;
  p {
    font-family: "themeWord";
    color: #ffffff;
    font-size: 40px;
    margin: 0 auto;
  }
}
</style>