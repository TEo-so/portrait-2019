<template>
  <div class="question">
    <div class="box">
      <div class="questionIndex">
        <img src="../assets/images/questionIndex.png" />
        <p class="number">NO.1</p>
      </div>

      <QuestionBox />
      <AnswerBox />
      <AnswerDecoration />
      <QuestionAction />
    </div>
  </div>
</template>

<script>
import QuestionBox from "@/components/QuestionBox.vue";
import AnswerBox from "@/components/AnswerBox.vue";
import AnswerDecoration from "@/components/AnswerDecoration.vue";
import QuestionAction from "@/components/QuestionAction.vue";
export default {
  components: {
    QuestionBox,
    AnswerBox,
    AnswerDecoration,
    QuestionAction
  }
};
</script>

<style lang="less" scoped>
.question {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff4d2;
  .box {
    margin-top: 170px;
    background: url("../assets/images/questionBox.png");
    background-size: 100%;
    width: 738px;
    height: 1055px;

    .questionIndex {
      display: flex;
      align-items: center;

      background-size: 100%;

      img {
        width: 245px;
        height: 134px;
        z-index: 4;
      }

      .number {
        font-family: "themeWord";
        font-size: 60px;
        font-weight: 500;
        position: relative;
        right: 160px;
        z-index: 5;
      }
    }
  }
}
</style>