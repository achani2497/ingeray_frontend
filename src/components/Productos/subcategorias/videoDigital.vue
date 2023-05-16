<template>
  <product-template>
    <template v-slot:productInfo>
      <!-- Caracteristicas -->
      <div class="caracteristicas flex flex-col py-4 gap-4 w-full h-auto">
        <titles
          subtitle="Características Generales"
          :fontSize="25"
          :lineHeight="0"
        ></titles>
        <titles :title="producto.caracteristicas.titulo" :fontSize="25"></titles>
        <div class="flex w-full gap-4">
          <div class="columnaCaracteristicas flex flex-col gap-4">
            <p class="text-justify text-lg inge-text">{{ producto.caracteristicas.content[0].textContent }}</p>
            <div>
              <p class="text-justify text-lg inge-text-bold">{{ producto.caracteristicas.content[1].titulo }}</p>
              <p class="text-justify text-lg inge-text">{{ producto.caracteristicas.content[1].textContent }}</p>
            </div>
          </div>
          <div class="columnaCaracteristicas flex flex-col gap-4">
            <div>
              <p class="text-justify text-lg inge-text-bold">{{ producto.caracteristicas.content[2].titulo }}</p>
              <p class="text-justify text-lg inge-text">{{ producto.caracteristicas.content[2].textContent }}</p>
            </div>
            <img
            :src="require(`@/assets/images/productos/humanos/${producto.caracteristicas.imagen}`)"
            alt="img-caracteristicas"
            />
          </div>
        </div>
      </div>
      <!-- Especificaciones -->
      <especificaciones :datos="producto.especificaciones" />
      <!-- Imagenes -->
      <div class="flex images mt-4">
        <img
          :src="
            require(`@/assets/images/productos/humanos/${image.productImage}`)
          "
          alt=""
          v-for="(image, index) in producto.galeria"
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
  width: 19%;
  height: auto;
}
.columnaCaracteristicas{
  width: 50%;
}
</style>