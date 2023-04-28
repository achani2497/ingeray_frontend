<template>
  <div class="flex flex-col gap-8 pb-16">
    <div class="padding-container flex flex-col gap-16 pb-16">
      <!-- Carousel -->
      <div class="bg-white relative h-fit mt-4 flex inge-shadow-down flex-wrap">
      <div class="carousel h-fit w-full flex">
        <arrowless-carousel
        class="inner-carousel"
        :product_name="this.bannerInfo.product_dev_name"
        product_type="vet"
        ></arrowless-carousel>
        <div class="py-8 pr-12 flex flex-col gap-5 responsive-correction">
          <path-route></path-route>
          <titles
          :title="this.bannerInfo.category_name"
            :subtitle="this.bannerInfo.product_name"
            :fontSize="31"  
          ></titles>
          <p class="text-justify text-lg">
            {{ this.bannerInfo.product_carousel_text }}
          </p>
          <button
            class="contact-inge-button inge-shadow-down shadow-animated mt-8"
            @click="showContactMenu = true"
          >
            Quiero que me contacten
          </button>
        </div>
    </div>
      <!-- Boton de Contacto -->
      <button
      @click="showPasos = true"
      class="banner-contacto flex items-center gap-2 mb-10 -mt-2"
      >
      <div class="envelope"></div>
      <div class="text">
        <titles
        title="Contáctenos"
        subtitle="sobre este producto"
        class="banner-contacto-title"
        :fontSize="16"
        :lineHeight="10"
        ></titles>
      </div>
    </button>
    <a
    v-if="this.bannerInfo.product_shop_url"
    class="
    eshop-circle
    absolute
    -bottom-8
    right-8
    h-16
    w-16
    rounded-full
          bg-cover bg-no-repeat bg-center
        "
        :href="this.bannerInfo.product_shop_url"
        :style="{
          backgroundImage:
            'url(' +
            require('@/assets/images/icons/footerIcons/veterinaria/carrito.svg') +
            ')',
        }"
        style="transform: scale(1.5)"
        target="_blank"
      >
      </a>
    </div>
    </div>
    <!-- marcas con las que trabajamos -->
    <div class="w-full">
      <div class="padding-container">
        <titles
        class="px-16 pb-6"
        title="Marcas con las que trabajamos" 
        subtitle="Representación, Distribución, Venta y Servicio Técnico Oficial"
        :titleFontSize="31" :subtitleFontSize="17"
        ></titles>
      </div>
      <div class="bg-white w-full">
        <div class="padding-container">
          <img class="px-16" :src="require(`@/assets/images/productos/veterinaria/marcas-todos-los-productos2.png`)" alt="Marcas con las que trabajamos">
        </div>
      </div>
    </div>
    <!-- lista de productos  -->
    <div class="padding-container">
      <titles
        class="px-16 pb-4"
        title="Productos" 
        subtitle="Equipamiento para Diagnóstico Veterinario"
        :titleFontSize="31" :subtitleFontSize="17"
      ></titles>
      <div class="px-16 flex flex-row flex-wrap gap-3">
        <div
            class="card-container"
            v-for="(image, index) in productsList"
            :key="index"
          >
            <mask-redirect-button
              buttonText="Ver producto"
              imageWidth="290"
              :url="image.url"
              :alternateImageName="`home/${image.imagePath}`"
            ></mask-redirect-button>
          </div>
      </div>
    </div>
    <img class="img-animales" :src="require(`@/assets/images/productos/veterinaria/animales/Animales-INGE-V6-DUO.png`)" alt="img-animales">
  </div>
</template>
<style scoped>
.contact-inge-button {
  width: fit-content !important;
  padding: 0.7rem 1rem;
}
.card-container {
  width: 240px;
  display: flex;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
}
.img-animales{
  width: auto;
  max-height: 45px;
  align-self: center;
}
.carousel {
  background-color: white !important;
}
@media screen and (max-width: 880px) {
  .carousel {
    flex-direction: column;
  }
  .responsive-correction{
    padding: 0 2rem;
    margin-bottom: 2rem;
  }
  .contact-inge-button{
    margin-top: 0;
  }
  .inner-carousel {
    align-self: center;
  }
}
</style>
<script>
import ArrowlessCarouselVue from "../components/Carousels/ArrowlessCarousel/ArrowlessCarousel.vue";
import Modal from "../components/Modal/Modal.vue";
import SimpleContactForm from "../components/Forms/SimpleContactForm.vue";
import ContactForm from '../components/Forms/ContactForm.vue';
import PathRoute from "../components/Common/PathRoute.vue";
import MaskRedirectButtonVue from '../components/Common/MaskRedirectButton.vue';
import infoProds from '../assets/js/veterinariosTodos.json';

export default {
    components: {
        "arrowless-carousel": ArrowlessCarouselVue,
        "Modal": Modal,
        'simple-contact-form': SimpleContactForm,
        'form-pasos': ContactForm,
        'path-route': PathRoute,
        'mask-redirect-button': MaskRedirectButtonVue,
    },
    data: function() {
        return {
            showContactMenu: false,
            showPasos: false,
            bannerInfo: infoProds.bannerInfo,
            productsList: infoProds.productsList
        }
    }
}
</script>
