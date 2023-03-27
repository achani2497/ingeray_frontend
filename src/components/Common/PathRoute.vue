<template>
    <div class="flex">
        <div v-for="(ubicacion, index) in pathArray" :key="index" class="flex" :style="pathStyle">
            <p>{{ ubicacion }}</p>
            <p class="space-path" v-if="index < pathArray.length - 1">></p>
        </div>
    </div>
</template>
<style>
.space-path{
    padding: 0 6px;
}
</style>
<script>
export default {
    props:['slug'],
    data() {
        return {
            pathArray: [],
            pathStyle: {},
        }
    },
    created() {
        this.resetArray();
        this.seteatPath(this.$router.currentRoute.path);
    },
    methods: {
        resetArray() {
            this.pathArray = [];
        },
        seteatPath(ruta) {
            ruta = ruta.split('/')
            if(ruta.includes('clientes')) {
                this.pathArray = ['Inicio','Diagnóstico por Imágenes', 'Clientes']
                this.pathStyle = {
                 fontWeight: 'bold',   
                }
            }
            if(ruta.includes('veterinaria')) {
                this.pathArray = ['Inicio','Productos', 'División Veterinaria']
            } else if(ruta.includes('productos')) {
                this.pathArray = ['Inicio','Productos','Humanos']
                // acá pushear segun qué producto sea: convencional, pacs, digital?
                this.pathArray.push(this.$router.currentRoute.name)
            }
            if(ruta.includes('servicios')) {
                this.pathArray = ['Inicio', 'Servicios']
                this.pathArray.push(this.$router.currentRoute.name)
            }
        }
    }
}
</script>