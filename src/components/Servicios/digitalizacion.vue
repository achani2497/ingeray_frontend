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
      <div class="flex flex-col">
        <titles
          title="Conozca las posibilidades de"
          subtitle="Integración Tecnológica"
          :fontSize="25"
        ></titles>
        <p class="text-justify mt-4" style="columns: 250px 2">
          Instalamos también en forma local o remota software dedicado y
          sistemas de redes y servidores PACS (sistema de almacenamiento y
          transmisión de imágenes) para que todas la imágenes en formato DICOM
          que se generen en una locación o grupo, tanto provengan de equipos de
          DR radiología digital directa, CR, Tomografía Computada, Resonancia
          Magnética, Ecografía, etcétera. Se centralicen en un Web Server
          (servidor en línea) de forma que se pueda acceder en tiempo real a los
          archivos de imágenes de pacientes tanto dentro de la locación como
          para realizar los informes médicos a distancia. Por otro lado,
          proveemos de Sistemas de Video Digitales para equipos de radiología
          intervencionista basados en intensificador de imágenes a los cuales se
          les renueva tanto con tecnología de chips captores de alta resolución
          de tecnología astronómica con ordenador industrial de altísima
          velocidad de procesamiento que posibilita imágenes dinámicas de alta
          resolución en tiempo real como con Flat Panel para radioscopía.
        </p>
        <titles
          subtitle="Variedad de Configuraciones"
          fontSize="25"
          class="mt-10"
        ></titles>
        <titles
          title="Diseños adaptables a las necesidades específicas de cada Cliente"
          style="margin-top: -0.5rem"
        ></titles>
        <div class="h-80 w-full border-2 border-solid border-black"></div>
      </div>
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
    };
  },
  beforeMount() {
    this.servicio = this.getServiceInfo(this.slug);
  },
};
</script>

<style>
</style>