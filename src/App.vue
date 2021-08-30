<template>
  <div id="app">
    <resp-nav-bar></resp-nav-bar>
    <router-view/>
    <FooterContent></FooterContent>
  </div>
</template>

<style>
:root{
  --main-color: #0c2d3e;
  /* --eshop-color: #102476; */
  --eshop-color: #092146;
}
#app{
  background-size: cover;
  height: auto;
  padding-top: 8rem;
}
@media screen and (max-width: 650px){
  #app{
    padding-top: 0;
    padding-bottom: 5vh;
  }
}
</style>
<script>
import FooterContent from "@/components/Footer.vue";
export default {
  components:{FooterContent}
}
</script>