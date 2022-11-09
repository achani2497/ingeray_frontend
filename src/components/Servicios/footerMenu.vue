<template>
  <div class="padding-container py-10 flex flex-col gap-4" id="servicesFooter">
    <titles
      title="Conozca más sobre nuestro"
      subtitle="Prestaciones y servicios"
      :fontSize="25"
      class="pl-4"
    ></titles>
    <div class="grid grid-cols-4 grid-rows-2 gap-y-4 gap-8 mt-4">
      <router-link
        :to="servicio.url"
        class="servicio-container flex flex-col"
        v-for="(servicio, index) in servicios"
        :key="index"
      >
        <span class="pl-4 footer-menu-title"> {{ servicio.nombreCorto }} </span>
        <img class="shadow-lg" :src="servicio.miniBanner" />
      </router-link>
      <router-link to="/contacto" class="servicio-container flex flex-col">
        <span class="pl-4 footer-menu-title"> Atención Personalizada </span>
        <img
          class="shadow-lg"
          src="@/assets/images/servicios/footer-menu/atencion.jpg"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import servicios from "../../assets/js/servicios.json";
export default {
  data() {
    return {
      servicios: servicios.servicios.map((servicio) => {
        return {
          ...servicio,
          miniBanner: require(`@/assets/images/servicios/footer-menu/${servicio.url}.jpg`),
        };
      }),
    };
  },
};
</script>

<style scoped>
#servicesFooter {
  background-color: var(--light-gray);
}
#servicesFooter .router-link-exact-active {
  display: none;
}
.footer-menu-title {
  font-family: "IngeTextBold", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #0076a5;
}
</style>