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
        <div>
          <div
            class="w-80 h-80 border-2 border-solid border-black float-left mr-4"
            style="shape-outside: square()"
          ></div>
          <titles
            title="Mayores prestaciones en"
            subtitle="Pedidos de Servicio Técnico"
            :fontSize="25"
          ></titles>
          <p class="text-justify mt-4 text-lg">
            Además nuestros clientes, desde sus divisiones de Compras,
            Ingeniería Clínica, Bioingeniería y Mantenimiento pueden requerir y
            recibir presupuestos para la realización de Abonos de Mantenimiento
            Preventivo (MP) programado según las especificaciones de los
            manuales de servicio de cada equipo o para Mantenimiento Correctivo
            (MC) en el caso en que uno o varios equipos presenten fallas que
            dificulten o imposibiliten el uso normal del mismo. También
            confeccionamos y enviamos el presupuesto acotado a las necesidades
            del momento y trabajamos junto con los Médicos, Técnicos Radiólogos,
            Bioingenieros y profesionales del Área de Imágenes para lograr que
            los equipos bajo reparación alcancen los mejores estándares de
            calidad teniendo también en cuenta el uso intensivo de algunos
            servicios en los que el TFS (Tiempo Fuera de Servicio) debe estar
            programado o tener un índice reducido.
          </p>
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