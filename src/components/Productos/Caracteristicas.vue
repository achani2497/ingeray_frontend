<template>
  <div class="caracteristicas flex flex-col py-4 gap-4 w-full h-auto">
    <titles
      subtitle="Características Generales"
      :fontSize="25"
      :lineHeight="0"
    ></titles>
    <titles :title="datos.titulo" :fontSize="25"></titles>
    <p class="text-justify text-lg two-columns-text">
      {{ datos.content }}
      <img
        v-if="datos.imagen"
        :src="getImgSource(datos.imagen)"
        alt="img-caracteristicas"
      />
    </p>
  </div>
</template>
<script>
export default {
  props: ["datos"],
  data() {
    return {
      mediaTexto: 0,
    };
  },
  methods: {
    getImgSource: function (imgSrc) {
      return require(`@/assets/images/productos/humanos/${imgSrc}`);
    },
    primeraMitad: function (texto) {
      let textLength = texto.length;
      if (textLength <= 570) {
        return texto;
      }
      this.mediaTexto = Math.floor(textLength * 0.6);
      return texto.substring(0, this.mediaTexto);
    },
    segundaMitad: function (texto) {
      if (texto.length > 570) {
        return texto.substring(this.mediaTexto);
      }
    },
  },
};
</script>
<style scoped>
</style>