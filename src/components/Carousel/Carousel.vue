<template>
    <div class="carousel-container -mt-10">
        <splide :options="options">
            <splide-slide v-for="(elemento, index) in elementos" :key="index" class="carousel-splide">
                <div class="carousel-card">
                    <div class="carousel-image"></div>
                    <div class="carousel-text">
                        <div class="title gray text-3xl xl:text-4xl sm:text-3xl">{{elemento.titulo}}</div>
						<div class="sub-title gray text-3xl xl:text-4xl sm:text-3xl">{{elemento.subtitulo}}</div>
						<p class="text-xl mt-4">{{elemento.descripcion}}</p>
                    </div>
                </div>
            </splide-slide>
        </splide>
    </div>
</template>
<style scoped>
    .carousel-container{
		height: 600px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.carousel-splide{
		padding: 25px;
		overflow: visible;
	}
	.carousel-card{
		width: 100%;
		height: 400px;
		background: #D2DDEB;
		box-shadow: 0 5px 10px rgba(0, 0, 0, .3);
		display: flex;
		gap: 1rem;
	}
	.carousel-image{
		width: 60%;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('https://picsum.photos/200/300');
	}
	.carousel-text{
		width: 40%;
		padding: 1rem;
		border-top-right-radius: 25px;
		border-bottom-right-radius: 25px;
		display: flex;
		flex-direction: column;
		
	}
	@media screen and (max-width: 1000px){
		.carousel-container{
			width: 100%;
			margin: 0;
		}
		.carousel-card{
			display: flex;
			flex-direction: column;
			height: 500px;
		}
		.carousel-image, .carousel-text{
			width: 100%;
			border-radius: 0;
		}
		.carousel-image{
			height: 230px;
			max-height: 300px;
		}
		.carousel-text{
			margin-top: -1rem;
		}
	}
	@media screen and (max-width: 650px){
		.carousel-container{
			width: 100%;
			margin-bottom: 3rem;
		}
		.carousel-text{
			padding: .5rem;
		}
		.carousel-card{
			margin-left: 10%;
			width: 80vw;
		}
		.splide{
			padding: 48px 0px;
		}
	}
</style>
<script>
export default {
	props:['elementos'],
	data: function(){
		return{
			fadeInElements:[],
			options: {
				rewind : true,
				width  : '100%',
				gap    : '1rem',
			},
		}
	}
}
</script>