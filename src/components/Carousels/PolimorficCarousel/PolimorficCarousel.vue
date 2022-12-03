<template>
  <div class="flex flex-col gap-8">
    <titles :title="title" :subtitle="subtitle" class="px-16"></titles>
    <div class="carousel-container flex items-center">
      <!-- Control button Left -->
      <button
        class="h-6 w-6 mr-8 arrow left rounded-full"
        @click="prev()"
      ></button>
      <!-- Carousel -->
      <div class="carousel px-14">
        <div class="overflow-hidden flex">
          <div class="inner flex gap-4" ref="inner" :style="innerStyles">
            <div
              class="card-container"
              v-for="(image, index) in elements"
              :key="index"
            >
              <mask-redirect-button
                buttonText="Ver producto"
                imageWidth="300"
                :url="image.url"
                :alternateImageName="`home/${image.imagePath}`"
                v-if="!isExtended"
              ></mask-redirect-button>
              <extended-card
                :title="image.title"
                :description="image.description"
                :imagePath="image.imagePath"
                :url="image.url"
                v-else
              >
              </extended-card>
            </div>
          </div>
        </div>
      </div>
      <!-- Control button right -->
      <button class="h-6 w-6 arrow rounded-full" @click="next()"></button>
    </div>
  </div>
</template>
<style scoped >
.card-container {
  width: 275px;
  display: flex;
}
.carousel-container {
  width: 100%;
  position: relative;
}
.carousel {
  width: 100vw;
  overflow: hidden;
}
.inner {
  width: fit-content;
  transition: transform 0.2s;
}
button {
  margin-right: 0px;
  margin-top: 10px;
}
.arrow {
  background-image: url("~@/assets/images/icons/arrow.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(3);
}
.left {
  transform: rotate(-180deg) scale(3);
}
</style>
<script>
import MaskRedirectButtonVue from "../../Common/MaskRedirectButton.vue";
import ExtendedCard from "../../Home/ExtendedCard.vue";

export default {
  props: ["isExtended", "title", "subtitle", "elements"],
  components: {
    "mask-redirect-button": MaskRedirectButtonVue,
    "extended-card": ExtendedCard,
  },
  data() {
    return {
      innerStyles: {},
      stepSize: "",
      stepNumber: "",
      transitioning: false,
      carouselElements: [],
    };
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
  },
  methods: {
    setStep() {
      this.stepSize = `${275 + 16}px`;
      this.stepNumber = 1;
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
        this.stepNumber === this.carouselElements.length
          ? (this.stepNumber = 1)
          : this.stepNumber++;
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
        this.stepNumber === 1
          ? (this.stepNumber = this.carouselElements.length)
          : this.stepNumber--;
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
  created() {
    this.carouselElements = this.elements;
  },
};
</script>