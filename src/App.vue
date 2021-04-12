<template>
  <div id="app">
    <!-- <nav-bar></nav-bar> -->
    <resp-nav-bar></resp-nav-bar>
    <e-shop-button></e-shop-button>
    <router-view/>
  </div>
</template>

<style>
:root{
  --main-color: #0c2d3e;
  --eshop-color: #091E7A;
}
#app{
  /* background: var(--main-color); */
  background: #77A1D3;
  /* background: -webkit-linear-gradient(to right, #77A1D3, #7993cb, #84609b);  
  background: linear-gradient(to right, #77A1D3, #7993cb, #84609b); */
  background-size: cover;
  height: auto;
  padding-top: 6.5rem;
  /* padding-bottom: 2vh; */
}
@media screen and (max-width: 414px){
  #app{
    padding-top: 0;
    padding-bottom: 7vh;
  }
}
</style>
