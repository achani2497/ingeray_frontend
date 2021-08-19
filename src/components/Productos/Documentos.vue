<template>
    <div class="documentos flex flex-col gap-4">
        <div class="titulos">
            <div class="sub-title blue">Documentos</div>
            <div class="title blue text-3xl xl:text-4xl sm:text-3xl">Brochure</div>
        </div>
        <div class="links flex gap-4">
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
            <button class="contact-outline">Ver todos los productos</button>
        </div>
    </div>
</template>
<style scoped>
.documentos{
    padding: 1rem 0
}
.links{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
}
.icono-brochure{
    height: 40px;
    width: 45px;
    background-color: darkblue;
}
</style>