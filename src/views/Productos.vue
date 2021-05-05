<template>
    <div class="row">
        <nav-bar :showLocationInfo="true"></nav-bar>
        <div class="categories w-full flex flex-wrap mt-12">
        <!-- DIAGNOSTICO POR IMAGENES -->
            <div class="tabs">
                <div class="sub-title">Diagnóstico por Imágenes</div>
                <div class="tab">
                    <input type="checkbox" id="chck1" v-model="radiologiaConvencional.show">
                    <label class="tab-label" for="chck1">{{radiologiaConvencional.nombreProducto}}</label>
                    <div class="tab-content">
                        <div v-for="(equipo, index) in radiologiaConvencional.equipos" :key="index" class="card">
                            {{equipo}}
                        </div>
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck2" v-model="radiologiaDigital.show">
                    <label class="tab-label" for="chck2">{{radiologiaDigital.nombreProducto}}</label>
                    <div class="tab-content">
                        <div v-for="(equipo, index2) in radiologiaDigital.equipos" :key="index2" class="card">
                            {{equipo}}
                        </div>
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck3" v-model="radiologiaIntervensionista.show">
                    <label class="tab-label" for="chck3">{{radiologiaIntervensionista.nombreProducto}}</label>
                    <div class="tab-content">
                        <div v-for="(equipo, index2) in radiologiaIntervensionista.equipos" :key="index2" class="card">
                            {{equipo}}
                        </div>
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck4" v-model="sistemasDeDigitalizacion.show">
                    <label class="tab-label" for="chck4">{{sistemasDeDigitalizacion.nombreProducto}}</label>
                    <div class="tab-content">
                        <div v-for="(equipo, index2) in sistemasDeDigitalizacion.equipos" :key="index2" class="card">
                            {{equipo}}
                        </div>
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck5" v-model="mamografia.show">
                    <label class="tab-label" for="chck5">{{mamografia.nombreProducto}}</label>
                    <div class="tab-content">
                        <div v-for="(equipo, index2) in mamografia.equipos" :key="index2" class="card">
                            {{equipo}}
                        </div>
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck6" v-model="alquilerDeEquipamiento.show">
                    <label class="tab-label" for="chck6">{{alquilerDeEquipamiento.nombreProducto}}</label>
                    <div class="tab-content">
                        <div v-for="(equipo, index) in accesorios.equipos" :key="index" class="card">
                            {{equipo}}
                        </div>
                    </div>
                </div>
            </div>
        <!-- DIVISION VETERINARIA -->
            <div class="tabs">
                <div class="sub-title">Diagnóstico por Imágenes</div>
                <div class="tab">
                    <input type="checkbox" id="chck7" v-model="ultrasonografia.show">
                    <label class="tab-label" for="chck7">{{ultrasonografia.nombreProducto}}</label>
                    <div class="tab-content">
                        <div v-for="(equipo, index) in ultrasonografia.equipos" :key="index" class="card">
                            {{equipo}}
                        </div>
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck8" v-model="accesorios.show">
                    <label class="tab-label" for="chck8">{{accesorios.nombreProducto}}</label>
                    <div class="tab-content">
                        <div v-for="(equipo, index2) in accesorios.equipos" :key="index2" class="card">
                            {{equipo}}
                        </div>
                    </div>
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
            // DIAGNOSTICO POR IMAGENES
            radiologiaConvencional:{
                nombreProducto:'Radiología Convencional',
                show: true,
                equipos: [
                    'Equipos con Fuentes de Alta Frecuencia',
                    'Equipos con Fuente de Frecuencia Industrial',
                    'Equipos Móviles'
                ]
            },
            radiologiaDigital: {
                nombreProducto:'Radiólogia Dígital',
                show: true,
                equipos: [
                    'Paneles de Adquisicion Digital Directa de Imágenes'
                ]
            },
            radiologiaIntervensionista: {
                nombreProducto:'Radiología Intervensionista',
                show: true,
                equipos: [
                    'Arcos en C'
                ]
            },
            sistemasDeDigitalizacion: {
                nombreProducto:'Sistemas de Digitalización',
                show: true,
                equipos: []
            },
            mamografia: {
                nombreProducto:'Mamografía',
                show: true,
                equipos:[]
            },
            alquilerDeEquipamiento: {
                nombreProducto:'Alquiler de Equipamiento',
                show: true,
                equipos:[
                    'Equipos de Sala',
                    'Equipos Moviles',
                    'Arcos en C',
                    'Mamógrafos'
                ]
            },
            // DIVISION VETERINARIA
            ultrasonografia:{
                nombreProducto: 'Ultrasonografia',
                show: true,
                equipos: [
                    'INGE V6',
                    'INGE V6 Plus',
                    'INGE V9 HD',
                    'Smart Scan',
                    'RKU10',
                    'KX5600',
                    'KX5200',
                    'MSU3',
                    'DCU30'
                ]
            },
            accesorios:{
                nombreProducto: 'Accesorios',
                show: true,
                equipos: [
                    'Sondas de Ultrasonido',
                    'Mango Extensor para Sonda Transrectal',
                    'Gafas de Video de Ultrasonido'
                ]
            }
        }
    },
    methods:{
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
input {
	 position: absolute;
	 opacity: 0;
	 z-index: -1;
}
/* Accordion styles */
 .tabs {
     width: 100%;
	 border-radius: 8px;
	 overflow: hidden;
	 box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}
 .tab {
	 width: 100%;
	 color: white;
	 overflow: hidden;
}
 .tab-label {
	 display: flex;
	 justify-content: space-between;
	 padding: 1em;
	 background: #2c3e50;
	 font-weight: bold;
	 cursor: pointer;
	/* Icon */
}
 .tab-label:hover {
	 background: #1a252f;
}
 .tab-label::after {
	 content: "\276F";
	 width: 1em;
	 height: 1em;
	 text-align: center;
	 transition: all 0.35s;
}
 .tab-content {
     display: flex;
     flex-wrap: wrap;
     gap: 3rem;
     justify-content: space-between;
	 max-height: 0;
	 padding: 0 1em;
	 color: #2c3e50;
	 background: white;
	 transition: all 0.35s;
}
 .tab-close {
	 display: flex;
	 justify-content: flex-end;
	 padding: 1em;
	 font-size: 0.75em;
	 background: #2c3e50;
	 cursor: pointer;
}
 .tab-close:hover {
	 background: #1a252f;
}
 input:checked + .tab-label {
	 background: #1a252f;
}
 input:checked + .tab-label::after {
	 transform: rotate(90deg);
}
 input:checked ~ .tab-content {
	 max-height: 100vh;
	 padding: 1em;
}




/* ajsdhajkdhsakjdhsakdjashdkjashdjjak */
.row{
    display: flex;
    flex-wrap: wrap;
}
.categories{
    background-color: #e1e1e1;
    padding: 1rem 1rem;
    row-gap: 3rem;
    column-gap: 1rem;
}
.category{
    display: flex;
    row-gap: 1rem;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    padding: 0 2rem;
    overflow: hidden;
}
.title-container{
    display: flex;
    column-gap: 1rem;
}
.arrow{
    transition: all 1s ease-in-out;
    cursor: pointer;
}
.rotate{
    transform: rotate(-180deg);
}
input{
    position: absolute;
    opacity: 0;
    z-index: -1;
}
input:checked ~ .equipos {
    max-height: 100vh;
    padding: 1em;
}
.equipos{
    margin-top: 1rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 3rem;
    row-gap: 3rem;
    transition: all 1s ease-in-out;
    max-height: 0;
}
.equipos::after{
    content: '';
    width: 100%;
    border-bottom: 1px solid black;
}
.title-container{
    z-index: 1;
    background-color: #e1e1e1;
}
.hideEquipos{
    transform: translateY(-100%);
}
.card{
    background: #e1e1e1;
    box-shadow: 0px 2px 10px 5px rgba(0,0,0,.1);
    overflow: hidden;
    flex-grow: 1;
    max-width: 30%;
    padding: 3rem;
    border-radius: 0;
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
    .categories{
        gap: 0;
    }
    .card{
        width: 45%;
        margin: .5rem 0;
    }
}
@media screen and (max-width: 650px){
    .categories{
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