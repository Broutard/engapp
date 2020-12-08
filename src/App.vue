<template>
  <v-app :class="$route.meta.applicationClass">

    <!-- left navigation-drawer -->
    <v-navigation-drawer v-model="drawer" v-if="user" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ user.name }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <Settings/>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in menu" :key="item.name" link :to="item.to" @click="drawer=false">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense nav>
        <v-list-item link @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Déconnexion</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div id="build" class="pa-2" v-html="build"/>
      </template>
    </v-navigation-drawer>

    <!-- top app-bar -->
    <v-app-bar app color="primary" dark hide-on-scroll v-if="user">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <router-link to="/">
          <v-img class="shrink mr-3" contain src="img/logo1.png" transition="scale-transition" width="40"/>
        </router-link>
        <div>{{ name }}</div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- main -->
    <v-main>
      <!-- <v-container fluid> -->

        <!-- routed views -->
        <router-view/>
        <vue-progress-bar></vue-progress-bar>

        <!-- custom snackbar -->
        <v-snackbar v-model="snack" v-bind="snackOpts" multi-line timeout="-1">
          {{ snackText }}
          <template v-slot:action="{ attrs }">
            <v-btn text color="#00f500" v-bind="attrs" @click.stop="snackBtnFn">
              {{ snackBtnText }}
            </v-btn>
            <v-btn icon class="ml-4" @click="snack = false">
              <v-icon>close</v-icon>
            </v-btn>
          </template>
        </v-snackbar>

      <!-- </v-container> -->
    </v-main>

  </v-app>
</template>

<script>
import Settings from '@/components/Settings.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Settings
  },
  data: () => ({
    name: 'Owlways',
    // navigation
    drawer: false,
    menu: [
      { name: 'Seances', to: '/', icon: 'mdi-view-list' },
    ],
    // sw
    refreshing: false,
    registration: null,
    // snackbar
    snack: false,
    snackOpts: {bottom:true, right:true},
    snackText: '',
    snackBtnText: '',
    snackBtnFn: null,
  }),
  created () {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true })

    // Refresh all open app tabs when a new service worker is installed.
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this.refreshing) return
        this.refreshing = true
        window.location.reload(true)
      });
    }
  },
  mounted () {
    if (this.user) {
      this.$store.dispatch('loadSessions')
    }
  },
  methods: {
    showRefreshUI (e) {
      // Display a snackbar inviting the user to refresh/reload the app due
      // to an app update being available.
      // The new service worker is installed, but not yet active.
      // Store the ServiceWorkerRegistration instance for later use.
      this.registration = e.detail
      this.snackText = 'Nouvelle version disponible!'
      this.snackBtnText = 'Rafraîchir'
      this.snackBtnFn = this.refreshApp
      this.snack = true;
    },
    refreshApp () {
      this.snack = false;
      // Protect against missing registration.waiting.
      if (!this.registration || !this.registration.waiting) { return }
      this.registration.waiting.postMessage('skipWaiting')
    },
    logout: function(e, force = false) {
      if (!window.navigator.onLine && !force) {
        this.snackText = "Vous êtes hors-ligne !\nPour vous reconnecter, vous devrez être en ligne."
        this.snackBtnText = 'Se déconnecter'
        this.snackBtnFn = () => { this.snack = false; this.logout(e, true) }
        this.snack = true
        return;
      }

      this.$store.dispatch('logout')
      this.$router.push('/login')
      this.drawer = false
    }
  },
  computed: {
    build() {
      return "build #" + (process.env.VUE_APP_BUILD || 'dev')
    },
    ...mapGetters({
      user: 'getUser',
    }),
  }
}
</script>

<style lang="scss">
#build {
  font-size: 0.6em;
}
.application-bg {
  background-color: #1976d2 !important;
}
</style>
