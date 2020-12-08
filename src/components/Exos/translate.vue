<template>
  <div class="exo translate">

    <div class="text-h5 font-weight-bold mb-3">Traduis en [{{ exercice.options.to }}]</div>
    <div class="text-body-1 font-weight-bold mb-3">
      <v-icon class="primary--text" @click="speech" v-if="canSpeech">mdi-volume-high</v-icon>
      "{{ exercice.question }}"
    </div>

    <v-text-field
      label="réponse"
      v-model="answer"
      :success-messages="showCorrection && isValid() ? exercice.response : ''"
      :error-messages="showCorrection && !isValid() ? exercice.response : ''"
      :readonly="showCorrection"
    >
    </v-text-field>

  </div>
</template>

<script>
  import mixin from '@/mixins/exo'
  import { mapGetters } from 'vuex'

  export default {
    mixins: [mixin],
    methods: {
      isValid() {
        return this.answer && this.answer.trim().toUpperCase() === this.exercice.response.trim().toUpperCase()
      },
      speech() {
        speechSynthesis.cancel()
        let msg = new SpeechSynthesisUtterance()
        msg.voice = this.getVoice(this.exercice.options.from)
        msg.volume = 1 // From 0 to 1
        // msg.rate = 0.7 // From 0.1 to 10
        // msg.pitch = 1 // From 0 to 2
        msg.text = this.exercice.question
        msg.lang = msg.voice.lang.replace('_', '-')
        // console.log(msg)
        speechSynthesis.speak(msg)
      },
      ...mapGetters(['settings']),
    },
    computed: {
      canSpeech() {
        return !!(this.getVoice(this.exercice.options.from))
      },
      ...mapGetters(['getVoice']),
    }
  }
</script>
