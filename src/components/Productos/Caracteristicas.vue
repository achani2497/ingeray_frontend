<template>
    <div class="caracteristicas flex flex-col py-4 w-full h-auto">
        <div class="titulos">
            <titles title="Características" :subtitle="datos.titulo" :fontSize="25"></titles>
        </div>
        <div class="texto-caracteristica simple-text py-4">
            <div class="custom-col-container">
                <div class="custom-col">
                    {{primeraMitad(datos.content)}}
                </div>
                <div class="custom-col">
                    {{segundaMitad(datos.content)}}
                    <img v-if="datos.imagen" :src="getImgSource(datos.imagen)" alt="img-caracteristicas">
                </div>
            </div>            
        </div>
        <button class="contact-outline">Ver Más</button>
    </div>
</template>
<script>
    export default {
        props:['datos'],
        data() {
            return {
                mediaTexto: 0,
            }
        },
        methods: {
            getImgSource: function(imgSrc) {
                return require(`@/assets/images/productos/humanos/${imgSrc}`)
            },
            primeraMitad: function(texto) {
                let textLength = texto.length;
                this.mediaTexto = Math.floor(textLength*0.6);
                return texto.substring(0, this.mediaTexto);
            },
            segundaMitad: function(texto) {
                return texto.substring(this.mediaTexto)
            }
        },
    }
</script>
<style scoped>
.texto-caracteristica{
    text-align: justify;
}
.custom-col-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.custom-col {
    display: flex;
    width: 45%;
    flex-direction: column;
    justify-content: stretch;
}
@media screen and (max-width: 650px){
    .texto-caracteristica{
        column-count: 1;
        text-align: left;
    }
}
</style>