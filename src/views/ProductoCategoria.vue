<template>
    <div class="row">
        <nav-bar :showLocationInfo="true"></nav-bar>
        <div class="product">
            <div class="product-image">
                <image-carousel :elementos="equipos.productos"></image-carousel>
            </div>
            <div class="product-description">
                <!-- Path -->
                <ul class="flex flex-wrap">
                    <li v-for="(slavon, index) in this.path" :key="index">
                        <router-link :to="slavon.sectionUrl" class="flex">{{slavon.sectionName}} <p class="px-2" v-if="index < path.length-1"> > </p> </router-link>
                    </li>
                </ul>
                <!-- Titulos -->
                <div class="titulos">
                    <div class="title blue text-3xl xl:text-4xl sm:text-3xl">
                        {{equipos.nombreCategoriaGeneral}}
                    </div>
                    <div class="sub-title blue">
                        {{equipos.nombreCompleto}}
                    </div>
                </div>
                <!-- Descripcion -->
                <div class="descripcion simple-text gray">
                    {{equipos.descripcion}}
                </div>
                <button class="contact" @click="enviarMensajeWhastapp">Quiero que me contacten</button>
            </div>
        </div>
        <!-- Banner de contacto -->
        <div class="contact-banner py-4 px-24 w-full flex">
            <button class="flex w-auto gap-2 items-center" @click="showModal = true">
                <div class="envelope h-10 w-16 bg-yellow-200"></div>
                <div class="flex flex-col text-left">
                    <p class="blue">Contáctenos</p>
                    <p class="blue">sobre este producto</p>
                </div>
            </button>
        </div>
        <!-- Formulario de contacto -->
        <modal :header="false" v-if="showModal">
            <template #content>
                <contact-form @closeModal="showModal = false" :producto="equipos.nombreCompleto"></contact-form>
            </template>
        </modal>
    </div>
</template>
<style scoped>
.row{
    background: white;
    padding-top: 2rem;
    display: flex;
}
.product{
    display: flex;
    padding: 0 1rem;
    gap: 1rem;
    height: auto;
    width: 100vw;
}
.product-image{
    height: 100%;
    width: 60%;
}
.product-description{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.title{
    font-size: 30px;
    letter-spacing: 1px;
    margin: 0;
}
.sub-title{
    font-size: 30px;
    line-height: normal;
}
.descripcion{
    margin: 1rem 0;
}
.simple-text{
    font-size: 22px;
}
.contact{
    background-color: #0C7F7E;
    color: white;
    height: auto;
    width: max(14rem, 15vw);
    padding: .3rem .8rem;
    border-radius: 5px;
    border: 2px solid gray;
    box-shadow: 4px 4px 8px 2px rgba(0,0,0,.3);
    margin-top: .7rem
}
.contact-banner{
    background-color:#e1e1e1;
    box-shadow: 0px 6px 10px 2px rgba(0,0,0,.3);
}
@media screen and (max-width: 900px){
    .product{
        display: flex;
        flex-direction: column-reverse;
        height: auto;
        gap: 0;
        padding: 0;
    }
    .product-description, .product-image{
        width: 100%;
        height: auto;
    }
    .product-description{
        padding: 0 2rem;
        gap: .5rem;
    }
    .product-image{
        width: 100%;
        padding: 0 .2rem;
    }
    .contact{
        width: max(30%, 30vh);
        z-index: 10;
    }
}
</style>
<script>
import productos from '../assets/js/productos.json'
import ContactForm from '../components/Forms/ContactForm.vue'

export default {
  components: { ContactForm },
    data(){
        return{
            showModal: false,
            path:[
                {
                    sectionName:'Inicio',
                    sectionUrl:'/'
                }, 
                {
                    sectionName:'Productos',
                    sectionUrl:'/productos'
                }
            ],
            productos:productos.productos,
        }
    },
    methods:{
        enviarMensajeWhastapp: function(){

            const from = "54911..."
            var yourMessage = "testeando"

            let message = yourMessage.split(' ').join('%20')

            console.log('https://wa.me/'+ from + '?text=%20' + message)

        },
    },
    created(){
        const pathSlavon = {
            sectionName: this.equipos.nombreCategoriaGeneral,
            sectionUrl:'/productos'
        }
        this.path.push(pathSlavon)
    },
    computed:{
        equipos: function(){
            return this.productos.find(prod => prod.nombreCategoria === this.$route.params.categoria)
        }
    }
}
</script>