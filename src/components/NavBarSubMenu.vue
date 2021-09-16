<template>
    <div class="container absolute top-20 p-8" :class="{open:this.show}">
        <div class="h-full w-full flex">
            <div class="tabs">
                <div class="close-container absolute right-2 top-2">
                    <div class="close-btn" @click="$emit('closeSubMenu')"></div>
                </div>
                <!-- EQUIPOS -->
                <div v-if="this.option === 'productos'">
                    <div class="tab text-white w-full overflow-hidden" v-for="(categoria, index) in categorias" :key="index">
                        <input type="checkbox" :id="categoria.nombreCategoria" @click="setCategoriaActive(categoria)">
                        <label class="tab-label flex justify-between px-2" :class="{titleActive : categoria.show}" :for="categoria.nombreCategoria">{{categoria.nombreCategoria}}</label>
                        <div class="tab-content flex flex-wrap justify-around" :class="{contentActive : categoria.show}">
                            <!-- Columna izquierda, donde se muestran las categorias -->
                            <div class="categorias card h-auto w-6/12 lg:w-4/12 option-box inge-text text-white">
                                <ul>
                                    <li v-for="(subcategoria, index) in categoria.subcategorias" :class="{active: subcategoria.isActive}" class="py-1 px-2" :key="index" @click="mostrarEquipos(categoria, subcategoria, subcategoria.equipos)">
                                        {{subcategoria.nombreProducto}}
                                    </li>
                                    <li>
                                        <router-link to="/productos" class="py-1 px-2">Ver todos los productos</router-link>
                                    </li>
                                </ul>
                            </div>
                            <!-- Columna derecha, donde se muestran los equipos -->
                            <div class="equipos card h-auto w-6/12 lg:w-8/12 option-box inge-text text-white">
                                <ul class="flex flex-wrap">
                                    <li class="w-1/2 pl-4 py-1" v-for="(equipo, index) in equiposParaMostrar" :key="index">
                                        <router-link :to="'/productos/'+equipo.urlName" @click="$emit('closeSubMenu')">
                                            <span @click="$emit('closeSubMenu')">{{equipo.nombre}}</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- SERVICIOS -->
                <div v-else>
                    <div class="tab">
                        <div class="titleActive">Servicios</div>
                        <ul class="servicios">
                            <li class="equipos inge-text h-auto" v-for="(servicio, index) in servicios" :key="index">{{servicio}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<style scoped>
    .container{
        width: 700px;
        transform: translateY(-150%);
        height: 60vh;
        background: var(--lilac);
        box-shadow: 2px 2px 10px 2px rgba(0,0,0,.6);
        transition: all .7s ease-in-out;
    }
    .open{
        transform: translateY(0);
    }
    .close-container{
        background-color: #E9F0FE;
        border-radius: 100%;
        padding: .2rem;
    }
    .close-btn{
        background: url('../assets/images/icons/Cross.svg');
        background-repeat: no-repeat;
        background-position: center center;
        height: 30px;
        width: 30px;
        border-radius: 100%;
    }
    .close-btn:hover{
        cursor: pointer;
    }
    input {
        position: absolute;
        opacity: 0;
        z-index: -1;
    }
    .tabs {
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
    }
    .tab-label{
        cursor: pointer;
        color: var(--dark-gray);
        font-size: 26px;
    }
    .tab-content {
        max-height: 0;
        transition: all 0.5s;
    }
    .titleActive{
        font-family: 'IngeTextBold', Arial, Helvetica, sans-serif;
        font-size: 30px;
        color: white;
    }
    .contentActive {
        max-height: 100vh;
    }
    .card{
        box-shadow: none;
        border-radius: 0px;
        background-color: transparent;
    }
    .option-box{
        font-size: 18px;
    }
    .option-box ul li{
        display: flex;
        align-items: center;
    }
    .categorias{
        border-right: 1px solid white;
    }
    .equipos{
        color: var(--dark-gray);
    }
    .categorias ul li:hover{
        cursor: pointer;
    }
    .equipos ul li a span:hover{
        font-family: 'IngeTextBold', Arial, Helvetica, sans-serif;
        cursor: pointer;
    }
    .categorias a{
        height: 30px;
        width: 100%;
    }
    .active{
        font-family: 'IngeTextBold', Arial, Helvetica, sans-serif;
        font-size: 19px;
        background-color: #e9f0fecc;
        color: var(--dark-gray);
    }
    .servicios{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .servicios li{
        color: var(--dark-gray);
        padding: .3rem 0;
        font-size: 20px;
    }
    .servicios li:hover{
        cursor: pointer;
        font-family: 'IngeTextBold', Arial, Helvetica, sans-serif;
    }
@media screen and (max-width:835px){
    .container{
        width: 100%; /* TODO: Arreglar este width */
    }
}
</style>
<script>
import categorias from '../assets/js/categoriasProductos.json'

export default {
    props:['show', 'option'],
    data:function(){
        return{
            showProductos: true,
            showServicios: false,
            showVeterinaria: false,
            equiposParaMostrar: [],
            categorias: categorias.categorias,
            servicios:[
                'Servicio Técnico a Demanda',
                'Servicios de Post-Venta ',
                'Abonos de Mantenimiento',
                'Asistencia Técnica Remota',
                'Cálculo de Blindaje, Planos, Obra de Blindaje y Tramites para la obtención de Certificaciones Homologadas',
                'Digitalización e Integración de Tecnologías de Diagnóstico Médico',
                'Puesta en Valor y Restauración de Equipos Clásicos',
                'Proyectos de diseño de ambientación de equipos y salas de pediatría'
            ]
        }
    },
    methods:{
        setCategoriaActive(cat){
            this.categorias.forEach(categoria => categoria.show = false)
            cat.show = true
            this.equiposParaMostrar = []
        },
        mostrarEquipos(categoria, subcategoria, equipos){
            this.equiposParaMostrar = equipos; 
            categoria.subcategorias.forEach(subCat => subCat.isActive = false)
            subcategoria.isActive = true
        }
    },
    mounted(){
        // Esto lo hago porque sino la primera vez que abro el submenu me aparecen las 2 categorias como activas y todas las subcategorias con la clase 'active' activada
        this.categorias.forEach(categoria => {
            categoria.show = false
            categoria.subcategorias.forEach(subCat => subCat.isActive = false)
        })
        this.categorias[0].show = true
    }
}
</script>