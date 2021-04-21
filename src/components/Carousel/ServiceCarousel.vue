<template>
    <carousel :elementos="servicios"></carousel>
</template>
<script>
export default {
    data: function(){
        return{
            servicios:[
				{
					titulo:'Asistencia y Servicio Técnico de Equipamiento de Diagnóstico Médico',
					descripcion:`
					PRIMERA VISITA DE EVALUACIÓN Y DIAGNÓSTICO SIN COSTO.
					Contamos con un amplio plantel de técnicos e ingenieros especializados en marcas nacionales e importadas.`,
					// imagen:require('../assets/images/template.png')
					imagen:''
				},
				{
					titulo:'Gran variedad de equipamiento de Radiologia Convencional y Digital',
					descripcion:'Equipos con Fuente de Alta Frecuencia, Media Frecuencia y Aparatologíade Industrial. Periféricos de Sala: Mesas Fijas y de Plano Flotante, Potter Mural, Columnas Portatubo, Espinógrafos. Equipos Rodantes, Arcos en C, Mamógrafos.',
					// imagen:require('../assets/images/template.png')
					imagen:''
				},
				{
					titulo:'Servicio de Asistencia Remota de Equipos Digitalizados',
					descripcion:'Equipamiento de Radiología Convencional y Digital, Equipos de Sala y Rodantes, Arcos en C y Mamógrafos.',
					// imagen:require('../assets/images/template.png')
					imagen:''
				},
			]
        }
    }
}
</script>