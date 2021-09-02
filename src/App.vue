<template>
  <div id="app">
    <nav-bar></nav-bar>
    <resp-nav-bar></resp-nav-bar>
    <router-view/>
    <FooterContent></FooterContent>
  </div>
</template>

<style>
:root{
  --light-lilac:#D2DDEB;
  --lilac: #9FB3E3;
  --dark-lilac: #7A9AC7; 
  --bluish-green: #0C7F7E;
  --dark-bluish-green: #1E6595;
  --blue: #112576;
  --dark-blue: #0A1F42;
  /* --eshop-color: #102476; */
  --eshop-color: #092146;
  --gray: #677A8B;
  --dark-gray:#4f4f4f;
  --light-gray: #e1e1e1;
}
#app{
  background-size: cover;
  height: auto;
  padding-top: 8rem;
}
/* Fuentes */
  .inge-text{
    font-family: 'IngeText', Arial, Helvetica, sans-serif;
  }
  .inge-text-bold{
    font-family: 'IngeTextBold', Arial, Helvetica, sans-serif;
  }
/* Colores de texto */
  .blue{
    color: var(--dark-bluish-green);
  }
  .light-blue{
    color: var(--lilac);
  }
  .gray{
    color: var(--gray);
  }
/* Colores de fondos */
  .bkg-light-blue{
    background-color: var(--dark-lilac);
  }
  .bkg-blue{
    background-color: var(--blue);
  }
  .bkg-dark-blue{
    background-color: var(--dark-blue);
  }
  .bkg-light-gray{
    background-color: var(--light-gray);
  }
/* Boton */
  .contact-inge-button{
    background-color: var(--bluish-green);
    color: white;
    height: auto;
    width: auto;
    padding: .3rem .8rem;
    border-radius: 5px;
    border: 2px solid gray;
    box-shadow: 4px 4px 8px 2px rgba(0,0,0,.3);
  }
  .inge-button{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    box-shadow: 0 3px 5px 2px rgba(0,0,0,.4);
    border-radius: 25px;
    text-align: center;
    padding: 10px;
    height: 4vh;
    width: 70%;
    overflow: hidden;
    transition: all .4s ease-in-out;
  }
  .inge-button::before{
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    z-index: -1;
    background-color: rgba(57, 86, 105, .7);
    transition: all .4s ease-in-out;
  }
  .inge-button:hover{
    color: white;
  }
  .inge-button:hover::before{
    transform: translateX(0)
  }
  .contact-outline{
    border:2px solid var(--bluish-green);
    color: var(--bluish-green);
    height: auto;
    width: auto;
    min-width: 130px;
    padding: .3rem .8rem;
    border-radius: 5px;
    align-self: flex-end;
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