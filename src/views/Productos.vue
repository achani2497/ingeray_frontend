<template>
    <div class="row">
        <div class="categorias-container" v-for="(categoria, index) in categorias" :key="index">
            <div class="sub-title">{{categoria.nombreCategoria}}</div>
            <div class="tab" v-for="(subcategoria, index1) in categoria.subcategorias" :key="index1">
                <label class="tab-label">{{subcategoria.nombreProducto}}</label>
                <div class="tab-content">
                    <router-link 
                        v-for="(equipo, index) in subcategoria.equipos" :key="index" 
                        :to="'/productos/'+equipo.urlName" 
                        class="card">
                            {{equipo.nombre}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import categoriasProductos from '../assets/js/categoriasProductos.json'
export default {
    title: 'Productos',
    data: function(){
        return {
            lastScrollPosition:0,
            showNavbar: false,
            categorias: categoriasProductos.categorias
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
// {
//     "nombreCategoria":"ultrasonografia",
//     "nombreProducto": "Ultrasonografia",
//     "show": true,
//     "equipos": [
//         "INGE V6",
//         "INGE V6 Plus",
//         "INGE V9 HD",
//         "Smart Scan",
//         "RKU10",
//         "KX5600",
//         "KX5200",
//         "MSU3",
//         "DCU30"
//     ]
// },
</script>
<style scoped>
.row{
    display: flex;
    flex-wrap: wrap;
}
.categorias-container{
    height: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    gap: .5rem;
}
.tab{
    display: flex;
    flex-direction: column;
    gap: .3rem;
    padding: .5rem 0;
}
.tab-label{
    font-family: 'IngeTextBold', Arial, Helvetica, sans-serif;
}
.tab-content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: .5rem;
}
.card{
    box-shadow: none;
    background: rgb(143, 143, 143);
    padding: .5rem;
    transition: all .3s ease-in-out;
}
.card:hover{
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0 0 10px 3px rgba(0,0,0,.2)
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