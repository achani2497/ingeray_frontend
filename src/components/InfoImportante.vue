<template>
    <div class="important-info flex justify-around items-center h-12 w-full" id="importantInfo">
        <h3 class="flex items-center ubicacion text-sm md:text-base">
            <div class="icon nav-icon"></div>
            <div class="direccion flex flex-col">
                <span>Campillo 2585 | C1427DCC | CABA</span>
                <span>Buenos Aires | Argentina</span>
            </div>
        </h3>
        <h3 class="flex items-center gap-4 whatsapp">
            <div class="icon whatsapp-icon"></div>
            <div class="flex text-xs gap-4 md:text-sm">
                <span>Diagnóstico por Imágenes</span>
                <span>Atención Comercial</span>
                <span>División Veterinaria</span>
            </div>
        </h3>
    </div>
</template>
<style>
.important-info{
    background-color: var(--eshop-color);
    color: white;
}
.important-info > h3 > img{
    transition: all .5s ease-in-out;    
}
.ubicacion{
    transition: all .3s ease-in-out;
}
.whatsapp{
    transition: all .3s ease-in-out;
}    
.nav-icon{
    background-image: url('../assets/images/icons/NavIcons/inge_map.svg');
}
.whatsapp-icon{
    background-image: url('../assets/images/icons/NavIcons/inge_whatsapp.svg');
}

@media screen and (max-width: 900px){
    .ubicacion{
        width: 40%;
    }
    .whatsapp{
        width: 60%;
    }
}
@media screen and (max-width: 710px){
}
@media screen and (max-width: 615px){
}
@media screen and (max-width: 414px){
}
</style>