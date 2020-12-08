<template>
  <div class="exo questions">

    <div class="text-h5 font-weight-bold mb-3">
      {{ exercice.question }}
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

  export default {
    mixins: [mixin],
    methods: {
      isValid() {
        return this.answer && this.answer.trim().toUpperCase() === this.exercice.response.trim().toUpperCase()
      }
    },
    computed: {
    }
  }
</script>
