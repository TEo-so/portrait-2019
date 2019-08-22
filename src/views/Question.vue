<template>
  <div class="question">
    <div class="box" ref="box">
      <div class="page" :class="{animated:isAnimated}">
        <div class="questionIndex">
          <img src="@/assets/images/questionIndex.png" />
          <p class="number">NO.{{questionIndex}}</p>
        </div>

        <QuestionBox :index="questionIndex" :content="content" />
        <AnswerBox :answerIndex="questionIndex" :answer="answer" />
        <AnswerDecoration :index="questionIndex" />
        <QuestionAction :index="questionIndex" @turnPage="turnPage" />
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
const QuestionBox = () => import("@/components/QuestionBox.vue");
const AnswerBox = () => import("@/components/AnswerBox.vue");
const AnswerDecoration = () => import("@/components/AnswerDecoration.vue");
const QuestionAction = () => import("@/components/QuestionAction.vue");

export default {
  components: {
    QuestionBox,
    AnswerBox,
    AnswerDecoration,
    QuestionAction
  },
  computed: {
    questionIndex() {
      return this.$store.state.question.questionIndex;
    },
    content() {
      return this.$store.state.question.content;
    },
    answer() {
      return this.$store.state.question.answer;
    }
  },
  data() {
    return {
      isAnimated: false
    };
  },
  methods: {
    turnPage() {
      this.isAnimated = true;
      setTimeout(() => {
        this.isAnimated = false;
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
//动画
.animated {
  animation: turnPage 1s 1;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
.page {
  width: 700px;
  height: 980px;
  transform-origin: 0 10%;
  background: #fff6e3;
  position: relative;
  top: 35px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
@keyframes turnPage {
  0% {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-90deg);
    -webkit-transform: rotateY(-90deg);
  }
}

.question {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff4d2;
  perspective: 3000px;
  .box {
    margin-top: 60px;
    background: url("~@/assets/images/questionBox.png");
    background-size: 100%;
    width: 738px;
    height: 1055px;
    position: relative;
    transform: perspective(3000px);

    .questionIndex {
      display: flex;
      align-items: center;
      position: relative;
      top:-40px;
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
        top:5px;
        right: 170px;
        z-index: 5;
      }
    }
  }
}
</style>