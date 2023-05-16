<template>
    <div>
        <titles
        title="Seguimos"
        subtitle="Uniendo nuestras fuerzas"
        :fontSize="31"
        ></titles>
        <div class="carousel-container flex justify-center">
            <!-- Control button Left -->
            <button
                class="h-6 w-6 mr-8 arrow left rounded-full self-center"
                @click="prev()"
            ></button>
            <!-- Carousel -->
            <div class="relative flex carousel px-14 justify-center align-center">
                <div class="inner flex flex-wrap" :style="innerStyles" ref="inner">
                    <div class="img-colab flex align-center" v-for="(imagen, index) in datos" :key="index">
                        <img
                            :src="require(`@/assets/images/quienes-somos/colaboradores/${imagen.imagePath}`)"
                            :alt="imagen.imageName">
                    </div>
                </div>
            </div>
            <!-- Control button right -->
            <button class="h-6 w-6 arrow rounded-full self-center" @click="next()"></button>
        </div>
    </div>
</template>
<style>
.img-colab{
    flex-basis: 30%;
    height: 100%;
}
.img-colab img {
    align-self: center;
    width: 100%;
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
    gap: 17px;
    height: 180px;
}
.arrow {
  background-image: url("~@/assets/images/icons/flecha.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: scale(4);
}
.left {
  transform: rotate(-180deg) scale(4);
}
</style>
<script>
export default {
    props:['datos'],
    data() {
        return {
            innerStyles: {},
            stepSize: "",
            transitioning: false,
            carouselElements: this.datos,
        }
    },
    mounted() {
        this.setStep();
        // this.resetTranslate();
    },
    methods: {
        setStep() {
            // aca cambiar los tamaños para que quede bien
          this.stepSize = `30%`;
        },
        next() {//cambiar prev y next para  que corran las imagenes
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
                transform: `translateX(0)`,
            };
        },
    },
}
</script>