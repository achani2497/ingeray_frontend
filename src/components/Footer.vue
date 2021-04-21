<template>
    <footer>
        <!-- Medios de pago -->
        <div class="medios-de-pago flex flex-col p-6 text-center">
            <span class="mb-4"> Conocé nuestros medios de pago </span>
            <div class="medios-de-pago flex justify-center items-center gap-12">
                <div class="medio-de-pago" v-for="(pago, index) in mediosDePago" :key="index">
                    <img :src='pago.img' alt="">
                </div>
            </div>
        </div>
        <!-- Divisiones -->
        <div class="divisiones h-16 flex items-center gap-10">
            <span class="active">Diágnostico por Imágenes</span>
            <span>División veterinaria</span>
        </div>
        <!-- Redes sociales -->
        <div class="redes-sociales flex justify-around">
            <div class="redes text-center flex flex-col items-center justify-center text-white">
                <span>Seguinos en Redes Sociales</span>
                <div class="iconos flex justify-center gap-4">
                    <div class="icon facebook-icon"></div>
                    <div class="icon instagram-icon"></div>
                    <div class="icon youtube-icon"></div>
                </div>
            </div>
            <div class="newsletter flex flex-col justify-center items-center text-white">
                <span>Suscribete a nuestro Newsletter</span>
                <div class="big-icon ingeray-icon"></div>
            </div>
            <div class="pais-region flex flex-col justify-center items-center gap-4 text-white">
                <span>Pais - Idioma</span>
                <span>Argentina - Español</span>
            </div>
        </div>
        <!-- Contacto -->
    </footer>
</template>
<style scoped>
.medio-de-pago > img{
  width: 50px;
  height: 40px;
  /* background-image: url('../assets/images/medios-de-pago/visa.svg'); */
  background-size: cover;
  background-repeat: no-repeat;
}
.divisiones{
  color: white;
  background-color: var(--eshop-color);
  padding: 0 6rem;
}
.active{
  font-weight: bold;
  text-decoration: underline;
}
.redes-sociales{
  background-color: var(--eshop-color);
  padding: 0 6rem;
  height: 150px;
}
.redes{
  width: 100%;
} 
.iconos{
  width: 100%;
}
.icon{
  width: 70px!important;
  height: 70px!important;
}
.big-icon{
  width: 100px!important;
  height: 100px!important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.newsletter{
  width: 100%;
}
.pais-region{
  width: 100%;
}
.facebook-icon{
  background-image: url('../assets/images/icons/footerIcons/facebook.svg');
}
.instagram-icon{
  background-image: url('../assets/images/icons/footerIcons/instagram.svg');
}
.youtube-icon{
  background-image: url('../assets/images/icons/footerIcons/youtube.svg');
}
.ingeray-icon{
  background-image: url('../assets/images/icons/footerIcons/ingeray.svg');
}
</style>
<script>
export default{
    data: function(){
        return {
            mediosDePago:[
            {
                nombre: 'visa',
                img:require('@/assets/images/medios-de-pago/visa.svg')
            },
            {
                nombre: 'mastercard',
                img:require('@/assets/images/medios-de-pago/mastercard.svg')
            },
            {
                nombre: 'american-express',
                img:require('@/assets/images/medios-de-pago/american-express.svg')
            },
            {
                nombre: 'cabal',
                img:require('@/assets/images/medios-de-pago/cabal.svg')
            },
            {
                nombre: 'visa-debito',
                img:require('@/assets/images/medios-de-pago/visa-debito.svg')
            },
            {
                nombre: 'maestro',
                img:require('@/assets/images/medios-de-pago/maestro.svg')
            },
            {
                nombre: 'cabal-debito',
                img:require('@/assets/images/medios-de-pago/cabal-debito.svg')
            },
            {
                nombre: 'eCheck',
                img:require('@/assets/images/medios-de-pago/eCheck.svg')
            },
            {
                nombre: 'mercado-pago',
                img:require('@/assets/images/medios-de-pago/mercado-pago.svg')
            },
            ]
        }
    }
}
</script>
