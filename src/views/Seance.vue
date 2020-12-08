<template>
  <v-form @submit.prevent="submit">
    <v-container fluid>
      <div class="text-h6 text-md-h5 text-truncate">{{ session.title }}</div>

      <v-progress-linear :value="progressPercent" class="mb-5"></v-progress-linear>

        <component
          ref="exo"
          v-if="!finished"
          :is="session.exercices[currentExoIdx].type"
          :exercice="session.exercices[currentExoIdx]"
          :showCorrection="showCorrection"
          :submit="submit"
        >
        </component>

        <h2 v-if="finished" class="success--text">Séance terminée ! Bravo !</h2>
    </v-container>

    <div class="submitExoBar" v-if="!finished">
      <v-btn class="submitBtn" :color="submitBtnColor" type="submit">
        {{ submitBtnText }}
      </v-btn>
    </div>

  </v-form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import qcm from '@/components/Exos/qcm.vue'
import question from '@/components/Exos/question.vue'
import translate from '@/components/Exos/translate.vue'

export default {
  name: 'Session',
  props: {
    id: {
      required: true
    }
  },
  created() {
    this.resetSession()
    this.setCurrentSession(this.id)
  },
  data() {
    return {
      currentExoIdx: 0,
      answer: null,
      showCorrection: false,
      progress: 0,
      finished: false,
    }
  },
  components: {
    qcm, question, translate
  },
  methods: {
    submit(exo) {
      if (!this.showCorrection) {
        this.progress++
        this.showCorrection = true
        this.$store.commit('saveAnswer', {
          'sessionId': this.id,
          'exoId': this.currentExoIdx,
          'answer': this.$refs.exo.answer,
          'valid': this.$refs.exo.isValid()
        })
        this.playSound(this.$refs.exo.isValid());
      } else {
        this.showCorrection = false
        this.$refs.exo.answer = null
        if (this.currentExoIdx >= this.session.exercices.length-1) {
          this.finished = true
        } else {
          this.currentExoIdx++
        }
      }
    },
    playSound(isValid) {
      if (isValid) {
        (new Audio(require('@/assets/sounds/ok.mp3'))).play();
      } else {
        (new Audio(require('@/assets/sounds/error.mp3'))).play();
      }
    },
    ...mapMutations([
      'setCurrentSession', 'resetSession'
    ]),
  },
  computed: {
    session() {
      return this.getSession(this.id)
    },
    progressPercent() {
      if (this.progress === this.session.exercices.length) {
        (new Audio(require('@/assets/sounds/finish.mp3'))).play();
      }
      return (this.progress)*100 / this.session.exercices.length
    },
    submitBtnColor() {
      if (!this.showCorrection) {
        return 'primary'
      } else if(this.$refs.exo.isValid()) {
        return 'success'
      } else {
        return 'error'
      }
    },
    submitBtnText() {
      if (!this.showCorrection) {
        return 'Valider'
      } else {
        if (this.progress < this.session.exercices.length) {
          return 'Exercice suivant'
        } else {
          return 'Terminer'
        }
      }
    },
    ...mapGetters({
      getSession: 'getSession'
    }),
  }
}
</script>

<style lang="scss">
html,body {
  height: 100%;
  position: relative;
}
.v-form {
  position: relative;
  height: 100%;
}
.submitExoBar {
  position: absolute;
  padding: 30px 30px 80px;
  bottom: 0;
  width: 100%;
  background-color: #FFF;

  .submitBtn {
    width: 100%;
  }
}
</style>
