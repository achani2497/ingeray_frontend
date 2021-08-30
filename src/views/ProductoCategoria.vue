<template>
    <div class="row">
        <nav-bar :showLocationInfo="true"></nav-bar>
        <!-- Info del producto -->
        <div class="producto">
            <div class="producto-imagen">
                <ImageCarousel :elementos="equipos.productos"></ImageCarousel>
            </div>
            <div class="producto-descripcion">
                <!-- Path -->
                <ul class="flex flex-wrap">
                    <li v-for="(slavon, index) in this.path" :key="index">
                        <router-link :to="slavon.sectionUrl" class="flex blue">{{slavon.sectionName}} <p class="px-2 text-black" v-if="index < path.length-1"> > </p> </router-link>
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
        <div class="banner-contacto w-full flex">
            <button class="flex w-auto gap-2 items-center" @click="showModal = true">
                <div class="envelope h-10 w-16 bg-yellow-200"></div>
                <div class="flex flex-col text-left">
                    <p class="blue">Contáctenos</p>
                    <p class="blue">sobre este producto</p>
                </div>
            </button>
        </div>
        <div class="info-adicional">
            <!-- Galeria de Imagenes -->
            <Galeria :producto="equipos.nombreCompleto" />
            <!-- Caracteristicas -->
            <Caracteristicas/>
            <!-- Especificaciones -->
            <Especificaciones/>
            <!-- Documentos -->
            <Documentos/>
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
.producto{
    display: flex;
    padding: 0 1rem;
    gap: 1rem;
    height: auto;
    width: 100vw;
}
.producto-imagen{
    height: 100%;
    width: 60%;
}
.producto-descripcion{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.title{
    font-size: 23px;
    letter-spacing: 1px;
    margin: 0;
    height: 28px;
    display: flex;
}
.sub-title{
    font-size: 30px;
    line-height: normal;
    height: fit-content;
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
.banner-contacto{
    background-color:#e1e1e1;
    box-shadow: 0px 5px 4px 1px rgba(0,0,0,.25);
    padding: 1rem 4rem;
    z-index: 10;
}
.info-adicional{
    width: 100vw;
    background-color:#e1e1e1;
    padding: 1rem 3rem;
}

@media screen and (min-width: 1400px) {
    .producto-imagen{
        height: 100%;
        width: 45%;
    }
    .producto-descripcion{
        width: 55%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
@media screen and (max-width: 900px){
    .producto{
        display: flex;
        flex-direction: column-reverse;
        height: auto;
        gap: 0;
        padding: 0;
    }
    .producto-descripcion, .producto-imagen{
        width: 100%;
        height: auto;
    }
    .producto-descripcion{
        padding: 0 2rem;
        gap: .5rem;
    }
    .producto-imagen{
        width: 100%;
        padding: 0 .2rem;
    }
    .contact{
        width: max(30%, 30vh);
        align-self: center;
    }
    .banner-contacto{
        padding: 1rem 3rem;
    }
    .info-adicional{
        padding: 1rem 2rem 0;
    }
}
@media screen and (max-width: 650px){
    .contact-outline{
        align-self: center;
    }
}
</style>
<script>
import productos            from '../assets/js/productos.json'
import ContactForm          from '@/components/Forms/ContactForm.vue'
import ImageCarousel        from '@/components/Carousel/ImagesCarousel.vue'
import Galeria              from '@/components/Productos/GaleriaProductos.vue'
import Especificaciones     from '@/components/Productos/Especificaciones.vue'
import Documentos           from '@/components/Productos/Documentos.vue'
import Caracteristicas      from '@/components/Productos/Caracteristicas.vue'

export default {
  components: { ContactForm, ImageCarousel, Galeria, Especificaciones, Documentos, Caracteristicas },
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