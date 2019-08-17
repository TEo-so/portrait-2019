<template>
  <div class="action">
    <div class="back">
      <p v-if="index == 1 ">首页</p>
      <p v-else @click="reduceIndex()">上一题</p>
    </div>
    <div class="next">
      <p v-if="index == 5 ">提交</p>
      <p v-else @click="addIndex(choosedNum)">下一题</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ADD_INDEX, REDUCE_INDEX } from "@/store/type/mutations.js";
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    addIndex(choosedNum) {
      this.$store.commit(ADD_INDEX,choosedNum);
    },
    reduceIndex() {
      this.$store.commit(REDUCE_INDEX);
    }
  },
  computed:{
    ...mapGetters(['choosedNum'])
  }
};
</script>

<style lang="less" scoped>
.action {
  display: flex;
  position: fixed;
  top: 1180px;
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
  background: url("../assets/images/back.png");
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
  background: url("../assets/images/next.png");
  background-size: 100%;
  p {
    font-family: "themeWord";
    color: #ffffff;
    font-size: 40px;
    margin: 0 auto;
  }
}
</style>