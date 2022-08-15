<template>
  <div class="inge-shadow-down flex flex-col mt-4">
    <!-- <div class="banner" :style="`background-image: ${bannerName}`"></div> -->
    <img :src="bannerName" @load="loaded()" alt="banner-contactos" />
    <div class="banner-content flex flex-col gap-6">
      <div id="banner-section-title">
        <slot name="title"></slot>
      </div>
      <div id="banner-section-stuff">
        <slot name="stuff"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner-box",
  props: ["bannerName"],
  data() {
    return {
      load: false,
    };
  },
  created() {
    console.log(this.bannerName);
  },
  methods: {
    loaded() {
      // TODO: VER QUE HAGO CON ESTO
      console.log(this.load);
      console.log("cargado");
      this.load = true;
      console.log(this.load);
    },
  },
};
</script>

<style>
.banner {
  background-image: var(--image-url);
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: calc((864 / 2872) * 100%);
}
.banner-content {
  padding: 2rem 4rem 4rem;
  background-color: white;
}
@media screen and (max-width: 900px) {
  .banner-content {
    padding: 2rem 3rem;
  }
}
@media screen and (max-width: 650px) {
  .banner-content {
    padding: 1rem;
  }
}
@media screen and (max-width: 414px) {
}
</style>