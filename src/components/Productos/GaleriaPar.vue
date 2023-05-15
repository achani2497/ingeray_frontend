<template>
    <div class="galeria flex flex-col py-4 gap-4">
      <titles subtitle="Galería" :fontSize="25"></titles>
      <div
        :class="`opcion-imagen ${esMamo() ? 'mamo-txt opcion-activa-mamo' : 'opcion-activa'}`"
        style="font-family: 'IngeTextBold', Arial, Helvetica, sans-serif"
      >
        Imágenes Clínicas
      </div>
      <div class="flex flex-wrap justify-around gap-y-2">
        <div v-for="(grupoImagenes, index) in datos" :key="index" class="mb-2 rowElement flex justify-around gap-2 parImagenes relative">
          <img
           v-for="(imagen, index) in grupoImagenes" :src="require(`@/assets/images/productos/humanos/${imagen.productImage}`)" 
           :alt="imagen.productName" 
           width="120" 
           :key="index" />
          <div class="mask w-full h-full flex justify-center items-center">
            <button 
             :class="`contact-inge-button ${esMamo() ? 'mamo-btn' : ''} self-center z-20`" 
             @click="setParImg(index); showModalPair=true" 
             type="button"
             :key="index"
            >
              Ampliar
            </button>
          </div>
        </div>
      </div>
      <small class="mb-4"
        >Las imágenes de los equipos son ilustrativas. Póngase en contacto y
        solicite un presupuesto personalizado para recibir información e imágenes
        actualizadas</small
      >
      <button :class="`contact-outline ${esMamo() ? 'mamo-btn-outline' : ''}`" @click="showModal = true">Ver Más</button>
      <Modal :header="false" @close="showModalPair= false" v-if="showModalPair" large="par">
        <template #content>
          <div class="flex">
            <img
             :src="require(`@/assets/images/productos/humanos/${datos[posParImg][0].productImage}`)"
             :alt="datos[posParImg][0].productName"
             class="imgParAmpliado"
            >
            <img
             :src="require(`@/assets/images/productos/humanos/${datos[posParImg][1].productImage}`)"
             :alt="datos[posParImg][1].productName"
             class="imgParAmpliado"
            >
          </div>
        </template>
      </Modal>
      <Modal :header="true" @close="showModal = false" v-if="showModal">
        <template #title>
          <div class="title blue">Imágenes de los equipos</div>
        </template>
        <template #content>
          <div class="images-container overflow-y-scroll flex flex-wrap gap-4">
            <div class="images flex gap-4 " v-for="(grupoImagenes, index) in datos" :key="index">
              <img
              v-for="(imagen, index) in grupoImagenes"
                :key="index"
                :src="require(`@/assets/images/productos/humanos/${imagen.productImage}`)"
                :alt="imagen.productName"
                class="imgGaleriaAmpliada"
              />
            </div>
          </div>
        </template>
      </Modal>
    </div>
  </template>
  <style scoped>
  .close-button {
  border-radius: 100%;
}
.close-button img {
  transform: scale(3);
}
.close-par-btn {
  /* position: relative;
  top: 0;
  right:0; */
}
  .imgParAmpliado {
    width: 50%;
  }
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
    flex-basis: 32%;
    overflow: hidden;
  }
  .images {
    flex-basis: 44%;
  }
.imgGaleriaAmpliada {
  width: 45%;
}
  .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--shadow-gray);
  top: 0;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
}
.mask:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(3px);
}
.parImagenes:hover .mask {
  transform: translateX(0);
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
        showModalPair: false,
        productosGaleria: [],
        posParImg: '',
      };
    },
    methods: {
      setParImg(numero) {
        this.posParImg = numero;
      },
    }
  };
  </script>