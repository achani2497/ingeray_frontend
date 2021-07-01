<template>
    <div class="container" :class="{open:this.show}">
        <div class="h-full w-full flex">
            <div class="tabs">
                <div class="close-container">
                    <div class="close-btn" @click="$emit('closeSubMenu')"></div>
                </div>
                <div class="tab" v-for="(equipo, index) in equipos" :key="index">
                    <input type="checkbox" :id="equipo.titulo" @click="setEquipoActive(equipo)">
                    <label class="tab-label" :class="{titleActive : equipo.show}" :for="equipo.titulo">{{equipo.titulo}}</label>
                    <div class="tab-content" :class="{contentActive : equipo.show}">
                        <div class="categorias card h-auto w-6/12 lg:w-4/12 option-box">
                            <ul>
                                <li v-for="(categoria, index) in equipo.categorias" :class="{active:categoria.isActive}" :key="index" @click="mostrarEquipos(categoria, equipo.categorias)">
                                    {{categoria.subtitulo}}
                                </li>
                            </ul>
                        </div>
                        <div class="equipos card h-auto w-6/12 lg:w-8/12 option-box">
                            <ul>
                                <li v-for="(item, index) in equiposParaMostrar" :key="index">
                                    {{item}}
                                </li>
                            </ul>
                        </div>
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
        transform: translateX(-100%);
        width: 80vw;
        min-width: 850px;
        height: 60vh;
        background: #9FB3E3;
        padding: 3rem 3rem 0 6rem;
        box-shadow: 2px 2px 10px 2px rgba(0,0,0,.6);
        transition: all .7s ease-in-out;
    }
    .open{
        transform: translateX(0)
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
/* Accordion styles */
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
        padding: 0 1rem;
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
        padding-left: 1rem;
        color: white;
        font-family: 'IngeText', Arial, Helvetica, sans-serif;
        font-size: 18px;
    }
    .option-box ul li{
        padding: .5rem;
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
    .equipos ul li:hover{
        font-family: 'IngeTextBold', Arial, Helvetica, sans-serif;
        cursor: pointer;
    }
    .active{
        font-family: 'IngeTextBold', Arial, Helvetica, sans-serif;
        font-size: 19px;
        background-color: #E9F0FE;
        color: black;
    }
@media screen and (max-width:1000px) {
    .container{
        padding: 3rem 1.5rem 0 1.5rem;
    }
}
@media screen and (max-width:900px){
    .container{
        min-width: 100vw;
    }
}
</style>
<script>
export default {
    props:['show', 'option'],
    data:function(){
        return{
            showProductos: true,
            showServicios: false,
            showDiagnostico: true,
            showVeterinaria: false,
            equiposParaMostrar: [],
            equipos:[    
                {
                    titulo: 'Diagnóstico por Imágenes',
                    show: true,
                    categorias:[
                        {
                            subtitulo:'Radiología Convencional',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3']
                        },
                        {
                            subtitulo:'Radiología Digital',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3','Item un poco largo 4', 'Item un poco largo 5', 'Item un poco largo 6']
                        },
                        {
                            subtitulo:'Radiología Intervensionista',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3']
                        },
                        {
                            subtitulo:'Sistemas de Digitalización',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3']
                        },
                        {
                            subtitulo:'Mamografía',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3']
                        },
                        {
                            subtitulo:'Alquiler de Equipamiento',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3']
                        }
                    ]
                },
                {
                    titulo: 'Veterinaria',
                    show: false,
                    categorias:[
                        {
                            subtitulo:'VET - Radiología Convencional',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3']
                        },
                        {
                            subtitulo:'VET - Radiología Digital',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3','Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3']
                        },
                        {
                            subtitulo:'VET - Radiología Intervensionista',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3']
                        },
                        {
                            subtitulo:'VET - Sistemas de Digitalización',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3']
                        },
                        {
                            subtitulo:'VET - Mamografía',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3']
                        },
                        {
                            subtitulo:'VET - Alquiler de Equipamiento',
                            isActive: false,
                            items:['Item un poco largo 1', 'Item un poco largo 2', 'Item un poco largo 3']
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        setEquipoActive(equipo){
            this.equipos.forEach(equipo => equipo.show = false)
            equipo.show = true
            this.equiposParaMostrar = []
        },
        mostrarEquipos(categoria, categorias){
            this.equiposParaMostrar = categoria.items; 
            categorias.forEach(categoria => categoria.isActive = false)
            categoria.isActive = true
        }
    }
}
</script>