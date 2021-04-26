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
		border-radius: 25px;
		background: #D2DDEB;
		box-shadow:  9px 9px 20px #b7c0cc, 
					-9px -9px 20px rgba(237, 250, 255, .8);
		padding: 1rem;
		display: flex;
		gap: 1rem;
	}
	.carousel-image{
		width: 60%;
		border-top-left-radius: 25px;
		border-bottom-left-radius: 25px;
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