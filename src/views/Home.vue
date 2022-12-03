<template>
  <div class="flex flex-col flex-wrap gap-20">
    <div class="padding-container flex flex-col gap-16">
      <!-- PRESENTACION -->
      <div class="inge-shadow-down presentation pt-4 bg-white">
        <!-- Banner Principal con imagen de la empresa -->
        <div class="presentation-image"></div>
        <div class="presentation-text">
          <titles
            title="Somos proveedores de Tecnología Médica"
            subtitle="Comprometidos con la salud"
            :fontSize="44"
            :lineHeight="70"
            class="leading-9"
          ></titles>
          <p class="simple-text mt-10">
            Inge Ray SRL es una empresa argentina creada en 1992 y desde
            entonces nos comprometimos y dedicamos a brindar Soluciones
            Tecnológicas para la Salud que permitan a nuestros clientes ofrecer
            una medicina de calidad. Nos especializamos en Equipamiento Médico
            para Diagnóstico por Imágenes tanto para Medicina Humana como para
            Medicina Veterinaria. Fabricamos, comercializamos y alquilamos una
            amplia gama de equipos y periféricos de radiología convencional y
            digital, de mamografía y de ultrasonografía de producción nacional e
            internacional.
          </p>
        </div>
      </div>
      <!-- Carousel "Los mas Buscados" -->
      <polimorfic-carousel
        title="Galeria de Productos"
        subtitle="Los más buscados"
        :isExtended="false"
        :elements="productos"
      ></polimorfic-carousel>
    </div>
    <banner-carousel :elements="banner1"></banner-carousel>
    <div class="padding-container flex flex-col gap-16">
      <!-- Banner de "Contratos de Alquiler de Equipamiento Medico" -->
      <router-link to="/servicios/alquileres">
        <img
          :src="`${this.$imageCDN}/home-banner-alquileres.jpg`"
          alt="banner-alquileres"
        />
      </router-link>
      <!-- Carousel "Prestaciones y Servicios" -->
      <polimorfic-carousel
        title="Conozca más"
        subtitle="Prestaciones y Servicios"
        :isExtended="true"
        :elements="servicios"
      ></polimorfic-carousel>
    </div>
    <banner-carousel :elements="banner2"></banner-carousel>
    <clients :elements="clients" />
    <div class="padding-container flex flex-col gap-16 bkg-light-gray py-10">
      <polimorfic-carousel
        title="Nuestra linea para"
        subtitle="Diagnostico Veterinario"
        :isExtended="false"
        :elements="veterinaria"
      ></polimorfic-carousel>
    </div>
  </div>
</template>

<script>
import PolimorficCarousel from "../components/Carousels/PolimorficCarousel/PolimorficCarousel";
import BannerCarousel from "../components/Carousels/BannerCarousel/BannerCarousel.vue";
import ClientsCarousel from "../components/Carousels/ClientsCarousel/ClientsCarousel.vue";
import carousels from "../assets/js/home.json";

export default {
  components: {
    "polimorfic-carousel": PolimorficCarousel,
    "banner-carousel": BannerCarousel,
    clients: ClientsCarousel,
  },
  data: function () {
    return {
      productos: carousels.productos,
      banner1: carousels.banner1,
      servicios: carousels.servicios,
      banner2: carousels.banner2,
      veterinaria: carousels.veterinaria,
      clients: carousels.clientes,
    };
  },
  mounted: function () {
    this.fadeInElements = Array.from(
      document.getElementsByClassName("fade-in")
    );
    document.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  methods: {
    handleScroll: function (evt) {
      for (var i = 0; i < this.fadeInElements.length; i++) {
        var elem = this.fadeInElements[i];
        var distInView =
          elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
          elem.classList.add("inView");
        } else {
          elem.classList.remove("inView");
        }
      }
    },
  },
};
</script>

<style scoped>
/* Presentacion */
.presentation {
  z-index: 8;
}
.presentation-text {
  padding: 2.5rem 4rem;
  display: flex;
  flex-direction: column;
  text-align: justify;
}
.presentation-image {
  position: relative;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url("../assets/images/banners/banner-principal.svg");
}

/* Media Queries */
@media screen and (max-width: 1000px) {
  .presentation-image {
    height: 440px;
  }
  .presentation-text {
    padding: 2.5rem 6rem;
  }
}
@media screen and (max-width: 900px) {
  .presentation-image {
    height: 270px;
  }
  .presentation-text {
    padding: 1.5rem;
  }
}
@media screen and (max-width: 650px) {
  .presentation {
    padding-top: 0;
  }
  .presentation-image {
    height: 25vh;
  }
  .presentation-text {
    padding: 1rem;
    text-align: justify;
    /* text-align: center; */
  }
}
</style>
