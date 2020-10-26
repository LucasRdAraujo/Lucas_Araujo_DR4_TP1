import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(firestorePlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')