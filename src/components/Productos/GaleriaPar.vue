<template>
    <div class="galeria flex flex-col py-4 gap-4">
      <titles subtitle="Galería" :fontSize="25"></titles>
      <div
        :class="`opcion-imagen ${esMamo() ? 'mamo-txt opcion-activa-mamo' : 'opcion-activa'}`"
        style="font-family: 'IngeTextBold', Arial, Helvetica, sans-serif"
      >
        Imágenes Clínicas
      </div>
      <div class="imagenes-galeria flex gap-1 flex-wrap justify-center">
        <div v-for="(grupoImagenes, index) in datos" :key="index" class="rowElement">
          <img v-for="(imagen, index) in grupoImagenes" :src="imagen.productImage" :alt="imagen.productName" width="120" :key="index" />
        </div>
      </div>
      <small class="mb-4"
        >Las imágenes de los equipos son ilustrativas. Póngase en contacto y
        solicite un presupuesto personalizado para recibir información e imágenes
        actualizadas</small
      >
      <button :class="`contact-outline ${esMamo() ? 'mamo-btn-outline' : ''}`" @click="showModal = true">Ver Más</button>
      <Modal :header="true" @close="showModal = false" v-if="showModal">
        <template #title>
          <div class="title blue">Imágenes de los equipos</div>
        </template>
        <template #content>
          <div class="images-container overflow-y-scroll">
            <div class="images" v-for="(grupoImagenes, index) in datos" :key="index">
              <img
              v-for="(imagen, index) in grupoImagenes"
                :key="index"
                :src="imagen.productImage"
                :alt="imagen.productName"
              />
            </div>
          </div>
        </template>
      </Modal>
    </div>
  </template>
  <style scoped>
  .opcion-imagen {
    border-bottom: 2px solid gray;
    padding: 0 1rem;
    font-size: 15px;
  }
  .opcion-activa {
    color: var(--dark-bluish-green);
    border-bottom: 3px solid var(--dark-bluish-green);
  }
  .opcion-activa-mamo {
    border-bottom: 3px solid var(--mamo-pink);
  }
  .images-container {
    height: 80vh;
    padding: 0 2rem 2rem;
  }
  .rowElement {
    flex-basis: 33%;
  }
  /* .imagenes-galeria{
  } */
  .images {
    display: grid;
    gap: 2rem;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  }
  @media screen and (max-width: 650px) {
    .opcion-imagen {
      width: 100%;
    }
  }
  </style>
  <script>
  import { mamoMixin } from "../../assets/js/mamoMixin";
  import Modal from "@/components/Modal/Modal.vue";
  export default {
    components: { Modal },
    mixins: [mamoMixin],
    props: ["datos"],
    data() {
      return {
        showModal: false,
        productosGaleria: [],
      };
    },
    created: function () {
      this.productosGaleria = this.datos.map((imagen) => {
        imagen.productImage = require(`@/assets/images/productos/humanos/${imagen.productImage}`);
      });
    },
  };
  </script>