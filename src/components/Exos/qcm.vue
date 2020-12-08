<template>
  <div class="exo qcm">

    <v-radio-group v-model="answer">
      <template v-slot:label>
        <div class="text-body-1 font-weight-bold">{{ exercice.question }}</div>
      </template>
      <v-radio
        v-for="(item, idx) in exercice.answers" :key="idx"
        :value="idx"
        :disabled="showCorrection"
      >
        <template v-slot:label>
          <div :class="getAnswerStyle(idx)">{{ item.label }}</div>
        </template>
      </v-radio>
    </v-radio-group>

  </div>
</template>

<script>
  import mixin from '@/mixins/exo'

  export default {
    mixins: [mixin],
    methods: {
      isValid() {
        const userAnswer = this.answer,
          answer = this.exercice.answers[userAnswer]

        return Number.isInteger(userAnswer) && answer.correct;
      },
      getAnswerStyle (answerIdx) {
        if (this.showCorrection) {
          const answer = this.exercice.answers[answerIdx],
            userAnswer = this.answer

          if (answer.correct) {
            // correct answer
            return "font-weight-bold green--text"
          } else if(Number.isInteger(userAnswer) && userAnswer == answerIdx && this.exercice.answers[userAnswer].correct!==true) {
            // error
            return "font-weight-bold red--text"
          }
        }

        return "font-weight-normal"
      }
    }
  }
</script>
