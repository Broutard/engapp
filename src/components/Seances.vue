<template>

  <v-card class="mx-auto">
    <v-card-title>Séances</v-card-title>

    <v-divider></v-divider>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Seance
            </th>
            <th class="text-left">
              Avancement
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(session) in sessions" :key="session.id"
            @click="$router.push({name: 'Seance', params:{ id:session.id }})"
            class="seance"
          >
            <td class="text-left">{{ session.title }}</td>
            <td class="text-left">{{ getSessionProgress(session.id) }}/{{ session.exercices.length }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>

</template>


<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Sessions',
  mounted() {
    this.$store.dispatch('loadSavedAnswers')
  },
  methods: {
    getSessionProgress(sessionId) {
      // console.log(this.answers)
      return this.answers[sessionId] ? this.answers[sessionId].length : 0
    },
  },
  computed: {
    ...mapState(['sessions']),
    ...mapGetters(['answers']),
  }
}
</script>

<style scoped>
.seance {
  cursor: pointer;
}
</style>
