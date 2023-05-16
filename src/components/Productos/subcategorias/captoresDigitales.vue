<template>
  <product-template>
    <template v-slot:productInfo>
      <!-- Caracteristicas -->
      <caracteristicas :datos="producto.caracteristicas" />
      <!-- Especificaciones -->
      <especificaciones :datos="producto.especificaciones" />
      <div class="banner-cont" :style="bannerContStyle">
        <img
        :src="require('@/assets/images/productos/humanos/mamo/mamo-banner.png')"
        alt="Banner Mamografia"
        width="100%"
        class="bg-white banner-mamo"
        id="img-banner"
        />
      </div>
      <!-- Galeria -->
      <galeria-pares :datos="producto.galeria"/>
      <!-- Documentos -->
      <documentos :brochures="producto.brochures" />
    </template>
    <!-- Formulario de contacto -->
    <modal :header="false" v-if="showModal">
      <template #content>
        <contact-form
          @closeModal="showModal = false"
          :producto="producto.nombreCompleto"
        ></contact-form>
      </template>
    </modal>
  </product-template>
</template>
<script>
import { productMixin } from "../../../assets/js/productMixin";
import Caracteristicas from "../Caracteristicas.vue";
import Documentos from "../Documentos.vue";
import Especificaciones from "../Especificaciones.vue";
import GaleriaProductos from "../GaleriaProductos.vue";
import ProductTemplate from "../productTemplate.vue";
import BannerContacto from "../BannerContacto.vue";
import ContactForm from "../../Forms/ContactForm";
import GaleriaPar from '../GaleriaPar.vue';

export default {
  props: ["slug"],
  mixins: [productMixin],
  components: {
    "product-template": ProductTemplate,
    caracteristicas: Caracteristicas,
    documentos: Documentos,
    especificaciones: Especificaciones,
    "galeria-productos": GaleriaProductos,
    "banner-contacto": BannerContacto,
    "contact-form": ContactForm,
    "galeria-pares": GaleriaPar,
  },
  data() {
    return {
      producto: "",
      showModal: false,
      bannerContStyle: {},
    };
  },
  created() {
    window.addEventListener('scroll', this.ajustarBannerScroll);
    window.addEventListener('load', this.ajustarBanner);
    window.addEventListener('resize', this.ajustarBanner);
  },
  beforeMount() {
    this.producto = this.getProductEquipment(this.slug);
  },
  methods: {
    ajustarBanner() {
      const elHeight = document.getElementById('img-banner').clientHeight;
      this.bannerContStyle = {
        height: `${elHeight}px`
      }
    },
    ajustarBannerScroll() {
      this.ajustarBanner;
      window.removeEventListener('scroll', this.ajustarBannerScroll)
    }
  },
};
</script>
<style scoped>
.banner-mamo {
  position: absolute;
  left: 0;
}
.banner-cont {
  height: 216px;
}
</style>