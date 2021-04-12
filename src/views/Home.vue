<template>
  	<div class="row">
		<nav-bar :showLocationInfo="true"></nav-bar>
		<div class="presentation">
			<div class="presentation-image flex justify-center items-center">
				Acá va el logo de la empresa 
			</div>
			<div class="presentation-text text-3xl">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem harum in nisi ipsa voluptate repellendus assumenda qui! Aperiam autem, nam assumenda quia saepe dolorum est alias aspernatur nulla. Saepe similique impedit unde voluptatum illo aut iusto rem distinctio neque eos! Nemo at voluptate cumque, nihil distinctio vitae labore beatae magni numquam enim! Dicta, incidunt at ipsam qui consectetur neque assumenda.
			</div>      
		</div>
		<h1 class="text-3xl mt-6 text-center ml-8">Productos que ofrecemos</h1>
		<div class="cards w-full flex flex-wrap justify-around">
			<div v-for="(producto, index) in productos" :key="index" class="card fade-in">
				<div class="card-image bg-no-repeat">
					<img loading="lazy" :src="producto.imagen" alt="image">
				</div>
				<div class="card-body p-3">
					<div class="card-title">
						<h2 class="text-2xl">{{producto.titulo}}</h2>
					</div>
					<p class="text-lg">{{producto.descripcion}}</p>
				</div>
			</div>
		</div>
		<h1 class="text-3xl mt-6 text-center ml-8">Servicios que ofrecemos</h1>
		<div class="cards w-full flex flex-wrap justify-around">
			<div v-for="(producto, index) in productos" :key="index" class="card fade-in">
				<div class="card-image bg-no-repeat">
					<img loading="lazy" :src="producto.imagen" alt="image">
				</div>
				<div class="card-body p-3">
					<div class="card-title">
						<h2 class="text-2xl">{{producto.titulo}}</h2>
					</div>
					<p class="text-lg">{{producto.descripcion}}</p>
				</div>
			</div>
		</div>
		<div class="eshop-section flex justify-center items-center">
			<h1>Acá va un banner promocional del eshop</h1>
		</div>
		<div class="footer flex justify-center items-center">
			Acá van las imagenes de las tarjetas con las que trabajamos
		</div>
  	</div>
</template>

<script>
export default {
	title: 'Ingeray - Home',
	data: function(){
		return {
			fadeInElements:[],
			productos:[
				{
				titulo:'Asistencia y Servicio Técnico de Equipamiento de Diagnóstico Médico',
				descripcion:`
				<p><b>PRIMERA VISITA DE EVALUACIÓN Y DIAGNÓSTICO SIN COSTO.</b></p>
				Contamos con un amplio plantel de técnicos e ingenieros especializados en marcas nacionales e importadas.`,
				imagen:require('../assets/images/template.png')
				},
				{
				titulo:'Gran variedad de equipamiento de Radiologia Convencional y Digital',
				descripcion:'Equipos con Fuente de Alta Frecuencia, Media Frecuencia y Aparatologíade Industrial. Periféricos de Sala: Mesas Fijas y de Plano Flotante, Potter Mural, Columnas Portatubo, Espinógrafos. Equipos Rodantes, Arcos en C, Mamógrafos.',
				imagen:require('../assets/images/template.png')
				},
				{
				titulo:'Servicio de Asistencia Remota de Equipos Digitalizados',
				descripcion:'Equipamiento de Radiología Convencional y Digital, Equipos de Sala y Rodantes, Arcos en C y Mamógrafos.',
				imagen:require('../assets/images/template.png')
				},
			]
			// {
			//   titulo:'Abonos por Servicio de Mantenimiento preventivo y correctivo',
			//   descripcion:'Servicio a Demanda o Visitas Periódicas a Progamar. Visitas mensuales, trimestrales o semestrales.',
			//   imagen:require('../assets/images/template.png')
			// },
			// {
			//   titulo:'Calculo y Obra Blindaje de Sala de Radiología',
			//   descripcion:'Confección de planos, presentación y seguimiento trámites ante el Ministerio de Salud de la Nación ante todas las jurisdicciones Nacionales.',
			//   imagen:require('../assets/images/template.png')
			// },
			// {
			//   titulo:'Puesta en valor y Restauración de Salas y Equipos de Radiología',
			//   descripcion:'Equipamiento de Radiología Convencional y Digital, Equipos de Sala y Rodantes, Arcos en C y Mamógrafos.',
			//   imagen:require('../assets/images/template.png')
			// },
			// {
			//   titulo:'Diseño y Realizacion de Sistemas de Integración de Tecnologías de Diagnóstico',
			//   descripcion:'Digitalización de Equipos con Panel de Detección Directa sin partes móviles. Sistemas de Radiología Digital Directa.',
			//   imagen:require('../assets/images/template.png')
			// },
			// {
			//   titulo:'Contratos de Alquiler de Equipos Radiológicos',
			//   descripcion:'Equipamiento de Radiología Convencional y Digital, Equipos de Sala y Rodantes, Arcos en C y Mamógrafos.',
			//   imagen:require('../assets/images/template.png')
			// }
		}
	},
	mounted: function(){
		this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
		document.addEventListener('scroll', this.handleScroll)
      	this.handleScroll()
	},
	methods:{
		handleScroll: function(evt) {
			for (var i = 0; i < this.fadeInElements.length; i++) {
				var elem = this.fadeInElements[i]
				var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
				if (distInView < 0) {
					elem.classList.add("inView");
				}else {
					elem.classList.remove("inView");
				}
			}
		},
	}
}
</script>

<style scoped>
	.row{
		display: flex;
		flex-wrap: wrap;
	}
	.cards{
		padding: 1rem 1rem;
		row-gap: 1rem;
		column-gap: 1rem;
	}
	.card{
		width: 30%;
		box-shadow: 10px 10px 60px -8px rgba(0,0,0,.2);
		background: rgba(255, 255, 255, .3);
		backdrop-filter: blur(10px);
		border-radius: 30px;
		border: 1px solid rgba(255, 255, 255, .3);
		overflow: hidden;
	}
	.card-title{
		border-bottom: 2px solid rgb(255, 255, 255);
		padding-bottom: 5px;
		margin-bottom: 5px;
	}
	.card-image{
		object-fit: cover;
		object-position: 50% 50%;
	}
	.card-footer{
		height: 4vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 1vh;
		padding-bottom: 3vh;
	}
	.fade-in {
		opacity: 0;
		-webkit-transition: .6s;
		-o-transition: .6s;
		transition: .6s;
		opacity: 0;
		box-sizing: border-box;
		padding: 20px;
		display: inline-block;
		transform: translateY(-100px);
	}
	.fade-in:nth-child(2){
		-webkit-transition: 1s;
		-o-transition: 1s;
		transition: 1s;		
	}
	.fade-in:nth-child(3){
		-webkit-transition: 1.4s;
		-o-transition: 1.4s;
		transition: 1.4s;		
	}
	.inView {
		opacity: 1;
		-webkit-transform: translateY(0px) rotate(0deg) translateZ(0);
		transform: translateY(0px) rotate(0deg) translateZ(0);
	}
	.presentation-text{
		width: 100vw;
		padding: 2rem;
		/* box-shadow: 10px 10px 60px -8px rgba(0,0,0,.2); */
		background: rgba(255, 255, 255, .3);
		backdrop-filter: blur(3px);
	}
	.presentation-image{
		height: 300px;
		width: 100vw;
		background-repeat: no-repeat;
		background-size: cover;
		/* background-image: url('../assets/images/template.svg'); */
	}
	.eshop-section{
		height: 300px;
		width: 100vw;
		background: #091E7A;
		color: white;
	}
	.footer{
		height: 50px;
		width: 100%;
		box-shadow: 10px 10px 60px -8px rgba(0,0,0,.2);
		background: rgba(255, 255, 255, .3);
		backdrop-filter: blur(10px);
	}
	@media screen and (max-width: 900px){
		.cards{
		gap: 0;
		}
		.card{
		width: 45%;
		margin: .5rem 0;
		}
	}
	@media screen and (max-width: 650px){
		.cards{
		gap: 0;
		}
		.card{
		width: 45%;
		}
	}
	@media screen and (max-width: 615px){
		.card{
		width: 80%;
		}
	}
	@media screen and (max-width: 414px){
		.card{
		width: 100%;
		height: fit-content;
		}
	}

</style>
