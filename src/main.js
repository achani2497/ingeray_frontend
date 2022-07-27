import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/main.css'
import titleMixin from './assets/js/titleMixin'
import VueGeolocation from 'vue-browser-geolocation';
import{ init } from 'emailjs-com';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import ImageKit from 'imagekitio-vue'

Vue.use(VueSplide)
Vue.use(ImageKit, {
  urlEndpoint: "https://ik.imagekit.io/ingesystem22"
})

Vue.config.productionTip = true

//* EmailJs Stuff init
init("user_eeVYemHTnHjSJqpAxC8wh")
//* End

//* Google Maps Stuff init
Vue.use(VueGeolocation);
import * as VueGoogleMaps from 'vue2-google-maps';
import './assets/tailwind.css'
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

Vue.component('nav-bar',          require('./components/NavBar.vue').default);
Vue.component('resp-nav-bar',     require('./components/ResponsiveNavBar.vue').default);
Vue.component('contact',          require('./components/ContactSection/ContactForm.vue').default);
Vue.component('modal',            require('./components/Modal/Modal.vue').default);
Vue.component('titles',            require('./components/Common/TitleComponent.vue').default);

//Global variables
Vue.prototype.$imageCDN = "https://ik.imagekit.io/ingesystem22"

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
