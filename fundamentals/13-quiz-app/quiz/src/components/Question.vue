<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{
          width: `${(questionsAnswered / questionsArr.length) * 100}%`,
        }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questionsArr.length }} questions
        answered
      </div>
    </div>
    <transition-group name="fade">
      <div
        class="single-question"
        v-for="(question, questionIndex) in questionsArr"
        :key="question.q"
        v-show="questionsAnswered === questionIndex"
      >
        <div class="question">{{ question.q }}</div>
        <div class="answers">
          <div
            class="answer"
            v-for="answer in question.answers"
            :key="answer.text"
            @click.prevent="selectAnswer(answer.is_correct)"
          >
            {{ answer.text }}
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['questionsArr', 'questionsAnswered'],
  // 为什么要写emits来触发一个自定义事件呢？
  // 因为我们并不想在这个question组件里处理这些逻辑，我们想在App组件里写
  emits: ['question-answered'],
  methods: {
    selectAnswer(is_correct) {
      this.$emit('question-answered', is_correct);
    },
  },
};
</script>
