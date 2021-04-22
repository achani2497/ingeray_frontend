<template>
    <div class="row">
        <nav-bar :showLocationInfo="true"></nav-bar>
        <div class="cards w-full flex flex-wrap justify-around">
            <div v-for="(servicio, index) in servicios" :key="index" class="card">
                <div class="card-image bg-cover bg-no-repeat">
                    <img loading="lazy" :src="servicio.imagen" alt="image">
                </div>
                <div class="card-body p-3">
                    <div class="card-title">
                        <h2 class="text-2xl">{{servicio.nombreProducto}}</h2>
                    </div>
                    <p class="text-lg">
                        {{servicio.descripcion}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .glass{
        box-shadow: 10px 10px 60px -8px rgba(0,0,0,.2);
        background: rgba(255, 255, 255, .3);
        backdrop-filter: blur(10px);
    }
    .glass-dark{
        box-shadow: 10px 10px 60px -8px rgba(0,0,0,.2);
        background: rgba(235, 235, 235, 0.8);
        backdrop-filter: blur(10px);
    }
    .shadow{
        box-shadow: 0px 10px 10px 2px rgba(0,0,0,.5);
    }
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
<script>
export default {
    title: 'Servicios',
    data: function(){
        return{
            lastScrollPosition:0,
            filtro:'',
            showNavbar: false,
            servicios:[
                {
                    nombreProducto:'Servicio#1',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreProducto:'Servicio#2',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreProducto:'Servicio#3',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreProducto:'Servicio#4',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreProducto:'Servicio#5',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreProducto:'Servicio#6',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreProducto:'Servicio#7',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreProducto:'Servicio#8',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                }
            ],
        }
    },
}
</script>