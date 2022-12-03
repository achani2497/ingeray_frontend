<template>
  <div class="flex flex-col gap-4 extended-card">
    <img :src="image" alt="" class="self-center" />
    <div class="flex flex-col">
      <titles :subtitle="title" :fontSize="18"></titles>
      <div class="flex flex-col flex-wrap blue">
        {{ description }}
      </div>
    </div>
    <router-link :to="url" class="contact-outline text-center"
      >Ver más</router-link
    >
  </div>
</template>
<style scoped>
.extended-card {
  width: 260px;
}
</style>
<script>
export default {
  props: ["title", "description", "imagePath", "url"],
  data: function () {
    return {
      image: require(`@/assets/images/home/${this.imagePath}`),
    };
  },
};
</script>