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
          title="Radiologia convencional e Intervencionista"
          subtitle="Galería de Productos en Alquiler"
          :fontSize="25"
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