<template>
    <div class="row" @open-form="alert('asd')">
        <!-- Info del producto -->
        <div class="producto flex px-4 gap-4 h-auto">
            <div class="producto-imagen">
                <ImageCarousel :elementos="equipos.productos"></ImageCarousel>
            </div>
            <div class="producto-descripcion flex flex-col gap-4">
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
                <div class="descripcion my-4 simple-text gray">
                    {{equipos.descripcion}}
                </div>
                <button class="contact-inge-button" @click="enviarMensajeWhastapp">Quiero que me contacten</button>
            </div>
        </div>
        <!-- Banner de contacto -->
        <div class="banner-contacto bkg-light-gray w-full flex z-10 px-16 py-4">
            <button class="flex w-auto gap-2 items-center" @click="showModal = true">
                <div class="envelope h-10 w-16 bg-yellow-200"></div>
                <div class="flex flex-col text-left">
                    <p class="blue">Contáctenos</p>
                    <p class="blue">sobre este producto</p>
                </div>
            </button>
        </div>
        <div class="info-adicional bkg-light-gray px-12 py-4">
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
    width: 100vw;
}
.producto-imagen{
    height: 100%;
    width: 60%;
}
.producto-descripcion{
    width: 40%;
    height: 100%;
}
.title{
    font-size: 24px;
    letter-spacing: 1px;
    height: 28px;
}
.sub-title{
    font-size: 30px;
    line-height: normal;
    height: fit-content;
}
.simple-text{
    font-size: 22px;
}
.contact-inge-button{
    width: max(14rem, 15vw);
}
.banner-contacto{
    box-shadow: 0px 5px 4px 1px rgba(0,0,0,.25);
}
.info-adicional{
    width: 100vw;
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
import Productos            from '../assets/js/productos.json'
import ContactForm          from '@/components/Forms/ContactForm.vue'
import ImageCarousel        from '@/components/Carousel/ImagesCarousel.vue'
import Galeria              from '@/components/Productos/GaleriaProductos.vue'
import Especificaciones     from '@/components/Productos/Especificaciones.vue'
import Documentos           from '@/components/Productos/Documentos.vue'
import Caracteristicas      from '@/components/Productos/Caracteristicas.vue'
import Vue from 'vue'

var eventBus = new Vue()

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
            productos: Productos.productos,
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
    mounted(){
        eventBus.$on('open-form', () => { //TODO: Ver como hacer para poder escuchar este evento
            console.log('Escuchando la weaaa')
            // this.showModal = true
        })
        // fetch("/productos.json")
        //     .then(r => json())
        //     .then(json => this.productos = json.productos)
    },
    created(){
        const pathSlavon = {
            sectionName: this.equipos.nombreCategoriaGeneral,
            sectionUrl:'/productos'
        }
        this.path.push(pathSlavon)
    },
    beforeDestroy() {
        eventBus.$off('open-form')
    },
    computed:{
        equipos: function(){
            return this.productos.find(prod => prod.nombreCategoria === this.$route.params.categoria)
        }
    }
}
</script>