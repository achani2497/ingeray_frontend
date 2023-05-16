<template>
  <div class="flex flex-col gap-4 justify-between extended-card">
    <div class="flex flex-col gap-4">
      <img :src="image" alt="" class="self-center" width="290" />
      <div class="flex flex-col">
        <titles :subtitle="title" :fontSize="18"></titles>
        <div :class="`flex flex-col flex-wrap ${this.esMamo() ? 'black' : 'blue'}`">
          {{ description }}
        </div>
      </div>
    </div>
    <!-- <button
      v-if="this.soloMamo()"
      class="contact-outline mamo-btn-outline text-center self-start"
      v-on:click="() => this.downloadFile(url)"
      >
      Ver más
    </button> -->
    <a 
      v-if="this.soloMamo()" class="contact-outline mamo-btn-outline text-center self-start" 
      :href="`/documentos/${url}`" 
      download
    >
      Ver más
    </a>
    <router-link v-else :to="url" class="contact-outline text-center self-start">
      Ver más
    </router-link>
  </div>
</template>
<style scoped>
.extended-card {
  width: 290px;
}
</style>
<script>
import {mamoMixin} from '../../assets/js/mamoMixin'
import {downloadsMixin} from '../../assets/js/downloadsMixin'
export default {
  props: ["title", "description", "imagePath", "url"],
  mixins: [mamoMixin, downloadsMixin],
  data: function () {
    return {
      image: require(`@/assets/images/home/${this.imagePath}`),
    };
  },
  watch: {
    imagePath: function (newVal, oldVal) {
      this.image = require(`@/assets/images/home/${newVal}`);
    },
  },
};
</script>