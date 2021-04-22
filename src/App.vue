<template>
  <div id="app">
    <resp-nav-bar></resp-nav-bar>
    <e-shop-button></e-shop-button>
    <router-view/>
    <footer-content></footer-content>
  </div>
</template>

<style>
:root{
  --main-color: #0c2d3e;
  --eshop-color: #091E7A;
}
#app{
  background-size: cover;
  height: auto;
  padding-top: 6.5rem;
}
/* @media screen and (max-width: 414px){
  #app{
    padding-top: 0;
    padding-bottom: 7vh;
  }
} */
@media screen and (max-width: 650px){
  #app{
    padding-top: 0;
    padding-bottom: 7vh;
  }
}
</style>