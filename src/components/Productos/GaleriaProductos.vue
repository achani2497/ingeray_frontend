<template>
    <div class="galeria flex flex-col">
        <div class="titulos">
            <div class="title blue text-3xl xl:text-4xl sm:text-3xl">Equipos Móviles</div>
            <div class="sub-title blue">Galería</div>
        </div>
        <div class="tipos-imagenes flex mt-6">
            <div class="opcion-imagen opcion-activa">Imágenes del producto</div>
            <div class="opcion-imagen">Imágenes Clínicas</div>
        </div>
        <div class="imagenes-galeria flex flex-wrap justify-between py-6">
            <div class="imagen"></div>
            <div class="imagen"></div>
            <div class="imagen"></div>
        </div>
        <small class="mb-4">Las imágenes de los equipos son ilustrativas. Póngase en contacto y solicite un presupuesto personalizado para recibir información e imágenes actualizadas</small>
        <button class="contact-outline">Ver Más</button>
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
.opcion-activa{
    color: blue;
    border-bottom: 4px solid blue;
}
.imagenes-galeria{
    display: grid;
    gap: 1rem;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}
.imagen{
    background-color: brown;
    height: 200px;
}
@media screen and (max-width: 650px){
    .opcion-imagen{
        width: 100%
    }
}
</style>