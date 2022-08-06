<template>
  	<div class="flex flex-wrap">
		<!-- PRESENTACION -->
		<div class="inge-shadow-down presentation pt-4 bg-white">
			<!-- Banner Principal con imagen de la empresa -->
			<div class="presentation-image"></div>
			<div class="presentation-text">
				<titles title="Somos proveedores de Tecnología Médica" subtitle="Comprometidos con la salud" :fontSize="25"></titles>
				<p class="simple-text mt-10">
					Inge Ray SRL es una empresa argentina creada en 1992 y desde entonces nos comprometimos y dedicamos a brindar Soluciones Tecnológicas para la Salud que permitan a nuestros clientes ofrecer una medicina de calidad. Nos especializamos en Equipamiento Médico para Diagnóstico por Imágenes tanto para Medicina Humana como para Medicina Veterinaria. Fabricamos, comercializamos y alquilamos una amplia gama de equipos y periféricos de radiología convencional y digital, de mamografía y de ultrasonografía de producción nacional e internacional.
				</p>
			</div>      
		</div>

		<!-- PRODUCTOS Y SERVICIOS -->
		<div class="prods-services-container">
			<!-- PRODUCTOS -->
			<div class="prods-services">
				<titles title="Vea nuestra lista de" subtitle="Productos" :fontSize="25"></titles>
				<ProductCarousel></ProductCarousel>
			</div>
			<!-- SERVICIOS -->
			<div class="prods-services">
				<titles title="Vea nuestra lista de" subtitle="Servicios" :fontSize="25"></titles>
				<ServiceCarousel></ServiceCarousel>
			</div>
		</div>

		<!-- TEXTO AMISTOSO -->
		<div class="friendly-text">
			<div class="presentation-text simple-text">
				<div class="title blue text-3xl xl:text-4xl sm:text-3xl">Mejorando la Experiencia del Paciente</div>
				<p>
					Adecuar la imagen del equipamiento de diagnóstico y las áreas pediátricas para que los pequeños se sientan a gusto cuando tengan que acudir al médico, es algo que viene preocupando hace bastante tiempo. Contamos con los mejores profesionales y diseñadores especializados Proyectos de Ambientación. Ponete en contacto para la generación ambientes amigables que contribuyan a reducir la ansiedad a través de la decoración y el color para crear un ambiente acogedor que ayude a reducir el estrés de los niños.
				</p>
			</div>
		</div>

		<!-- EQUIPOS DE RADIOLOGIA -->
		<div class="radiologia bkg-light-gray pt-8 pb-16 px-24 w-full">
			<titles title="Radiologia Convencional" :fontSize="25"></titles>
			<div class="equipos flex flex-wrap justify-between items-center gap-8 mt-8">
				<div class="equipo">
					<titles subtitle="Arcos en C" :fontSize="25"></titles>
					<div class="img-equipo"></div>
				</div>
				<div class="equipo">
		            <titles subtitle="Equipos moviles" :fontSize="25"></titles>
					<div class="img-equipo"></div>
				</div>
				<div class="equipo">
					<titles subtitle="Equipos de Sala" :fontSize="25"></titles>
					<div class="img-equipo"></div>
				</div>
			</div>
		</div>

		<!-- ESHOP -->
		<div class="medicina-veterinaria bkg-light-gray flex justify-center items-center px-24">
			<div class="banner-prods-veterinaria inge-shadow-down h-full w-full flex justify-center items-center">Banner de equipos de veterinaria</div>
		</div>
  	</div>
</template>

<script>
import ProductCarousel from '@/components/Carousel/ProductCarousel.vue'
import ServiceCarousel from '../components/Carousel/ServiceCarousel.vue'
export default {
  components: { ProductCarousel, ServiceCarousel },
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
/* Presentacion */
	.presentation{
		z-index: 8;
	}
	.presentation-text{
		width: 100vw;
		padding: 2.5rem 6rem;
		display: flex;
		flex-direction: column;
		text-align: justify;
	}
	.presentation-image{
		position: relative;
		height:400px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		background-image: url('../assets/images/banners/banner-principal.svg');
	}

/* Productos */
	.prods-services-container{
		width: 100%;
		overflow: hidden;
		background-color: var(--light-lilac);
	}
	.titles{
		padding: 5rem 6rem 1rem 6rem;
	}

/* Texto Amistoso */
	.friendly-text{
		background-color: var(--light-lilac);
		padding: 1rem 0;
	}

/* Equipos de Radiologia */ 
	.equipo{
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 300px;
		width: 30%;
		background: transparent;
	}
	.img-equipo{
		height: 90%;
		width: 100%;
		background-image: url('https://picsum.photos/200/300');
		background-size: cover;
		background-repeat: no-repeat;
	}

/* E-shop */
	.medicina-veterinaria{
		height: 500px;
		width: 100vw;
	}
	.banner-prods-veterinaria{
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}

/* Media Queries */
@media screen and (max-width: 1000px){
	.presentation-image{
		height: 440px;
	}
	.friendly-text{
		padding-bottom: 2rem;
	}
}
@media screen and (max-width: 900px){
	.presentation-image{
		height: 270px;
	}
	.presentation-text{
		padding: 1.5rem;
	}
	.prods-services-container{
		padding-top: 0;
	}
	.prods-services{
		padding: 0;
	}
	.titles{
		padding: 4rem 1.5rem 1rem 1.5rem;
	}
	.friendly-text{
		padding-top: 2rem;
	}
	.friendly-text .presentation-text{
		padding: 0 1.5rem;
	}
	.radiologia{
		padding: 1.5rem;
	}
	.equipos{
		gap: 1rem;
	}
	.equipo{
		width: 48%;
	}
	.medicina-veterinaria{
		padding: 1.5rem
	}
}
@media screen and (max-width: 650px){
	.presentation{
		padding-top: 0;
	}
	.presentation-image{
		height: 25vh;
	}
	.presentation-text{
		padding: 1rem;
		text-align: justify;
		/* text-align: center; */
	}
	.prods-services-container{
		padding-top: 3rem;
	}
	.titles{
		padding: 0 3rem 1rem 3rem;
	}
	.friendly-text{
		padding-top: 0;
	}
	.friendly-text .presentation-text{
		padding: 0 1rem;
	}	
	.friendly-text p{
		padding-top: 2rem;
	}
	.radiologia{
		padding: 1rem;
	}
	.equipos{
		display: flex;
		justify-content: center;
	}
	.equipo{
		width: 90%;
	}
	.medicina-veterinaria{
		padding: 1rem;
	}
}
</style>
