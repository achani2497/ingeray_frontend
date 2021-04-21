<template>
    <div class="carousel-container">
        <splide :options="options">
            <splide-slide v-for="(elemento, index) in elementos" :key="index" class="carousel-splide">
                <div class="carousel-card">
                    <div class="carousel-image" :class={}></div>
                    <div class="carousel-text">
                        {{elemento.descripcion}}
                    </div>
                </div>
            </splide-slide>
        </splide>
    </div>
</template>
<style scoped>
    .carousel-container{
		height: 600px;
		width: 93vw;
		margin-left: -3rem;
		margin-top: -2rem
	}
	.carousel-splide{
		padding: 25px;
		overflow: visible;
	}
	.carousel-card{
		width: 100%;
		height: 400px;
		background: rgb(228, 240, 255);
		border-radius: 25px;
		box-shadow:  9px 9px 20px #b7c0cc, 
					-9px -9px 20px rgba(237, 250, 255, .5);
		padding: 1rem;
		display: flex;
		gap: 1rem;
	}
	.carousel-image{
		width: 30%;
		border-top-left-radius: 25px;
		border-bottom-left-radius: 25px;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.carousel-text{
		width: 70%;
		padding: 1rem;
		text-align: justify;
		border-top-right-radius: 25px;
		border-bottom-right-radius: 25px;
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