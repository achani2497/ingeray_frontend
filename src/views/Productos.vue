<template>
  <div class="row">
    <div
      class="container"
      v-for="(categoria, index) in categorias"
      :key="index"
    >
      <CustomPath :slavons="diagnosticoImagenesPath"></CustomPath>
      <titles :subtitle="categoria.nombreCategoria" :fontSize="25"></titles>
      <div class="subcategorias">
        <div
          class="tab"
          v-for="(subcategoria, index1) in categoria.subcategorias"
          :key="index1"
        >
          <mask-redirect-button-vue
            :tabName="subcategoria.nombreProducto"
            buttonText="Ver Equipos"
          ></mask-redirect-button-vue>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import categoriasProductos from "../assets/js/categoriasProductos.json";
import CustomPath from "@/components/CustomPath.vue";
import { slavonMixin } from "@/assets/js/slavonMixin.js";
import MaskRedirectButtonVue from "../components/Common/MaskRedirectButton.vue";

export default {
  mixins: [slavonMixin],
  components: { CustomPath, MaskRedirectButtonVue },
  data: function () {
    return {
      lastScrollPosition: 0,
      showNavbar: false,
      categorias: categoriasProductos.categorias,
      basePath: [
        {
          sectionName: "Inicio",
          sectionUrl: "/",
        },
        {
          sectionName: "Productos",
          sectionUrl: "/productos",
        },
      ],
    };
  },
  methods: {
    onScroll() {
      let width = window.innerWidth;
      if (width > 650) {
        var currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) {
          return;
        }

        this.showNavbar = currentScrollPosition > 300;
        this.lastScrollPosition = currentScrollPosition;
      }
    },
    generameElPathCompleto(nombre, url) {
      let slavon = this.dameUnSlavon(nombre, url);
      let auxPath = this.basePath;
      auxPath.push(slavon);
      return auxPath;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  computed: {
    diagnosticoImagenesPath() {
      this.generameElPathCompleto("Diagnóstico por Imágenes", "/productos");
    },
    veterinariaPath() {
      this.generameElPathCompleto("Division Veterinaria", "/productos");
    },
  },
};
// {
//     "nombreCategoria":"ultrasonografia",
//     "nombreProducto": "Ultrasonografia",
//     "show": true,
//     "equipos": [
//         "INGE V6",
//         "INGE V6 Plus",
//         "INGE V9 HD",
//         "Smart Scan",
//         "RKU10",
//         "KX5600",
//         "KX5200",
//         "MSU3",
//         "DCU30"
//     ]
// },
</script>
<style scoped>
.row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem 3rem;
}
.path {
  padding-left: 1rem;
}
.container {
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
}
.subcategorias {
  display: grid;
  row-gap: 1rem;
  grid-auto-rows: auto;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
}
.tab {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 900px) {
}
@media screen and (max-width: 650px) {
  .row {
    padding: 0 1rem;
  }
  .container {
    padding: 0;
  }
}
</style>