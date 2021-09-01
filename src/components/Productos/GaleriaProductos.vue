<template>
    <div class="galeria flex flex-col">
        <div class="titulos">
            <div class="title blue text-3xl xl:text-4xl sm:text-3xl">{{producto}}</div>
            <div class="sub-title blue">Galería</div>
        </div>
        <div class="tipos-imagenes flex mt-6">
            <div class="opcion-imagen" :class="{opcionActiva : showImagenesProd}" @click="showImagenesProd = true">Imágenes del producto</div>
            <div class="opcion-imagen" :class="{opcionActiva : !showImagenesProd}" @click="showImagenesProd = false">Imágenes Clínicas</div>
        </div>
        <div class="imagenes-galeria flex flex-wrap justify-between py-6" v-if="showImagenesProd">
            <div class="imagen">Imagen Prod</div>
            <div class="imagen">Imagen Prod</div>
            <div class="imagen">Imagen Prod</div>
        </div>
        <div class="imagenes-galeria flex flex-wrap justify-between py-6" v-else>
            <div class="imagen">Imagen Clinica</div>
            <div class="imagen">Imagen Clinica</div>
            <div class="imagen">Imagen Clinica</div>
        </div>
        <small class="mb-4">Las imágenes de los equipos son ilustrativas. Póngase en contacto y solicite un presupuesto personalizado para recibir información e imágenes actualizadas</small>
        <button class="contact-outline" @click="showModal = true">Ver Más</button>
        <Modal :header="true" @close="showModal = false" v-if="showModal">
            <template #title> <div class="title blue">Imágenes de los equipos</div> </template>
            <template #content>
                <div class="images-container overflow-y-scroll">
                    <div class="imagenes-galeria-modal py-6">
                        <div class="imagen-modal"></div>
                        <div class="imagen-modal"></div>
                        <div class="imagen-modal"></div>
                        <div class="imagen-modal"></div>
                        <div class="imagen-modal"></div>
                        <div class="imagen-modal"></div>
                        <div class="imagen-modal"></div>
                        <div class="imagen-modal"></div>
                    </div>                
                </div>
            </template>
        </Modal>
    </div>
</template>
<style scoped>
.galeria{
    padding: 1rem 0;
    width: 100%;
    height: auto;
}
.opcion-imagen{
    border-bottom: 2px solid gray;
    padding: 0 1rem;
    text-align: center;
}
.opcionActiva{
    color: #1E6595;
    border-bottom: 4px solid #1E6595;
}
.opcion-imagen, .opcionActiva:hover{
    cursor: pointer;
}
.imagenes-galeria{
    display: grid;
    gap: 1rem;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}
.images-container{
    height: 80vh;
}
.imagenes-galeria-modal{
    width: 80vw;
    padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
}
.imagen{
    background-color: brown;
    height: 200px;
}
.imagen-modal{
    background-color: brown;
    height: 300px;
}
@media screen and (max-width: 650px){
    .opcion-imagen{
        width: 100%
    }
}
</style>
<script>
import Modal from '@/components/Modal/Modal.vue'
export default {
    components:{Modal},
    props:['producto'],
    data(){
        return{
            showImagenesProd: true,
            showModal: false
        }
    }
}
</script>