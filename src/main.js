import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/main.css'

Vue.config.productionTip = false

Vue.component('nav-bar', require('./components/NavBar.vue').default);
Vue.component('resp-nav-bar', require('./components/ResponsiveNavBar.vue').default);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
