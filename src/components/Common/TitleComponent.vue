<template>
  <div
    class="title-container flex flex-col"
    :style="`font-size:${fontSize}px!important; color:${
      active ? 'white' : '#0076a5'
    }`"
  >
    <span class="title" v-if="title"> {{ title }} </span>
    <span
      class="sub-title"
      :style="`line-height:${lineHeight}px`"
      v-if="subtitle"
    >
      {{ subtitle }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    fontSize: {
      type: Number,
    },
    active: {
      type: Boolean,
    },
    lineHeight: {
      type: Number,
      default: 30,
    },
  },
};
</script>
<style scoped>
.sub-title {
  font-family: "IngeTextBold", Arial, Helvetica, sans-serif;
}
.title,
.sub-title {
  text-align: left;
}
@media screen and (max-width: 1440px) {
  .title-container {
    font-size: 30px !important;
  }
}
@media screen and (max-width: 900px) {
  .title-container {
    font-size: 25px !important;
  }
}
@media screen and (max-width: 414px) {
  .title-container {
    font-size: 20px !important;
  }
  .title,
  .sub-title {
    text-align: left;
    line-height: 20px;
  }
}
</style>