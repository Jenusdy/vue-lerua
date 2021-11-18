import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import FlagIcon from './plugins/flag'
import i18n from './plugins/i18n'

Vue.config.productionTip = false
export const bus = new Vue();

new Vue({
  FlagIcon,
  i18n,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
