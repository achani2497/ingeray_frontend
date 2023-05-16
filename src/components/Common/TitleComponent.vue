<template>
  <div
    class="title-container flex flex-col"
    :style="`font-size:${fontSize}px!important; color:${
      active ? 'white' : esMamo() ? '#e878a0' : '#0076a5'
    }`"
  >
    <span 
      :class="`title ${inverted ? 'inge-text-bold' : 'inge-text'}`" 
      v-if="title" :style="`font-size:${titleFontSize}px!important;`"
    >
      {{ title }}
    </span>
    <span
      :class="`sub-title ${inverted ? 'inge-text' : 'inge-text-bold'}`"
      :style="`line-height:${lineHeight}px; font-size:${subtitleFontSize}px!important;`"
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
    titleFontSize: {
      type: Number,
      default: function() {
        return this.fontSize;
      },
    },
    subtitleFontSize: {
      type: Number,
      default: function() {
        return this.fontSize;
      }
    },
    active: {
      type: Boolean,
    },
    inverted: {
      type:Boolean,
      default: false,
    },
    lineHeight: {
      type: Number,
      default: 30,
    },
  },
  methods: {
    esMamo: function() {
      var urlActual = window.location.href;
      urlActual = urlActual.split('/');
      urlActual = urlActual[urlActual.length - 1];
      if(urlActual === 'mamografos' || urlActual === 'captores-digitales') {
        return true
      } else {
        return false
      }
    }
  }
};
</script>
<style scoped>
.mamo {
  color: #e878a0;
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