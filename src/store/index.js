import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'
import * as localforage from "localforage";

Vue.use(Vuex)

// local databases
const settingsDb = localforage.createInstance({
  storeName: "settings"
});
const answersDb = localforage.createInstance({
  storeName: "answers"
});

// default current state for resetCurrent() mutation
const getDefaultCurrent = () => {
  return {
    sessionIdx: null,
    answers: [],
  }
};

const store = new Vuex.Store({
  state: {
    online: window.navigator.onLine,
    user: null,
    settings: {
      voices: {
        fr: null,
        en: null,
      }
    },
    sessions: [],
    answers: [],
    current: getDefaultCurrent(),
    deviceVoices: [],
  },
  mutations: {
    online (state, value) {
      state.online = value
    },
    setUser (state, user) {
      state.user = user
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    },

    setDeviceVoices(state, voices) {
      state.deviceVoices = voices
    },

    setSettings(state, settings) {
      if (settings) {
        state.settings = settings
      }
    },

    setSessions (state, sessions) {
      state.sessions = sessions
    },
    resetSession (state) {
      Object.assign(state.current, getDefaultCurrent())
    },

    setCurrentSession (state, idx) {
      state.current.sessionIdx = idx
    },

    setAnswers (state, answers) {
      state.answers = answers
    },

    saveAnswer (state, {sessionId, exoId, answer, valid}) {
      sessionId = sessionId.toString()
      answersDb.getItem(sessionId).then(function(value) {

        // update local db
        if (value === null) value = []
        value[exoId] = [answer, valid]
        answersDb.setItem(sessionId, value)

        // send to api
        // axios
        // .post('/answer.json', {
        //   session: sessionId,
        //   answers: value
        // })
        // .then(r => r.data)
      })
    },
  },
  getters: {
    isOnline: (state) => {
      return state.online
    },

    settings: (state) => {
      return state.settings
    },

    deviceVoices: (state) => {
      return state.deviceVoices
    },
    getVoice: (state) => (lang) => {
      return state.deviceVoices.find(v => v.name == state.settings.voices[lang])
    },

    getUser: (state) => {
      let user
      if (!state.user && (user = localStorage.getItem('user'))) {
        state.user = JSON.parse(user)
      }
      return state.user
    },

    getSession: (state) => (sessionId) => {
      return state.sessions.find(session => session.id == sessionId)
    },

    answers: (state) => {
      return state.answers
    }
  },
  actions: {
    login() {
      return new Promise(( res, rej ) => {
        axios
          .get('/login.json')
          .then(r => r.data)
          .then(user => {
            this.commit('setUser', user)
            res(user)
          })
          .catch(() => rej());
        })
    },
    logout() {
      this.commit('setUser', null)
    },

    loadDeviceVoices(context) {
      new Promise(
        function (resolve, reject) {
          let synth = window.speechSynthesis;
          let id;

          id = setInterval(() => {
            if (synth.getVoices().length !== 0) {
              resolve(synth.getVoices());
              clearInterval(id);
            }
          }, 10);
        }
      ).then(voices => {
        store.commit('setDeviceVoices', voices)

        // set default settings voices
        let settings = context.getters.settings
        Object.entries(settings.voices).forEach(([k, v]) => {
          let voice
          if (!settings.voices[k] && (voice = voices.find(v => v.lang.substring(0, 2) == k))) {
            settings.voices[k] = voice.name
          }
        })
        this.commit('setSettings', settings)
      })
    },

    loadSettings() {
      settingsDb.getItem('settings').then(settings => {
        this.commit('setSettings', settings)
      })
    },
    saveSettings(context, settings) {
      settingsDb.setItem('settings', settings)
    },

    loadSessions() {
      axios
        .get('/sessions.json')
        .then(r => r.data)
        .then(sessions => {
          this.commit('setSessions', sessions)
        })
    },

    loadSavedAnswers() {
      let answers = [];
      answersDb
        .iterate((value, key) => {
          answers[key] = value
        }).then(() => {
          this.commit('setAnswers', answers)
        })
    },
  },
  modules: {
  }
})

// -------
// @init
// -------
// switch online/offline in store
window.addEventListener('online',  () => store.commit('online', true) );
window.addEventListener('offline',  () => store.commit('online', false) );

// load settings from db
store.dispatch('loadSettings').then(() => {
  // load device voices & settings
  store.dispatch('loadDeviceVoices')
})

// load saved answers from db
store.dispatch('loadSavedAnswers')

export default store
