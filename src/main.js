import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false
// Desarrollado por Julio Salazar, Rody Velasquez, William's Moran, Yordy Mochcco
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
