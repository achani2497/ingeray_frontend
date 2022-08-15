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
          title="Características"
          subtitle="Destacables de este servicio"
          :fontSize="25"
        ></titles>
        <p class="text-justify text-lg" style="columns: 250px 2">
          Ofrecemos la adaptación tecnológica de componentes valiosos existentes
          en las instalaciones a Restaurar e incorporamos las nuevas tecnologías
          para obtener las mejores posibilidades de prestación tanto en lo que
          hace a la calidad diagnóstica de las imágenes, operatividad de los
          equipos y una propuesta estética acorde a la arquitectura del lugar.
          Nuestras propuestas pueden incluir la digitalización directa (DR)
          total o parcial del equipamiento de radiodiagnóstico y/o la
          incorporación de consolas de mando con pantallas sensibles al tacto,
          reemplazando los clásicos comandos de gran tamaño, renovación estética
          completa, reemplazo de partes obsoletas por partes nuevas como, Mesas
          radiológicas de plano flotante y Potter Bucky mural, Columnas
          portatubo, Fuentes de potencia de Alta frecuencia, Tubos radiógenos,
          Bases para Equipos Rodantes, Sistemas de Video Digital para Arcos en C
          y Seriógrafos, Digitalización de Mamógrafos analógicos
        </p>
        <div class="h-40 w-full flex gap-4">
          <div class="w-1/3 bg-red-600"></div>
          <div class="w-1/3 bg-red-600"></div>
          <div class="w-1/3 bg-red-600"></div>
        </div>
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