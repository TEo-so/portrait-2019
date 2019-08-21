<template>
  <div class="answer">
    <ul class="type1" v-if="isType1">
      <li v-for="(item,index) in answer[answerIndex-1]" :key="index" @touchstart="choose(index)">
        <p :class="{'choosed':choosedNum == index }">{{item}}</p>
      </li>
    </ul>

    <ul class="type2" v-else>
      <li v-for="(item,index) in answer[answerIndex-1]" :key="index" @touchstart="choose(index)">
        <div>
          <img :src="item[1]" />
        </div>
        <p :class="{'choosed':choosedNum == index }">{{item[0]}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { CHOOSED_NUMBER } from "../store/type/mutations";
export default {
  props: {
    answer: {
      type: Array,
      require: true
    },
    answerIndex: {
      type: Number,
      require: true
    }
  },

  computed: {
    ...mapGetters(["choosedNum"], ["choosedList"]),
    isType1() {
      if (
        this.answerIndex == 1 ||
        this.answerIndex == 3 ||
        this.answerIndex == 5
      ) {
        return true;
      }else{
        return false
      }
    }
  },

  methods: {
    choose(index) {
      this.$store.commit(CHOOSED_NUMBER, index);
    }
  }
};
</script>
    
<style lang="less" scoped>
.answer {
  margin-top: -10px;
  margin-left: 70px;
  font-family: "themeWord";
  font-size: 50px;
  color: #5d392d;
}

.type1 li {
  margin-bottom: 60px;
  white-space: nowrap;
}
.type2 {
  display: flex;
  flex-wrap: wrap;
  margin-top: -40px;
 

  li {
    display: flex;
    flex-direction: column;
    width: 240px;
    margin-bottom: 80px;
    align-items: center;
    margin-right: 70px;
    img {
      width: 120px;
      height: 120px;
    }
    p {
      white-space: nowrap;
    }
  }
}
.choosed {
  color: #cf5e36;
}
</style>