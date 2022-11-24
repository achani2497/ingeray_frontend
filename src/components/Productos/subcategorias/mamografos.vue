<template>
    <product-template>
        <template v-slot:productTitle>
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
          <caracteristicas />
          <!-- Especificaciones -->
          <especificaciones />
          <!-- Galeria de Imagenes -->
          <galeria-productos :producto="producto.nombreCompleto" />
          <!-- Documentos -->
          <documentos />
        </template>
        <!-- Formulario de contacto -->
        <modal :header="false" v-if="showModal">
          <template #content>
            <contact-form
              @closeModal="showModal = false"
              :producto="equipos.nombreCompleto"
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

import EventBus from '../../../assets/js/eventBus';

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
    },
    data() {
        return {
            producto: '',
            showModal: false,
        };
    },
    beforeMount() {
        this.producto = this.getEquipmentInfo(this.slug);
    },
    mounted() {
      EventBus.$on("open-form", () => {
      this.showModal = true;
      });
    },
    beforeDestroy() {
      eventBus.$off("open-form");
    },
    methods: {
      enviarMensajeWhastapp: function () {
      const from = "54911...";
      var yourMessage = "testeando";

      let message = yourMessage.split(" ").join("%20");

      console.log("https://wa.me/" + from + "?text=%20" + message);
    },
    }
}
</script>
<style scoped>
.row {
  background: white;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
}
.producto {
  width: 100vw;
}
.producto-imagen {
  height: 100%;
  width: 60%;
}
.producto-descripcion {
  width: 40%;
  height: 100%;
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
.info-adicional {
  width: 100vw;
}

@media screen and (min-width: 1400px) {
  .producto-imagen {
    height: 100%;
    width: 45%;
  }
  .producto-descripcion {
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
@media screen and (max-width: 900px) {
  .producto {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
    gap: 0;
    padding: 0;
  }
  .producto-descripcion,
  .producto-imagen {
    width: 100%;
    height: auto;
  }
  .producto-descripcion {
    padding: 0 2rem;
    gap: 0.5rem;
  }
  .producto-imagen {
    width: 100%;
    padding: 0 0.2rem;
  }
  .contact {
    width: max(30%, 30vh);
    align-self: center;
  }
  .banner-contacto {
    padding: 1rem 3rem;
  }
  .info-adicional {
    padding: 1rem 2rem 0;
  }
}
@media screen and (max-width: 650px) {
  .contact-outline {
    align-self: center;
  }
}
</style>