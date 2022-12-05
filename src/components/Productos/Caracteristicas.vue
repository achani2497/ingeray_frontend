<template>
    <div class="caracteristicas flex flex-col py-4 w-full h-auto">
        <div class="titulos">
            <titles title="Características" :subtitle="datos.titulo" :fontSize="25"></titles>
        </div>
        <div class="texto-caracteristica simple-text py-4">
            {{(datos.content)}}
        </div>
        <button class="contact-outline">Ver Más</button>
    </div>
</template>
<script>
    export default {
        props:['datos']
    }
</script>
<style scoped>
.texto-caracteristica{
    column-count: 2;
    text-align: justify;
}
@media screen and (max-width: 650px){
    .texto-caracteristica{
        column-count: 1;
        text-align: left;
    }
}
</style>