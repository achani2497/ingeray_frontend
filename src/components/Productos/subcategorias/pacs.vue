<template>
  <product-template>
    <template v-slot:productInfo>
      <!-- Caracteristicas -->
      <caracteristicas :datos="producto.caracteristicas" />
      <!-- Especificaciones -->
      <especificaciones :datos="producto.especificaciones" />
      <!-- Imagenes -->
      <img
        class="pt-12"
        :src="
          require(`@/assets/images/productos/humanos/${producto.galeria[0].productImage}`)
        "
      />
      <div class="flex images my-8">
        <img
          :src="
            require(`@/assets/images/productos/humanos/${image.productImage}`)
          "
          alt=""
          v-for="(image, index) in producto.galeria.slice(1, 4)"
          :key="index"
        />
      </div>
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
import ProductTemplate from "../productTemplate.vue";
import BannerContacto from "../BannerContacto.vue";
import ContactForm from "../../Forms/ContactForm";

export default {
  props: ["slug"],
  mixins: [productMixin],
  components: {
    "product-template": ProductTemplate,
    caracteristicas: Caracteristicas,
    documentos: Documentos,
    especificaciones: Especificaciones,
    "banner-contacto": BannerContacto,
    "contact-form": ContactForm,
  },
  data() {
    return {
      producto: "",
      showModal: false,
    };
  },
  beforeMount() {
    this.producto = this.getProductEquipment(this.slug);
  },
};
</script>
<style scoped>
.images {
  width: 100%;
  gap: 0.5rem;
  justify-content: center;
}
.images img {
  width: 30%;
  height: auto;
}
</style>