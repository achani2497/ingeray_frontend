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

Vue.use(VueSplide)

Vue.config.productionTip = true

//* EmailJs Stuff init
    init("user_eeVYemHTnHjSJqpAxC8wh")
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

Vue.component('nav-bar',          require('./components/NavBar.vue').default);
Vue.component('resp-nav-bar',     require('./components/ResponsiveNavBar.vue').default);
Vue.component('important-info',   require('./components/InfoImportante.vue').default);
Vue.component('contact',          require('./components/ContactSection/ContactForm.vue').default);
Vue.component('footer-content',   require('./components/Footer.vue').default);
Vue.component('carousel',         require('./components/Carousel/Carousel.vue').default);
Vue.component('image-carousel',   require('./components/Carousel/ImagesCarousel.vue').default);
Vue.component('product-carousel', require('./components/Carousel/ProductCarousel.vue').default);
Vue.component('service-carousel', require('./components/Carousel/ServiceCarousel.vue').default);
Vue.component('modal',            require('./components/Modal/Modal.vue').default)
Vue.component('newsletter-form',  require('./components/Modal/NewsletterSuscribe.vue').default)
Vue.component('contact-form',     require('./components/Modal/Contact.vue').default)
Vue.component('sub-menu',         require('./components/NavBarSubMenu.vue').default);
Vue.component('contact-form-prod', require('./components/Forms/ContactForm.vue').default);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
