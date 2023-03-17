<template>
  <div class="carousel-container flex flex-col gap-4">
    <div class="carousel relative">
      <div class="inner flex items-center">
        <img
          v-for="(img, index) in carouselImages"
          :key="index"
          ref="equipment_image"
          :src="getImgUrl(index)"
          :alt="img"
          class="hidden"
          :id="`car-img-${index}`"
        />
      </div>
    </div>
    <div class="flex gap-4 justify-center mb-4" id="carousel-dots">
      <div
        class="circle rounded-full h-3 w-3 bg-gray-400 carousel-btn"
        :class="[index === imgActual ? 'green-dot' : 'gray-dot']"
        v-for="(card, index) in carouselImages"
        :key="index"
        @click="mostrarImg(index)"
      ></div>
    </div>
  </div>
</template>
<style scoped>
.carousel-container {
  width: fit-content;
}
.carousel {
  width: 500px;
  overflow: hidden;
}
.inner {
  white-space: nowrap;
  width: fit-content;
  z-index: 2;
}
.control-buttons {
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  top: 50%;
  width: 100%;
  z-index: 10;
}
#carousel-dots {
  max-width: 500px;
  flex-wrap: wrap;
}
button {
  margin-right: 5px;
  margin-top: 10px;
}
.gray-dot {
  background-color: #cacaca;
}
.green-dot {
  background-color: #669193;
}
.inner {
  transition: transform 0.2s;
}
.arrow {
  /* background-image: url("~@/assets/images/icons/arrow.svg"); */
  background-image: url("~@/assets/images/icons/arrow.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(3);
}
.left {
  transform: rotate(-180deg) scale(3);
}
.carousel-btn:hover {
  cursor: pointer;
}
.active-img {
  display: block;
}
</style>
<script>
import { serviceMixin } from "../../../assets/js/serviceMixin";
import { productMixin } from "../../../assets/js/productMixin";

export default {
  name: "arrowles-carousel",
  props: ["product_name", "product_type"],
  mixins: [serviceMixin, productMixin],
  data() {
    return {
      cards: [8, 1, 2, 3, 4, 5, 6, 7],
      carouselImages: [],
      imagesPath: "",
      imgActual: 0,
    };
  },
  mounted() {
    this.mostrarImg();
  },
  watch: {
    product_name: {
      handler(newValue) {
        this.setCarouselImages();
      },
    },
  },
  methods: {
    setCarouselImages() {
      switch (this.product_type.toString()) {
        case "services":
          this.imagesPath = "servicios/alquiler/carousel";
          this.carouselImages = this.getRentCarouselImages(this.product_name);
          break;
        case "human":
          this.imagesPath = "productos/humanos/carousel";
          this.carouselImages = this.getHumCarouselImages(this.product_name);
          break;
        default:
          this.imagesPath = "productos/veterinaria/carousel";
          this.carouselImages = this.getVetCarouselImages(this.product_name);
          break;
      }
    },
    mostrarImg(indice = 0) {
      this.imgActual = indice;
      for (let index = 0; index < this.carouselImages.length; index++) {
        let paraBorrar = document.getElementById(`car-img-${index}`);
        paraBorrar.classList.remove('active-img');
      }
      let aMostrar = document.getElementById(`car-img-${indice}`);
      aMostrar.classList.add('active-img');
    },
    getImgUrl(indice) {
      // console.log(`@/assets/images/${this.imagesPath}/${this.carouselImages[indice]}`)
      return require(`@/assets/images/${this.imagesPath}/${this.carouselImages[indice]}`);
    }
  },
  created() {
    this.setCarouselImages();
  },
};
</script>