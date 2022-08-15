<template>
  <div class="px-52 py-10" id="servicesFooter">
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
        <titles
          :subtitle="servicio.nombreCorto"
          :fontSize="15"
          class="pl-4"
        ></titles>
        <img class="shadow-lg" :src="servicio.miniBanner" />
      </router-link>
      <router-link to="/contacto" class="servicio-container flex flex-col">
        <titles subtitle="Contacto" :fontSize="15" class="pl-4"></titles>
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

<style>
#servicesFooter {
  background-color: var(--light-gray);
}
.router-link-active {
  display: none;
}
</style>