<template>
  <service-template
    :bannerName="servicio.banner"
    :description="servicio.descripcion"
  >
    <template v-slot:serviceTitle>
      <titles
        :title="servicio.titulo"
        :subtitle="servicio.subtitulo"
        :fontSize="25"
      ></titles>
    </template>
    <template v-slot:serviceInfo>
      <div class="flex flex-col gap-4">
        <titles
          title="Mejoramos la calidad de"
          subtitle="Atención de sus Pacientes"
          :fontSize="25"
        ></titles>
        <p class="text-justify" style="columns: 250px 2">
          Signos, colores y formas que se vinculan simbólicamente con ideas de
          alegría, paz, belleza y diversión serán entonces de inspiración para
          nuestros profesionales que colaborarán con una puesta en valor
          integral de ambientes y equipos. Esta propuesta alcanza a proyectos
          arquitectónicos en curso ó que requieran un desarrollo integral y
          desde cero. De manera que los equipos rodantes existentes que
          funcionen en salas de Pediatría intervenidos por nuestros
          profesionales del Diseño hacen de la entrada diaria de un Técnico
          Radiólogo con el aparato a la sala o habitación de internación, se
          transforme en un evento divertido, amigable y hasta esperado. Muchos
          equipos de sala nuevos o puestos en valor por nuestro equipo
          interdisciplinario demuestran hoy en día que la elección de un diseño
          cuidado ha dado los resultados esperados en lo que hace a nuestro
          aporte a la calidad de atención al paciente.
        </p>
        <div class="flex flex-wrap justify-around gap-5 mt-4">
          <div
            class="ambientation-image-container overflow-hidden"
            v-for="(ambientacion, index) in ambientaciones"
            :key="index"
          >
            <div class="w-full h-fit relative">
              <img
                :src="
                  require(`@/assets/images/servicios/ambientacion/${ambientacion.nombre}.jpg`)
                "
                :alt="`imagen ambientacion ${index}`"
                :key="index"
                class="-z-10"
                width="315px"
              />
              <div
                class="
                  hover-container
                  flex flex-col
                  justify-center
                  w-full
                  h-full
                  items-center
                  gap-2
                  z-10
                  absolute
                "
              >
                <button
                  class="contact-inge-button z-10"
                  type="button"
                  @click="pickImage(ambientacion.nombre)"
                >
                  Ampliar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal large="lg" @close="showModal = false" v-if="showModal">
        <template #content class="relative">
          <button
            type="button"
            @click="showModal = false"
            style="font-size: 60px"
            class="absolute top-2 right-2 text-xl text-white"
          >
            <span>&times;</span>
          </button>
          <img :src="imageToZoom" alt="imagen ampliada rayos x columna" />
        </template>
      </modal>
    </template>
  </service-template>
</template>

<script>
import { serviceMixin } from "../../assets/js/serviceMixin";
import ServiceTemplate from "./serviceTemplate.vue";

export default {
  props: ["slug"],
  mixins: [serviceMixin],
  components: {
    "service-template": ServiceTemplate,
  },
  data() {
    return {
      servicio: "",
      imagePicked: "",
      showModal: false,
      ambientaciones: [
        {
          nombre: "ambientacion1",
        },
        {
          nombre: "ambientacion2",
        },
        {
          nombre: "ambientacion3",
        },
      ],
    };
  },
  methods: {
    pickImage(imageName) {
      this.imagePicked = imageName;
      this.showModal = true;
    },
  },
  beforeMount() {
    this.servicio = this.getServiceInfo(this.slug);
  },
  computed: {
    imageToZoom() {
      return require(`@/assets/images/servicios/ambientacion/zoom-${this.imagePicked}.jpg`);
    },
  },
};
</script>

<style>
.ambientation-image-container {
  display: flex;
  flex-direction: column;
}
.ambientation-image-container:hover {
  color: var(--bluish-green);
  font-size: 17px;
  font-family: "IngeTextBold", Arial, Helvetica, sans-serif;
  border-bottom: 3px solid var(--bluish-green);
}
.ambientation-image-container:hover .hover-container {
  transform: translateX(0);
}
.hover-container {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(12, 127, 126, 0.3);
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
}
.hover-container:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(3px);
}
</style>