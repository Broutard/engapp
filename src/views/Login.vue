<template>
  <v-container fluid class="text-center">
    <h1 class="white--text mb-5">Owlways</h1>
    <v-img class="mx-auto logo" contain src="img/logo1.png" position="center 7px" height="80" transition="false"/>
    <v-card
        elevation="2"
        max-width="400"
        class="mx-auto"
    >

        <v-card-title>Connexion élève</v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
          >
            <v-text-field
              v-model="login"
              :rules="loginRules"
              label="Identifiant"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Mot de passe"
              required
            ></v-text-field>

            <v-btn
              :disabled="!canLogin"
              color="success"
              class="mt-5"
              @click="validate"
            >
              {{ connexionBtnText }}
            </v-btn>
          </v-form>
        </v-card-text>

    </v-card>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      valid: true,
      login: '',
      loginRules: [
        v => !!v || 'Identifiant requis',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Mot de passe requis',
      ],
      lazy: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
        this.$store.dispatch('login').then(user => {
          this.$store.dispatch('loadSessions')
          this.$router.replace('/')
        })
      }
    },

    computed: {
      canLogin() {
        return this.valid && this.isOnline
      },
      connexionBtnText() {
        return this.isOnline ? 'CONNEXION' : 'En attente de reseau...'
      },
      ...mapGetters(['isOnline']),
    }
  }
</script>

