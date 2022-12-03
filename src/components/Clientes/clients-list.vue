<template>
  <div class="flex flex-col gap-4 px-16">
    <titles
      title="Clientes que"
      subtitle="Confían en nosotros"
      :fontSize="32"
    ></titles>
    <ul class="flex flex-wrap justify-around">
      <li
        v-for="(client, index) in clientes"
        :key="index"
        class="flex justify-center items-center"
      >
        <img
          :src="require(`@/assets/images/logos-clientes/${client.imagen}`)"
          :alt="client.imagen"
          @load="loaded()"
          width="300px"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import clientes from "../../assets/js/clientes.json";
import { VueClazyLoad } from "vue-clazy-load";

export default {
  components: {
    "clazy-load": VueClazyLoad,
  },
  data() {
    return {
      clientes: clientes.clientes,
      panel: 1,
    };
  },
  methods: {
    loaded() {
      // let load = false;
      // console.log(load);
      // load = true;
      // console.log(load);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* preloader source: https://codepen.io/Alex-Miller/pen/qviHa */
.preloader {
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  transition: all 100ms ease-in;
}

.preloader .circle,
.preloader .circle .circle-inner {
  width: inherit;
  height: inherit;
  border-radius: 50%;
  background: linear-gradient(
    rgba(64, 150, 238, 1) -50%,
    rgba(64, 150, 238, 0) 60%
  );
}

.preloader .circle {
  animation: roll 6s linear infinite;
}

.preloader .circle .circle-inner {
  padding: 5px;
  animation: roll 2s linear infinite reverse;
}

.preloader .circle .circle-inner::after {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
}
</style>