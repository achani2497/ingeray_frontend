<template>
    <div class="container" :class="{open:this.show}">
        <div class="h-full w-full flex">
            <div class="tabs">
                <div class="close-container">
                    <div class="close-btn" @click="$emit('closeSubMenu')"></div>
                </div>
                <!-- EQUIPOS -->
                <div v-if="this.option === 'productos'">
                    <div class="tab" v-for="(categoria, index) in categorias" :key="index">
                        <input type="checkbox" :id="categoria.nombreCategoria" @click="setCategoriaActive(categoria)">
                        <label class="tab-label px-2" :class="{titleActive : categoria.show}" :for="categoria.nombreCategoria">{{categoria.nombreCategoria}}</label>
                        <div class="tab-content" :class="{contentActive : categoria.show}">
                            <!-- Columna izquierda, donde se muestran las categorias -->
                            <div class="categorias card h-auto w-6/12 lg:w-4/12 option-box">
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
                            <div class="equipos card h-auto w-6/12 lg:w-8/12 option-box">
                                <ul class="flex flex-wrap">
                                    <li class="w-1/2 pl-4 py-1" v-for="(equipo, index) in equiposParaMostrar" :key="index">
                                        <router-link :to="'/productos/'+equipo.urlName">{{equipo.nombre}}</router-link>
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
                            <li class="equipos" v-for="(servicio, index) in servicios" :key="index">{{servicio}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<style scoped>
    .container{
        position: absolute;
        top: 5rem;
        width: 650px;
        transform: translateY(-150%);
        height: 60vh;
        background: #9FB3E3;
        padding: 2rem;
        box-shadow: 2px 2px 10px 2px rgba(0,0,0,.6);
        transition: all .7s ease-in-out;
    }
    .open{
        transform: translateY(0);
    }
    .close-container{
        position: absolute;
        right: 20px;
        top: 10px;
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
    .tab {
        width: 100%;
        color: white;
        overflow: hidden;
    }
    .tab-label{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        color: #4f4f4f;
        font-size: 26px;
    }
    .tab-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        max-height: 0;
        transition: all 0.5s;
    }
    .tab-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        cursor: pointer;
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
        color: white;
        font-family: 'IngeText', Arial, Helvetica, sans-serif;
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
        color: #4f4f4f;
    }
    .categorias ul li:hover{
        cursor: pointer;
    }
    .equipos ul li a:hover{
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
        background-color: rgba(233, 240, 254, .8);
        color: #4f4f4f;
    }
    .servicios{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .servicios li{
        color: #4f4f4f;
        height: auto;
        padding: .3rem 0;
        font-family: 'IngeText', Arial, Helvetica, sans-serif;
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