<template>
  <div class="flex flex-col gap-12 pb-16">
    <banner-box :bannerName="serviceBanner" :ponerSobre="true">
      <template v-slot:title>
        <slot name="serviceTitle"></slot>
      </template>
      <template v-slot:stuff>
        <p class="text-justify text-xl" v-html="description"></p>
      </template>
    </banner-box>
    <div class="px-16">
      <div class="pb-4">
        <path-route></path-route>
      </div>
      <slot name="serviceInfo"></slot>
    </div>
  </div>
</template>

<script>
import BannerWithBotVue from "../Common/BannerWithBot.vue";
import PathRoute from "../Common/PathRoute.vue";
import Sobrecito from '../Common/Sobrecito.vue'

export default {
  props: ["bannerName", "description",'slug'],
  components: { 
    "banner-box": BannerWithBotVue,
    'path-route':PathRoute, 
    'sobrecito': Sobrecito,
  },
  computed: {
    serviceBanner() {
      const serviceName = this.$route.path.split("/")[2];
      // return `${this.$imageCDN}/banner-servicio-${serviceName}.jpg`;
      return `${this.$imageCDN}/${this.bannerName}`;
    },
  },
};
</script>

<style>
</style>