<template>
    <div class="carousel-container">
        <splide :options="options" class="images-carousel">
            <splide-slide v-for="(elemento, index) in elementos" :key="index" class="carousel-splide">
                <div class="carousel-card">
                    <img class="carousel-image" :src="elemento.productImage">
                </div>
            </splide-slide>
        </splide>
    </div>
</template>
<style scoped>
    .carousel-container{
        height: 100%;
        display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background: #ffffff;
	}
	.carousel-splide{
		overflow: visible;
		height: auto;
		padding: 3rem 3rem 0 3rem;
	}
	.splide__track{
		height: 200px!important;
	}
	.carousel-card{
		width: 100%;
		height: 500px;
		background: #ffffff;
		box-shadow: 0 0px 5px 2px rgba(0, 0, 0, .3);
		display: flex;
		gap: 1rem;
		margin: .2rem 0 1rem 0;
	}
	.carousel-image{
		width: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		/* background-image: url('https://picsum.photos/500/500'); */
	}
	.title{
		font-size: 28px;
	}
	.sub-title{
		font-size: 42px;
	}
	.splide{
		padding: 0 initial;
	}
	.splide__slide{
		margin: 0!important;
		padding: .3rem!important;
	}
	@media screen and (max-width: 900px){
		.carousel-container{
			width: 100%;
			margin: 0;
		}
		.images-carousel{
			padding: 0;
			width: 100%;
			height: 500px;
		}
		.splide{
			height: auto!important;
		}
	}
	@media screen and (max-width: 650px) {
		.carousel-card{
			height: 350px;
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