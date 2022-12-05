<template>
    <div class="flex flex-col gap-12 pb-16">
      <banner-box :bannerName="productBanner">
        <template v-slot:title>
          <slot name="productTitle"></slot>
        </template>
        <template v-slot:stuff>
          <p class="text-justify text-xl" v-html="description"></p>
        </template>
      </banner-box>
      <div class="px-16">
        <slot name="productInfo"></slot>
      </div>
    </div>
  </template>
  
  <script>
  import BannerWithBotVue from "../Common/BannerWithBot.vue";
  
  export default {
    props: ["bannerName", "description"],
    components: { "banner-box": BannerWithBotVue },
    created() {
      console.log(this.$route.path.split("/")[2]);
    },
    computed: {
      productBanner() {
        const productName = this.$route.path.split("/")[2];
        return `${this.$imageCDN}/banner-product-${productName}.jpg`;
      },
    },
  };
  </script>
  
  <style>
  </style>