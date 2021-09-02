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
        <div class="divisiones h-16 flex justify-start items-center gap-10 text-white" :class="backgroundColor">
            <span class="active w-3/6 md:w-auto"><button @click="mostrar='humanos'" :class="{active: mostrar==='humanos'}">Diagnóstico por Imágenes</button></span>
            <span class="w-3/6 md:w-auto"><button @click="mostrar='animales'" :class="{active: mostrar==='animales'}">División veterinaria</button></span>
        </div>
        <!-- Redes sociales -->
        <div class="redes-sociales flex justify-between items-center text-white" :class="backgroundColorSocial">
            <div class="redes flex flex-col text-left">
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
                    <a class="icon shop-icon-vet" href="https://ingeraysrl.mercadoshops.com.ar/"></a>
                </div>
            </div>
            <div class="newsletter flex flex-col items-center">
                <button class="contact-inge-button" @click="showModal = true ; showNewsletterForm = true">Suscribase a nuestro Newsletter</button>
            </div>
            <div class="pais-region flex flex-col items-start gap-4">
                <span>Pais - Idioma</span>
                <span>Argentina > Español</span>
            </div>
            <!-- Modal Newsletter Form -->
            <Modal v-if="showNewsletterForm" @close="showNewsletterForm = false" :header="true">
              <!-- Titulo del modal -->
              <template #title> Suscripción a Newsletter </template>
              <!-- Body y Footer del modal -->
              <template #content>
                <NewsletterForm></NewsletterForm>
              </template>
            </Modal>
        </div>
        <!-- Contacto -->
        <div class="contacto flex justify-between flex-wrap text-white" :class="backgroundColor">
          <div class="col1 text-justify">
            <strong>Contacto</strong>
            <p>
              ¿Necesitás más información? Completá el formulario y nos comunicaremos contigo lo más pronto posible.
            </p>
          </div>
          <div class="col2">
            <button class="contact-inge-button" @click="abrirFormularioContacto(); showNewsletterForm = !showNewsletterForm"> Quiero que me contacten </button>
          </div>
          <div class="col3 flex flex-col justify-center w-full">
            <div class="sub-col1 flex text-xl">
              <router-link to="/quienes-somos">Quiénes Somos</router-link> 
              <div class="separador">|</div> 
              <button type="button" @click="showAvisoLegalModal = true">Aviso Legal</button> 
              <div class="separador">|</div> 
              <button type="button" @click="showPDPrivacidad = true">Políticas de Privacidad</button>  
              <div class="separador">|</div> 
              <router-link to="/contacto">Contacto</router-link>
            </div>
            <div class="sub-col2 flex justify-between pt-4 text-md">
              <p>© Inge Ray S.R.L., 2021. Todos los derechos reservados.</p>
              <p>
                <strong>Desarrollo Web</strong> Alejandro Chañi
              </p>
            </div>
          </div>
          <Modal :header="true" v-if="showAvisoLegalModal" @close="showAvisoLegalModal = false">
            <template #title> <div class="title blue">Aviso Legal</div> </template>
            <template #content>
              <div class="legal-container overflow-y-scroll">
                <div class="simple-text p-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem tempore sequi doloribus nesciunt ipsum at culpa. Iure asperiores possimus voluptatibus, debitis, aspernatur doloremque quia sit dolorem cum explicabo architecto provident incidunt consequuntur similique tenetur ea impedit, eligendi quasi iusto aliquam. Eaque ducimus ut similique reprehenderit modi iure fugit inventore velit officia! Molestias, impedit. Explicabo sunt voluptates laboriosam debitis provident autem consectetur, cum id harum possimus repellendus nihil natus accusamus voluptas facere quos facilis molestiae ab eum, tempora, fugit quas eveniet placeat. A modi facilis excepturi nam libero fuga accusamus, laborum quibusdam dolor consequatur, laudantium nostrum eaque debitis aspernatur suscipit id.
                </div>
              </div>
            </template>
          </Modal>
          <Modal :header="true" v-if="showPDPrivacidad" @close="showPDPrivacidad = false">
            <template #title> <div class="title blue">Políticas de Privacidad</div> </template>
            <template #content>
              <div class="legal-container overflow-y-scroll">
                <div class="simple-text p-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem tempore sequi doloribus nesciunt ipsum at culpa. Iure asperiores possimus voluptatibus, debitis, aspernatur doloremque quia sit dolorem cum explicabo architecto provident incidunt consequuntur similique tenetur ea impedit, eligendi quasi iusto aliquam. Eaque ducimus ut similique reprehenderit modi iure fugit inventore velit officia! Molestias, impedit. Explicabo sunt voluptates laboriosam debitis provident autem consectetur, cum id harum possimus repellendus nihil natus accusamus voluptas facere quos facilis molestiae ab eum, tempora, fugit quas eveniet placeat. A modi facilis excepturi nam libero fuga accusamus, laborum quibusdam dolor consequatur, laudantium nostrum eaque debitis aspernatur suscipit id.
                </div>
              </div>
            </template>
          </Modal>
        </div>
    </footer>
</template>
<style scoped>
/* MEDIOS DE PAGO */
  .medios-de-pago{
    padding: .5rem 1.5rem;
    background-color: var(--light-gray);
  }
  .medio-de-pago > img{
    width: 80px;
    height: 60px;
    background-size: contain;
    background-repeat: no-repeat;
  }
/* DIVISIONES */
  .divisiones{
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
    width: 210px;
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
    width: 210px;
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
    padding: 3rem 6rem;
    height: 300px;
  }
  .col1{
    width: 31%;
  }
  .separador{
    padding: 0 10px
  }
  .legal-container{
    height: 80vh;
    width: 80vw;
  }
@media screen and (max-width: 900px){
  .prods-services, .divisiones, .redes-sociales, .contacto{
    padding: 2rem;
  }
  .divisiones{
    gap: 0;
    justify-content: space-around;
  }
  .redes-sociales{
    gap: 1rem;
  }
  .newsletter{
    width: 40%;
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
import NewsletterForm from '@/components/Modal/NewsletterSuscribe.vue'
import Modal from './Modal/Modal.vue'
import Vue from 'vue'

var eventBus = new Vue()

export default{
  components: {NewsletterForm, Modal},
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
            showNewsletterForm: false,
            showAvisoLegalModal: false,
            showPDPrivacidad: false
        }
    },
    methods:{
      abrirFormularioContacto(){
        eventBus.$emit('open-form')//TODO: Ver cómo hacer para que se pueda escuchar este evento en ProductoCategoria.
      },
      seMuestraParaHumanos(){
        return this.mostrar === 'humanos'
      }
    },
    computed:{
      backgroundColor(){
        return this.seMuestraParaHumanos() ? 'bkg-dark-blue' : 'bkg-light-blue'
      },
      backgroundColorSocial(){
        return this.seMuestraParaHumanos() ? 'bkg-light-blue' : 'bkg-blue'
      }
    }
}
</script>
