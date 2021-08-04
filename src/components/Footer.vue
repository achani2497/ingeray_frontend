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
        <div class="divisiones h-16 flex justify-start items-center gap-10" :class="[mostrar==='humanos' ? 'bkg-dark-blue' : 'bkg-light-blue']">
            <span class="active w-3/6 md:w-auto"><button @click="mostrar='humanos'" :class="{active: mostrar==='humanos'}">Diagnóstico por Imágenes</button></span>
            <span class="w-3/6 md:w-auto"><button @click="mostrar='animales'" :class="{active: mostrar==='animales'}">División veterinaria</button></span>
        </div>
        <!-- Redes sociales -->
        <div class="redes-sociales flex justify-between items-center text-white" :class="[mostrar==='humanos' ? 'bkg-light-blue' : 'bkg-blue']">
            <div class="redes flex flex-col">
                <span>Seguinos en Redes Sociales</span>
                <div class="iconos flex justify-between" v-if="mostrar==='humanos'">
                    <div class="icon facebook-icon-hum"></div>
                    <a class="icon instagram-icon-hum" href="https://www.instagram.com/p/CMK8U71DnXq/"></a>
                    <div class="icon youtube-icon-hum"></div>
                </div>
                <div class="iconos-vet flex justify-between" v-else>
                    <a class="icon facebook-icon-vet" href="https://www.facebook.com/IngeRayVET"></a>
                    <a class="icon instagram-icon-vet" href="https://www.instagram.com/inge_ray_vet/"></a>
                    <a class="icon youtube-icon-vet" href="https://www.youtube.com/channel/UCmPvf69gHGonIM2fglmhBig"></a>
                    <div class="icon shop-icon-vet" href="https://ingeraysrl.mercadoshops.com.ar/"></div>
                </div>
            </div>
            <div class="newsletter flex flex-col items-center">
                <button class="contact" @click="showModal = true ; showNewsletterForm = true">Suscribase a nuestro Newsletter</button>
            </div>
            <div class="pais-region flex flex-col items-start gap-4">
                <span>Pais - Idioma</span>
                <span>Argentina > Español</span>
            </div>
            <!-- Modal -->
            <modal v-if="showModal" @close="showModal = false">
              <!-- Titulo del modal -->
              <template #title v-if="showNewsletterForm"> Suscripción a Newsletter </template>
              <template #title v-else>Formulario de Contacto </template>
              <!-- Body y Footer del modal -->
              <template #content v-if="showNewsletterForm">
                <newsletter-form @close="showModal = false"></newsletter-form>
              </template>
              <template #content v-else>
                <contact-form></contact-form>
              </template>
            </modal>
        </div>
        <!-- Contacto -->
        <div class="contacto flex justify-between" :class="[mostrar==='humanos' ? 'bkg-dark-blue' : 'bkg-light-blue']">
          <div class="col1">
            <strong>Contacto</strong>
            <p>
              ¿Necesitás más información? Completá el formulario y nos comunicaremos contigo lo más pronto posible.
            </p>
          </div>
          <div class="col2">
            <button class="contact" @click="showModal = true ; showNewsletterForm = !showNewsletterForm"> Quiero que me contacten </button>
          </div>
          <div class="col3">
            <div class="sub-col1">
              <a href="/">Quiénes Somos</a> <div class="separador">|</div> <a href="/">Aviso Legal</a> <div class="separador">|</div> <a href="/">Políticas de Privacidad</a>  <div class="separador">|</div> <a href="/">Contacto</a>
            </div>
            <div class="sub-col2">
              <p>© Inge Ray S.R.L., 2021. Todos los derechos reservados.</p>
              <p>
                <strong>Desarrollo Web</strong> Alejandro Chañi
              </p>
            </div>
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
    padding: 0 6rem;
  }
  .active{
    font-weight: bolder;
    text-decoration: underline;
    outline: none;
  }
  .active:active{
    background: none;
  }
/* REDES SOCIALES */
  .redes-sociales{
    padding: 0 6rem;
    height: 150px;
  }
  .redes{
    width: 20%;
    min-width: 210px;
    max-width: 210px;
    text-align: left;
  } 
  .iconos, .iconos-vet{
    padding: 5px 10px 0 0px;
  }
  .icon{
    width: 50px!important;
    height: 50px!important;
    transform: scale(1.3);
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
    width: 17%;
    min-width: 210px;
    max-width: 210px;
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
    .shop-icon-vet{
      background-image: url('../assets/images/icons/footerIcons/veterinaria/carrito.svg');
    }

/* CONTACTO */
  .contacto{
    color: white;
    padding: 3rem 6rem;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
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
  .col3{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .sub-col1{
    display: flex;
    font-size: 20px;
  }
  .separador{
    padding: 0 10px
  }
  .sub-col2{
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    font-size: 15px;
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
  .redes-sociales{
    gap: 1rem;
  }
  .redes, .newsletter{
    width: 40%;
  }
  .pais-region{
    min-width: 150px;
  }
  .contacto{
    height: 230px;

  }
  .col1, .col2{
    width: 45%;
  }
  .col2{
    padding: 0 1rem;
  }
  .col3{
    padding-top: 20px;
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
    gap: 1.5rem;
  }
  .pais-region{
    gap: 0;
    align-items: center;
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
  .col2{
    width: 100%;
    padding: 0;
  }
  .col3{
    text-align: center;
  }
  .sub-col1{
    display: flex;
    justify-content: center;
    font-size: 15px;
  }
  .separador{
    padding: 0 2px;
  }
  .sub-col1 a{
    /* background: chocolate; */
    padding: 0 5px;
  }
  .sub-col2{
    flex-direction: column;
    row-gap: 1rem;
  }
}
</style>
<script>
export default{
    data: function(){
        return {
            mostrar:'humanos',
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
            ],
            showModal: false,
            showNewsletterForm: true
        }
    }
}
</script>
