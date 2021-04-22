<template>
    <div class="row">
        <nav-bar :showLocationInfo="true"></nav-bar>
        <div class="pl-8 flex text-xl w-full glass-dark shadow h-12 items-center fixed z-10 filter-box" :class="{'hide':showNavbar}">
            <b> ¡Busca el equipo que necesitas! </b>
            <select name="filtro" id="filtro" v-model="filtro" @change="filtrar()" class="ml-2">
                <option value="">Todos</option>
                <option value="animal">Para Animales</option>
                <option value="humanos">Para Humanos</option>
                <option value="fijo">Equipo Fijo</option>
                <option value="portatil">Portatil</option>
            </select>
        </div>
        <div class="cards w-full flex flex-wrap justify-around mt-12">
            <div v-for="(equipo, index) in equiposFiltrados" :key="index" class="card">
                <div class="card-image bg-cover bg-no-repeat">
                    <img loading="lazy" :src="equipo.imagen" alt="image">
                </div>
                <div class="card-body p-3">
                    <div class="card-title">
                        <h2 class="text-2xl">{{equipo.nombreProducto}}</h2>
                    </div>
                    <p class="text-lg">
                        {{equipo.descripcion}}
                    </p>
                </div>
                <div class="card-footer">
                    <button class="inge-button"><b>Ver mas detalles del producto</b></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    title: 'Productos',
    data: function(){
        return {
            lastScrollPosition:0,
            filtro:'',
            showNavbar: false,
            equipos:[
                {
                    nombreProducto:'Producto#1',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg'),
                    imagen:'',
                    categoria:['humanos','portatil']
                },
                {
                    nombreProducto:'Producto#2',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg'),
                    imagen:'',
                    categoria:['animal','portatil']
                },
                {
                    nombreProducto:'Producto#3',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg'),
                    imagen:'',
                    categoria:['humanos','fijo']
                },
                {
                    nombreProducto:'Producto#4',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg'),
                    imagen:'',
                    categoria:['humanos','portatil']
                },
                {
                    nombreProducto:'Producto#5',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg'),
                    imagen:'',
                    categoria:['humanos','fijo']
                },
                {
                    nombreProducto:'Producto#6',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg'),
                    imagen:'',
                    categoria:['animal','humanos','fijo']
                },
                {
                    nombreProducto:'Producto#7',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg'),
                    imagen:'',
                    categoria:['humanos','portatil']
                },
                {
                    nombreProducto:'Producto#8',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg'),
                    imagen:'',
                    categoria:['animal','portatil']
                }
            ],
            equiposFiltrados:[]
        }
    },
    created(){
        this.equiposFiltrados = this.equipos
    },
    methods:{
        filtrar(){
            if(this.filtro != ''){
                this.equiposFiltrados = []
                this.equipos.forEach(equipo => {
                    if(equipo.categoria.includes(this.filtro)){
                        this.equiposFiltrados.push(equipo)
                    }
                })
            } else {
                this.equiposFiltrados = this.equipos
            }
        },
        onScroll(){
            let width = window.innerWidth
            if(width > 650){
                var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop                
                if (currentScrollPosition < 0) {
                    return
                }
    
                this.showNavbar = currentScrollPosition > 300
                this.lastScrollPosition = currentScrollPosition
            }
        }
    },
    mounted(){
        window.addEventListener('scroll', this.onScroll)
    },
    destroyed(){
        window.removeEventListener('scroll', this.onScroll)
    }
}
</script>
<style scoped>
.filter-box{
    transition: all .3s ease-in-out;
    top: 6.2rem;
}
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
select{
    background-color: rgba(57, 86, 105, .7);
    border: 2px solid white;
    box-shadow: 0px 2px 10px 2px rgba(0,0,0,.5);
    color: white;
    border-radius: 25px;
    padding: 5px;
    cursor: pointer;
    transition: all .3s ease-in-out;
}
select:focus{
    outline: none;
}
select:hover{
    box-shadow: none;
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
.hide{
    transform: translateY(-6vh);
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
    .filter-box{
        top: 0;
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