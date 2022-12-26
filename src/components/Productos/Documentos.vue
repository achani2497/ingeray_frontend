<template>
    <!-- <div class="documentos flex flex-col gap-4 py-4">
        <div class="titulos">
            <titles title="Brochure" subtitle="Documentos" :fontSize="25"></titles>
        </div>
        <div class="links flex flex-wrap justify-between items-end gap-4">
            <div class="brochures flex flex-col gap-4">
                <div v-for="datos in brochures" class="flex items-center gap-3">
                    <div class="icono-brochure"></div>
                    <a :href="datos.link">{{datos.nombreLink}}</a>
                </div>
            </div>
            <router-link to="/productos" class="contact-outline">Ver todos los productos</router-link>
        </div>
    </div> -->
</template>
<script>
export default {
    props: ['brochures']
}
</script>
<style scoped>
.icono-brochure{
    height: 40px;
    width: 45px;
    background-color: var(--dark-blue);
}
</style>