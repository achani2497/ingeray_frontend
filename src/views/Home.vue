<template>
  	<div class="row">
		<nav-bar :showLocationInfo="true"></nav-bar>
		<!-- PRESENTACION -->
		<div class="presentation">
			<!-- Banner Principal con imagen de la empresa -->
			<div class="presentation-image"></div>
			<div class="presentation-text simple-text">
				<h1 class="title light-blue text-3xl xl:text-4xl sm:text-3xl">Somos proveedores de Tecnología Médica</h1>
				<h2 class="sub-title blue text-3xl xl:text-4xl sm:text-3xl mt-10 sm:mt-4">Comprometido con la Salud</h2>
				<p class="text-xl mt-10">
					Inge Ray SRL es una empresa argentina creada en 1992 y desde entonces nos comprometimos y dedicamos a brindar Soluciones Tecnológicas para la Salud que permitan a nuestros clientes ofrecer una medicina de calidad. Nos especializamos en Equipamiento Médico para Diagnóstico por Imágenes tanto para Medicina Humana como para Medicina Veterinaria. Fabricamos, comercializamos y alquilamos una amplia gama de equipos y periféricos de radiología convencional y digital, de mamografía y de ultrasonografía de producción nacional e internacional.
				</p>
			</div>      
		</div>
		<!-- PRODUCTOS -->
		<div class="prods-services">
			<div class="title blue text-3xl xl:text-4xl sm:text-3xl">Vea nuestra lista de </div>
			<div class="sub-title blue text-3xl xl:text-4xl sm:text-3xl mt-10 sm:mt-2">Productos</div>
			<product-carousel></product-carousel>
		</div>
		<!-- SERVICIOS -->
		<div class="prods-services -mt-24">
			<div class="title blue text-3xl xl:text-4xl sm:text-3xl">Vea nuestra lista de </div>
			<div class="sub-title blue text-3xl xl:text-4xl sm:text-3xl mt-8 sm:mt-2"> Servicios</div>
			<service-carousel></service-carousel>
		</div>
		<!-- EQUIPOS DE RADIOLOGIA -->
		<div class="prods-services -mt-24 w-full">
			<div class="title blue text-3xl xl:text-4xl sm:text-3xl">Radiologia Convencional</div>
			<div class="equipos flex justify-between items-center mt-8">
				<div class="equipo">
					<span class="simple-text blue">Arcos en C</span>
					<div class="img-equipo"></div>
				</div>
				<div class="equipo">
					<span class="simple-text blue">Equipos Móviles</span>
					<div class="img-equipo"></div>
				</div>
				<div class="equipo">
					<span class="simple-text blue">Equipos de Sala</span>
					<div class="img-equipo"></div>
				</div>
			</div>
		</div>
		<!-- TEXTO AMISTOSO -->
		<div class="friendly-text">
			<div class="presentation-text simple-text">
				<div class="title blue text-3xl xl:text-4xl sm:text-3xl">Mejorando la Experiencia del Paciente</div>
				<p class="text-xl mt-6">
					Adecuar la imagen del equipamiento de diagnóstico y las áreas pediátricas para que los pequeños se sientan a gusto cuando tengan que acudir al médico, es algo que viene preocupando hace bastante tiempo. Contamos con los mejores profesionales y diseñadores especializados Proyectos de Ambientación. Ponete en contacto para la generación ambientes amigables que contribuyan a reducir la ansiedad a través de la decoración y el color para crear un ambiente acogedor que ayude a reducir el estrés de los niños.
				</p>
			</div>
		</div>
		<!-- ESHOP -->
		<div class="eshop-section flex justify-center items-center">
			<h1>Acá va un banner promocional del eshop</h1>
		</div>
  	</div>
</template>

<script>
import ServiceCarousel from '../components/Carousel/ServiceCarousel.vue'
export default {
  components: { ServiceCarousel },
	title: 'Ingeray - Home',
	data: function(){
		return {
			
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

/* Presentacion */
	.presentation{
		box-shadow: 0px 2px 10px 5px rgba(0,0,0,.3);
	}
	.presentation-text{
		text-align: justify;
		width: 100vw;
		padding: 1rem 6rem 4rem 6rem;
		display: flex;
		flex-direction: column;
	}
	.presentation-image{
		height: 430px;
		width: 100vw;
		background-repeat: no-repeat;
		background-image: url('../assets/images/Banners/banner-principal.svg');
	}

/* Productos */
	.prods-services{
		overflow: hidden;
		padding: 3rem 6rem;
		background-color: #D2DDEB;
		width: 100%;
	}

/* Equipos */ 
	.equipo{
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 300px;
		width: 30%;
		border-radius: 25px;
		background: rgb(228, 240, 255);
		box-shadow:  9px 9px 20px #b7c0cc, 
					-9px -9px 20px rgba(237, 250, 255, .5);
		padding: .5rem 1rem 1rem 1rem;
	}
	.img-equipo{
		height: 90%;
		width: 100%;
		background-image: url('https://picsum.photos/200/300');
		background-size: cover;
		background-repeat: no-repeat;
	}

/* Texto Amistoso */
	.friendly-text{
		background-color: #D2DDEB;
	}

/* E-shop */
	.eshop-section{
		height: 300px;
		width: 100vw;
		background: #091E7A;
		color: white;
	}

/* Footer */
	.footer{
		height: 50px;
		width: 100%;
		box-shadow: 10px 10px 60px -8px rgba(0,0,0,.2);
		background: rgba(255, 255, 255, .3);
		backdrop-filter: blur(10px);
	}

/* Media Queries */
@media screen and (max-width: 900px){
	.presentation-text{
		padding: 1rem 2rem 4rem 2rem;
	}
	.prods-services{
		padding: 2rem 2rem;
	}
}
@media screen and (max-width: 650px){
	.presentation-text{
		padding: 1rem 3rem 4rem 3rem;
	}
	.prods-services{
		padding: 2rem 3rem;
	}
}
@media screen and (max-width: 615px){
}
@media screen and (max-width: 414px){
}

</style>
