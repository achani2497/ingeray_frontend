<template>
    <div class="flex flex-col gap-12 pb-16">
      <onlybot-box :bannerName="productBanner">
        <template v-slot:title>
          <slot name="productTitle"></slot>
        </template>
        <template v-slot:stuff>
          <p class="text-justify text-xl" v-html="description"></p>
        </template>
      </onlybot-box>
      <div class="px-16">
        <slot name="productInfo"></slot>
      </div>
    </div>
  </template>
  
  <script>
  import OnlyBot from "../Common/OnlyBot.vue";
  
  export default {
    props: ["bannerName", "description"],
    components: { "onlybot-box": OnlyBot },
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