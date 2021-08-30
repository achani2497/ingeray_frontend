<template>
    <Carousel :elementos="productos"></Carousel>
</template>
<script>
import Carousel from '@/components/Carousel/Carousel.vue'
export default {
	components:{Carousel},
    data: function(){
        return{
            productos:[
				{
					titulo:'Equipamiento de',
					subtitulo:'Radiologia',
					descripcion:`
					Primera visita de Evaluación y Diagnóstico sin costo.
					Contamos con un amplio plantel de técnicos e ingenieros especializados en marcas nacionales e importadas.`,
					// imagen:require('../assets/images/template.png')
					imagen:''
				},
				{
					titulo:'Equipamiento de',
					subtitulo:'Radiologia',					
					descripcion:'Equipos con Fuente de Alta Frecuencia, Media Frecuencia y Aparatologíade Industrial. Periféricos de Sala: Mesas Fijas y de Plano Flotante, Potter Mural, Columnas Portatubo, Espinógrafos. Equipos Rodantes, Arcos en C, Mamógrafos.',
					// imagen:require('../assets/images/template.png')
					imagen:''
				},
				{
					titulo:'Equipamiento de',
					subtitulo:'Radiologia',					
					descripcion:'Equipamiento de Radiología Convencional y Digital, Equipos de Sala y Rodantes, Arcos en C y Mamógrafos.',
					// imagen:require('../assets/images/template.png')
					imagen:''
				},
			]
        }
    }
}
</script>