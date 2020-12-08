import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/styles/app.scss'
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// loading progress bar
Vue.use(VueProgressBar, {
  color: '#75baff',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  autoFinish: false
})

export default new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
