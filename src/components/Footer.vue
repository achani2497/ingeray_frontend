<template>
    <footer>
        <!-- Medios de pago -->
        <div class="medios-de-pago flex flex-col text-center">
            <span class="my-4"> Conocé nuestros medios de pago </span>
            <div class="flex flex-wrap justify-center items-center gap-1">
                <div class="medio-de-pago" v-for="(pago, index) in mediosDePago" :key="index">
                    <img :src='pago.img' alt="">
                </div>
            </div>
        </div>
        <!-- Divisiones -->
        <div class="divisiones h-16 flex justify-start items-center gap-10">
            <span class="active w-3/6 md:w-auto">Diagnóstico por Imágenes</span>
            <span class="w-3/6 md:w-auto">División veterinaria</span>
        </div>
        <!-- Redes sociales -->
        <div class="redes-sociales flex justify-between items-center text-white">
            <div class="redes flex flex-col">
                <span>Seguinos en Redes Sociales</span>
                <div class="iconos flex justify-between">
                    <div class="icon facebook-icon-hum"></div>
                    <div class="icon instagram-icon-hum"></div>
                    <div class="icon youtube-icon-hum"></div>
                </div>
            </div>
            <div class="newsletter flex flex-col items-center">
                <button class="contact">Suscribase a nuestro Newsletter</button>
                <!-- <div class="big-icon ingeray-icon-hum"></div> -->
            </div>
            <div class="pais-region flex flex-col items-start gap-4">
                <span>Pais - Idioma</span>
                <span>Argentina > Español</span>
            </div>
        </div>
        <!-- Contacto -->
        <div class="contacto flex justify-between">
          <div class="col1">
            <strong>Contacto</strong>
            <p>
              ¿Necesitás más información? Completá el formulario y nos comunicaremos contigo lo más pronto posible.
            </p>
          </div>
          <div class="col2">
            <button class="contact">
              Quiero que me contacten
            </button>
          </div>
        </div>
    </footer>
</template>
<style scoped>
/* MEDIOS DE PAGO */
  .medios-de-pago{
    padding: .5rem 1.5rem;
    background-color: #e1e1e1;
  }
  .medio-de-pago > img{
    width: 80px;
    height: 60px;
    background-size: contain;
    background-repeat: no-repeat;
  }
/* DIVISIONES */
  .divisiones{
    color: white;
    background-color: #0A1F42;
    padding: 0 6rem;
  }
  .active{
    font-weight: bold;
    text-decoration: underline;
  }
/* REDES SOCIALES */
  .redes-sociales{
    background-color: #7A9AC7;
    padding: 0 6rem;
    height: 150px;
  }
  .redes{
    width: 20%;
    text-align: center;
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
    width: 60%;
  }
  .pais-region{
    width: 20%;
  }
  /* HUMANOS */
    .facebook-icon-hum{
      background-image: url('../assets/images/icons/footerIcons/humanos/facebook.svg');
    }
    .instagram-icon-hum{
      background-image: url('../assets/images/icons/footerIcons/humanos/instagram.svg');
    }
    .youtube-icon-hum{
      background-image: url('../assets/images/icons/footerIcons/humanos/youtube.svg');
    }
    .ingeray-icon-hum{
      background-image: url('../assets/images/icons/footerIcons/humanos/ingeray.svg');
    }
  /* VETERINARIA */
    .facebook-icon-vet{
      background-image: url('../assets/images/icons/footerIcons/veterinaria/facebook.svg');
    }
    .instagram-icon-vet{
      background-image: url('../assets/images/icons/footerIcons/veterinaria/instagram.svg');
    }
    .youtube-icon-vet{
      background-image: url('../assets/images/icons/footerIcons/veterinaria/youtube.svg');
    }
    .ingeray-icon-vet{
      background-image: url('../assets/images/icons/footerIcons/veterinaria/ingeray.svg');
    }

/* CONTACTO */
  .contacto{
    background-color: #0A1F42;
    color: white;
    padding: 3rem 6rem;
    height: 300px;
  }
  .col1{
    width: 31%;
    text-align: justify;
  }
  .contact{
    background-color: #0C7F7E;
    height: auto;
    width: auto;
    padding: .3rem .8rem;
    border-radius: 5px;
    border: 2px solid gray
  }
@media screen and (max-width: 900px){
  .prods-services{
    padding: 2rem 2rem;
	}
  .divisiones, .redes-sociales, .contacto{
    padding: 2rem;
  }
  .divisiones{
    gap: 0;
    justify-content: space-around;
    /* text-align: center; */
  }
  .redes, .newsletter{
    width: 35%;
  }
  .pais-region{
    widows: 30%;
  }
  .contacto{
    height: 200px;
  }
  .col1, .col2{
    width: 50%;
  }
  .col2{
    padding: 0 1rem;
  }
  .contact{
    width: 100%;
  }
}
@media screen and (max-width: 650px){
	.presentation-text{
		padding: 1rem 3rem 4rem 3rem;
	}
	.prods-services{
		padding: 2rem 3rem;
	}
  .medio-de-pago > img{
    width: 3.7rem;
    height: 50px;
  }
  .divisiones{
    padding: 0 1rem;
    text-align: center;
  }
  .redes-sociales{
    height: auto;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
  .redes, .newsletter, .pais-region{
    width: 100%;
  }
  .iconos{
    justify-content: center;
    gap: 2rem;
  }
  .pais-region{
    gap: 0;
  }
  .contacto{
    height: auto;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
  .col1{
    width: 100%;
  }
  .contact{
    width: 100%;
  }
}
@media screen and (max-width: 615px){
}
@media screen and (max-width: 414px){
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
