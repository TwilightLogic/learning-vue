<template>
  <div class="ctr">
    <transition name="fade" mode="out-in">
      <!-- 只有答完题才会渲染result，所以这里加了if else逻辑 -->
      <!-- 我们把在app.vue中的data传到question和result组件中(props) -->
      <question
        v-if="questionsAnswered < questions.length"
        :questionsArr="questions"
        :questionsAnswered="questionsAnswered"
        @question-answered="questionsAnsweredFunction"
      />
      <result v-else :results="results" :totalCorrect="totalCorrect" />
    </transition>
    <!-- 这里的v-if是为了让用户把问题答完才能reset -->
    <button
      type="button"
      class="reset-btn"
      @click.prevent="reset"
      v-if="this.questionsAnswered === questions.length"
    >
      Reset
    </button>
  </div>
</template>

<script>
import Question from './components/Question.vue';
import Result from './components/Result.vue';

export default {
  name: 'App',
  components: {
    Question,
    Result,
  },
  data() {
    return {
      questionsAnswered: 0,
      totalCorrect: 0,
      questions: [
        {
          q: 'What is 2 + 2?',
          answers: [
            {
              text: '4',
              is_correct: true,
            },
            {
              text: '3',
              is_correct: false,
            },
            {
              text: 'Fish',
              is_correct: false,
            },
            {
              text: '5',
              is_correct: false,
            },
          ],
        },
        {
          q: 'How many letters are in the word "Banana"?',
          answers: [
            {
              text: '5',
              is_correct: false,
            },
            {
              text: '7',
              is_correct: false,
            },
            {
              text: '6',
              is_correct: true,
            },
            {
              text: '12',
              is_correct: false,
            },
          ],
        },
        {
          q: 'Find the missing letter: C_ke',
          answers: [
            {
              text: 'e',
              is_correct: false,
            },
            {
              text: 'a',
              is_correct: true,
            },
            {
              text: 'i',
              is_correct: false,
            },
          ],
        },
      ],
      results: [
        {
          min: 0,
          max: 2,
          title: 'Try again!',
          desc: 'Do a little more studying and you may succeed!',
        },
        {
          min: 3,
          max: 3,
          title: "Wow, you're a genius!",
          desc: 'Studying has definitely paid off for you!',
        },
      ],
    };
  },
  methods: {
    // 这里能接收来自Question组件的is_correct的值
    questionsAnsweredFunction(is_correct) {
      is_correct ? this.totalCorrect++ : '';

      // 回答完一个问题后，要回答下一个问题
      this.questionsAnswered++;

      console.log(this.totalCorrect);
    },
    reset() {
      this.questionsAnswered = 0;
      this.totalCorrect = 0;
    },
  },
};
</script>

<style></style>
