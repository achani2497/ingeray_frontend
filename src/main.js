import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/main.css'
import titleMixin from './assets/js/titleMixin'
import VueGeolocation from 'vue-browser-geolocation';
import emailjs from 'emailjs-com'

Vue.config.productionTip = true

//* EmailJs Stuff init
    emailjs.init("user_eeVYemHTnHjSJqpAxC8wh")
    Vue.use(emailjs)
//* End

//* Google Maps Stuff init
    Vue.use(VueGeolocation);
    import * as VueGoogleMaps from 'vue2-google-maps';
    Vue.use(VueGoogleMaps, {
      load:{
        key:'AIzaSyBDBIfFH7yfpNwPyzARzx0K-4D7bg-ZMK0',
        libraries: 'places'
      },
      installComponents: false
    })
    Vue.component('g-map', VueGoogleMaps.Map);
    Vue.component('g-marker', VueGoogleMaps.Marker);
//* End

Vue.mixin(titleMixin)

Vue.component('nav-bar',        require('./components/NavBar.vue').default);
Vue.component('resp-nav-bar',   require('./components/ResponsiveNavBar.vue').default);
Vue.component('important-info', require('./components/InfoImportante.vue').default);
Vue.component('e-shop-button',  require('./components/eShopButton.vue').default);
Vue.component('contact',        require('./components/ContactForm.vue').default);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
