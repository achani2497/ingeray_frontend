<template>
  <product-template>
    <template v-slot:productInfo>
      <!-- Caracteristicas -->
      <caracteristicas :datos="producto.caracteristicas" />
      <!-- Especificaciones -->
      <especificaciones :datos="producto.especificaciones" />
      <!-- Carousel -->
      <div class="carousel-container flex items-center pt-2 mb-8">
        <!-- Control button Left -->
        <button
          class="h-6 w-6 -ml-16 arrow left rounded-full"
          @click="prev()"
        ></button>
        <!-- Carousel Elements -->
        <div class="carousel bg-white">
          <img :src="require(`@/assets/images/productos/humanos/mamo/Cuadro_MAMO_VIOLA_Titulo.jpg`)" alt="carousel-title">
          <div class="overflow-hidden flex mt-10" id="inner-wrapper">
            <div class="inner flex pb-4" ref="inner" :style="innerStyles">
              <div
                class="card-container"
                v-for="(image, index) in producto.carousel"
                :key="index"
              >
                <extended-card
                  :title="image.title"
                  :description="image.description"
                  :imagePath="image.imagePath"
                  :url="image.url"
                  :imageWidth="imgSizeWidth"
                >
                </extended-card>
              </div>
            </div>
          </div>
        </div>
        <!-- Control button right -->
        <button
          class="h-6 w-6 -mr-16 arrow rounded-full"
          @click="next()"
        ></button>
      </div>
      <!-- Algunas diferencias -->
      <div class="diferencias flex flex-col py-4 w-full h-auto">
        <div class="titulos">
          <titles subtitle="Algunas diferencias" :fontSize="25"></titles>
          <titles :title="producto.diferencias.titulo" :fontSize="25"></titles>
        </div>
        <div class="flex flex-row gap-4 responsive-column">
          <div
          class="
          texto-caracteristica
          text-lg
          text-justify
          py-4
          "
          v-html="producto.diferencias.content"
          ></div>
          <div
          class="
          texto-caracteristica
          text-lg
          text-justify
          py-4
          "
          v-html="producto.diferencias.secondCol"
          ></div>
        </div>
      </div>
      <!-- Documentos -->
      <documentos :brochures="producto.brochures" />
    </template>
    <!-- Formulario de contacto -->
    <modal :header="false" v-if="showModal">
      <template #content>
        <contact-form
          @closeModal="showModal = false"
          :producto="producto.nombreCompleto"
        ></contact-form>
      </template>
    </modal>
  </product-template>
</template>
<script>
import { productMixin } from "../../../assets/js/productMixin";
import Caracteristicas from "../Caracteristicas.vue";
import Documentos from "../Documentos.vue";
import Especificaciones from "../Especificaciones.vue";
import GaleriaProductos from "../GaleriaProductos.vue";
import ProductTemplate from "../productTemplate.vue";
import BannerContacto from "../BannerContacto.vue";
import ContactForm from "../../Forms/ContactForm";
import ExtendedCardVue from "../../Home/ExtendedCard.vue";

export default {
  props: ["slug"],
  mixins: [productMixin],
  components: {
    "product-template": ProductTemplate,
    caracteristicas: Caracteristicas,
    documentos: Documentos,
    especificaciones: Especificaciones,
    "galeria-productos": GaleriaProductos,
    "banner-contacto": BannerContacto,
    "contact-form": ContactForm,
    "extended-card": ExtendedCardVue,
  },
  data() {
    return {
      producto: "",
      showModal: false,
      innerStyles: {},
      stepSize: "",
      transitioning: false,
      carouselElements: [],
      imgSizeWidth: 245,
    };
  },
  methods: {
    setStep() {
      this.stepSize = `${this.imgSizeWidth}px`;
    },
    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.carouselElements.shift();
        this.carouselElements.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    prev() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveRight();
      this.afterTransition(() => {
        const card = this.carouselElements.pop();
        this.carouselElements.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.stepSize})
                        translateX(-${this.stepSize})`,
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.stepSize})
                      translateX(-${this.stepSize})`,
      };
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },
    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.stepSize})`,
      };
    },
    getImage(imagePath) {
      return require(`@/assets/images/home/${imagePath}.jpg`);
    },
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
  },
  beforeMount() {
    this.producto = this.getProductEquipment(this.slug);
    this.carouselElements = this.producto.carousel;
  },
};
</script>
<style scoped>
.card-container {
  display: flex;
}
.carousel-container {
  width: 100%;
  height: fit-content;
  position: relative;
}
.carousel {
  width: 100vw;
  overflow: hidden;
}
.inner {
  width: fit-content;
  transition: transform 0.2s;
  gap: 2.25rem;
  height: 650px;
}
.extended-card {
  width: 220px !important;
}
.texto-caracteristica{
  width: 50%;
}
button {
  margin-top: 10px;
  position: absolute;
}
.arrow {
  background-image: url("~@/assets/images/icons/transparentArrow.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(3);
  right: 0;
}
.left {
  transform: rotate(-180deg) scale(3);
  left: 0;
}

@media screen and (max-width: 650px) {
  .responsive-column {
    flex-direction: column;
    gap: 0;
  }
  .texto-caracteristica{
    width: 100%;
  }
}
</style>