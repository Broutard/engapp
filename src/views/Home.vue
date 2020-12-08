<template>
  <v-container fluid>
      <Seances/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Seances from '@/components/Seances.vue'

export default {
  name: 'Home',
  components: {
    Seances
  }
}
</script>
