<template>
  <div class="flex flex-col gap-16 pb-16">
    <!-- Carousel -->
    <div class="bg-white relative h-fit mt-4 flex inge-shadow-down flex-wrap">
      <div class="carousel h-fit w-full flex">
        <arrowless-carousel
          :product_name="product.nombreCategoria"
          product_type="human"
          ></arrowless-carousel>
        <div class="py-8 pl-4 pr-12 flex flex-col gap-5 responsive-correction">
          <path-route></path-route>
          <titles
            :title="product.nombreCategoriaGeneral"
            :subtitle="product.nombreCompleto"
            :fontSize="31"
          ></titles>
          <p class="text-justify text-lg">
            {{ product.descripcion }}
          </p>
          <img
            class="eco-seal"
            v-if="product.ecoSeal"
            :src="require('@/assets/images/sello-eco.png')"
            alt="eco seal"
          />
          <button
            class="contact-inge-button inge-shadow-down shadow-animated mt-8"
            type="button"
            @click="showContactMenu = true"
          >
            Quiero que me contacten
          </button>
        </div>
      </div>
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
  </div>
    <!-- Form de Contacto -->
    <Modal
      :header="false"
      v-if="showContactMenu"
      large="sm"
    >
      <!-- Titulo del modal -->
      <template #title> Datos de contacto </template>
      <!-- Body y Footer del modal -->
      <template #content>
        <simple-contact-form
          @close="showContactMenu = false"
        ></simple-contact-form>
      </template>
    </Modal>
    <!-- Modal del formulario de tres pasos -->
    <Modal
      :header="false"
      v-if="showPasos"
      large="xl"
    >
      <!-- Form del modal -->
      <template #content>
        <form-pasos
        @close="showPasos = false"
        ></form-pasos>
      </template>
    </Modal>
    <div class="px-16">
      <slot name="productInfo"></slot>
    </div>
  </div>
</template>
  
  <script>
import { productMixin } from "../../assets/js/productMixin";
import ArrowlessCarousel from "../Carousels/ArrowlessCarousel/ArrowlessCarousel";
import PathRoute from "../Common/PathRoute.vue";
import Modal from "../Modal/Modal.vue";
import SimpleContactForm from "../Forms/SimpleContactForm.vue";
import ContactForm from "../Forms/ContactForm.vue";

export default {
  props: ["bannerName", "description"],
  mixins: [productMixin],
  components: { 
    "arrowless-carousel": ArrowlessCarousel,
    "path-route": PathRoute,
    "Modal": Modal,
    "simple-contact-form": SimpleContactForm,
    "form-pasos": ContactForm,
  },
  computed: {
    productBanner() {
      const productName = this.$route.path.split("/")[2];
      return `${this.$imageCDN}/banner-product-${productName}.jpg`;
    },
  },
  data() {
    return {
      product: "",
      showContactMenu: false,
      showPasos: false,
    };
  },
  created() {
    const productName = this.$route.path.split("/")[2];
    this.product = this.getProductEquipment(productName);
  },
};
</script>
  
<style>
.carousel {
  background-color: white !important;
}

.contact-inge-button {
  width: fit-content !important;
  padding: 0.7rem 1rem;
}
.eco-seal{
  width:100%;
  max-width: 400px;
  height: auto;
}
.banner-contacto {
  height: 50px;
  background-color: #e6e6e6;
  padding: 2rem 4rem;
  width: 100%;
}
@media screen and (max-width: 950px) {
  .carousel{
    flex-direction: column;
  }
  .responsive-correction{
    padding: 0 2rem;
    margin-bottom: 2rem;
  }
}
</style>