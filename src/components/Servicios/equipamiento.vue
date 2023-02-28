<template>
  <service-template
    :bannerName="servicio.banner"
    :description="servicio.descripcion"
  >
    <template v-slot:serviceTitle>
      <titles
        :title="servicio.titulo"
        :subtitle="servicio.subtitulo"
        :fontSize="31"
      ></titles>
    </template>
    <template v-slot:serviceInfo>
      <!-- más buscados-->
      <div class="pb-16 pt-2">
        <titles
          class="pb-8"
          title="Galería de Productos"
          subtitle="Los más buscados"
          :fontSize="31"
            ></titles>
        <div class="flex flex-wrap justify-between items-around gap-3">
          <mas-buscados 
          v-for="(producto, index) in masBuscados"
          sectionName="/productos/buscados/"
          :imageName="producto.image"
          :prodUrl = "producto.url"
          imageExtension=".png"
          imageWith="245px"
          ></mas-buscados>
        </div>
      </div>
      <!-- nuestras marcas nacionales e internacionales -->
      <div class="bg-white fondo-completo">
        <div class="py-16">
            <titles
            class="pb-8"
            title="Nuestras Marcas"
            subtitle="Nacionales e Internacionales"
            :fontSize="31"
              ></titles>
              <p class="simple-text mt-4 text-justify texto-marcas">
                Además de la marca propia, tanto en Argentina como en países de la región proveemos soluciones, repuestos y servicios  en equipamiento de marcas locales e internacionales:
              </p>
              <p class="simple-text mt-4 text-justify font-bold">
                AGFA, ARIES, BIPLETT, BROWINER, CARESTREAM, CGR, CHISON, CLAYMOUNT, DEL BUENO, DIGINET, DIGIRAD, DINAN, DRGEM, DRTECH, ECORAY, EDAN, FILIPPO, FISHER, GBA, GENERAL ELECTRIC, GENERAL MEDICAL MERATE, GENERAY, HITACHI, HOLOGIC, IAE, IASA ELECTRONICA, ICRO, INSTRUMED, INSTRUMENTARIUM, INVELEC, IONORAY, JPI, KAILONG, KAIXIN, MAURIZZI, MEDITECH, MEMORAD Q, MINDRAY, MyF, ODEL, OEC, PHILIPS, PIMAX, PLANMECA, POSKOM, RAIX, REMS, SEDECAL, SHIMADZU, SIEMENS, SONOWIN, THALES, 
              </p>
        </div>
      </div>
      <!-- Eco responsabilidad -->
      <div class="py-16">
        <eco-seal></eco-seal>
      </div>
    </template>
  </service-template>
</template>

<script>
import { serviceMixin } from "../../assets/js/serviceMixin";
import ServiceTemplate from "./serviceTemplate.vue";
import buscados from '../../assets/js/mas_buscados.json';
import PicZoomWithText from "../Common/PicZoomWithText.vue";
import seccionEco from "./seccionEco.vue";

export default {
  props: ["slug"],
  mixins: [serviceMixin],
  components: {
    "service-template": ServiceTemplate,
    "eco-seal": seccionEco,
    "mas-buscados": PicZoomWithText,
  },
  data() {
    return {
      servicio: "",
      masBuscados: buscados.buscados,
    };
  },
  beforeMount() {
    this.servicio = this.getServiceInfo(this.slug);
  },
};
</script>

<style scoped>
.fondo-completo {
  /* width: 100vw; */
}
</style>