<template>
    <div class="documentos flex flex-col gap-4 py-4">
        <div class="titulos">
            <titles title="Brochure" subtitle="Documentos" :fontSize="25"></titles>
        </div>
        <div class="links flex flex-wrap justify-between items-end gap-4">
            <div class="brochures flex flex-col gap-4">
                <div class="flex items-center gap-3">
                    <div class="icono-brochure"></div>
                    <a href="#">Equipo de Rx Rodantes de 60 a 500 mA</a>
                </div>
                <div class="flex items-center gap-3">
                    <div class="icono-brochure"></div>
                    <a href="#">Equipo de Rx Rodantes de 60 a 500 mA</a>
                </div>
            </div>
            <router-link to="/productos" class="contact-outline">Ver todos los productos</router-link>
        </div>
    </div>
</template>
<style scoped>
.icono-brochure{
    height: 40px;
    width: 45px;
    background-color: var(--dark-blue);
}
</style>