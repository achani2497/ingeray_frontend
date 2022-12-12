<template>
    <product-template>
        <template v-slot:title>
            <div class="producto-imagen">
              <image-carousel :elementos="producto.productos"></image-carousel>
            </div>
            <div class="titulos">
                <titles
                    :title="producto.nombreCategoria"
                    :subtitle="producto.nombreCompleto"
                    :fontSize="25"
                ></titles>
            </div>
            <!-- Descripcion -->
            <div class="descripcion my-4 simple-text gray">
                {{ producto.descripcion }}
            </div>
            <button
                class="contact-inge-button inge-shadow-down shadow-animated"
                @click="enviarMensajeWhastapp"
            >
            Quiero que me contacten
            </button>
            <!-- acá revisar si lo que está arriba conviene encerrarlo como en producto categoria -->
            <!-- Banner de contacto -->
            <div class="banner-contacto bkg-light-gray w-full flex z-10 px-16 py-4">
              <button class="flex w-auto gap-2 items-center" @click="showModal = true">
                <div class="envelope"></div>
                <div class="flex flex-col text-left">
                  <titles
                    title="Contáctenos"
                    subtitle="sobre este producto"
                    :fontSize="25"
                  ></titles>
                </div>
              </button>
            </div>

          </template>
        <template v-slot:productInfo>
          <!-- Caracteristicas -->
          <caracteristicas :datos = "producto.caracteristicas"/>
          <!-- Especificaciones -->
          <especificaciones :datos = "producto.especificaciones"/>
          <!-- Algunas diferencias -->
          <div class="diferencias flex flex-col py-4 w-full h-auto">
            <div class="titulos">
              <titles title="Algunas diferencias" :subtitle="producto.diferencias.titulo" :fontSize="25"></titles>
            </div>
            <div class="texto-caracteristica simple-text py-4">
              {{(producto.diferencias.content)}}
            </div>
          </div>
          <!-- Documentos -->
          <documentos :brochures="producto.brochures"/>
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
import { productMixin } from '../../../assets/js/productMixin';
import Caracteristicas from '../Caracteristicas.vue';
import Documentos from '../Documentos.vue';
import Especificaciones from '../Especificaciones.vue';
import GaleriaProductos from '../GaleriaProductos.vue';
import ProductTemplate from '../productTemplate.vue';
import BannerContacto from '../BannerContacto.vue';
import ContactForm from '../../Forms/ContactForm';
import ImageCarousel from '../../Carousels/Carousel/ImagesCarousel.vue';

export default {
    props: ['slug'],
    mixins: [productMixin],
    components: {
        'product-template': ProductTemplate,
        'caracteristicas': Caracteristicas,
        'documentos': Documentos,
        'especificaciones': Especificaciones,
        'galeria-productos': GaleriaProductos,
        'banner-contacto': BannerContacto,
        'contact-form': ContactForm,
        'image-carousel': ImageCarousel,
    },
    data() {
        return {
            producto: '',
            showModal: false,
        };
    },
    beforeMount() {
        this.producto = this.getProductEquipment(this.slug);
        console.log(this.producto)
        console.log(this.slug)
    },
}
</script>
<style scoped>
.producto-imagen {
  height: 100%;
  width: 60%;
}
.simple-text {
  font-size: 22px;
}
.contact-inge-button {
  width: max(14rem, 15vw);
}
.banner-contacto {
  box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.25);
}
@media screen and (min-width: 1400px) {
  .producto-imagen {
    height: 100%;
    width: 45%;
  }
 }
@media screen and (max-width: 900px) {
  .producto-descripcion,
  .producto-imagen {
    width: 100%;
    height: auto;
  }
  .producto-imagen {
    width: 100%;
    padding: 0 0.2rem;
  }
  .banner-contacto {
    padding: 1rem 3rem;
  }
}
</style>