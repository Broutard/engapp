<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon class="ml-1" v-bind="attrs" v-on="on">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </template>
    <v-card>

      <v-card-title>
        <span class="headline">Paramètres</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-autocomplete
                v-model="settings.voices.fr"
                :items="voices.fr"
                label="Voix Française"
                @change="testVoice('fr')"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                v-model="settings.voices.en"
                :items="voices.en"
                label="Voix Anglaise"
                @change="testVoice('en')"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Fermer
        </v-btn>
        <v-btn color="blue darken-1" text @click="save">
          Enregistrer
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data: () => ({
      dialog: false,
    }),
    methods: {
      getVoice(lang) {
        return this.deviceVoices()
          .filter(v => v.lang.substring(0, 2) === lang)
          .sort(v => v.localService)
          .map(v => v.name)
      },
      testVoice(lang) {
        const samples = {
          fr: "Enchantée, je serais votre voix Française !",
          en: "Nice to meet you, I will be your English voice!",
        }

        speechSynthesis.cancel()
        let msg = new SpeechSynthesisUtterance()
        msg.voice = this.deviceVoices().find(v => v.name == this.settings.voices[lang])
        msg.volume = 1 // From 0 to 1
        msg.text = samples[lang]
        msg.lang = msg.voice.lang.replace('_', '-')
        speechSynthesis.speak(msg)
      },
      save() {
        this.saveSettings(this.settings)
        this.dialog = false
      },
      ...mapGetters(['deviceVoices']),
      ...mapActions(['saveSettings']),
    },
    computed: {
      voices() {
        return {
          fr: this.getVoice('fr'),
          en: this.getVoice('en'),
        }
      },
      ...mapGetters(['settings']),
    }
  };
</script>
