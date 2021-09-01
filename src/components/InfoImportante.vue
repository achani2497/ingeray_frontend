<template>
    <div class="important-info flex justify-between items-center w-full pl-4" id="importantInfo">
        <!-- INFO DE UBICACION -->
        <div class="flex items-center ubicacion text-sm md:text-base">
            <router-link to="/contacto" class="icon nav-icon"></router-link>
            <div class="direccion flex flex-col">
                <span id="direccion-esp">Campillo 2585 | C1427DCC | CABA</span>
                <span id="direccion-gen">Buenos Aires | Argentina</span>
            </div>
        </div>
        <!-- INFO DE CONTACTO -->
        <div class="flex items-center gap-4 whatsapp">
            <div class="flex text-xs w-full md:text-sm items-center text-center">
                <div class="span-max flex justify-center items-center gap-6">
                    <router-link to="/contacto" class="icon whatsapp-icon"></router-link>
                    <span>Diagnóstico por Imágenes</span>
                </div>
                <span class="span-min">Atención Comercial</span>
                <span class="span-min">División Veterinaria</span>
            </div>
        </div>
    </div>
</template>
<style>
.important-info{
    background-color: var(--eshop-color);
    color: white;
    height: 4rem;
}
.important-info > div > img{
    transition: all .5s ease-in-out;    
}
.ubicacion{
    transition: all .3s ease-in-out;
}
#direccion-esp{
    letter-spacing: 1px;
}
#direccion-gen{
    font-size: 18px;
    letter-spacing: 3.8px;
}
.whatsapp{
    transition: all .3s ease-in-out;
}   
.icon{
    width: 60px;
    height: 60px;
} 
.nav-icon{
    background-image: url('../assets/images/icons/NavIcons/inge_map.svg');
}
.whatsapp-icon{
    background-image: url('../assets/images/icons/NavIcons/inge_whatsapp.svg');
}
.span-max{
    width: 300px;
}
.span-min{
    width: 150px;
}

@media screen and (max-width:1000px) {
    #direccion-esp{
        font-size: .8rem;
        letter-spacing: 0.1rem;
    }
    #direccion-gen{
        font-size: 1rem;
        letter-spacing: 0.2rem;
    }
    .span-max{
        width: 250px!important;
    }
    .span-min{
        width: 150px!important;
    }
    .ubicacion{
        width: 40%;
    }
    .whatsapp{
        width: 60%;
    }
}
@media screen and (max-width: 800px){
    #direccion-esp{
        font-size: .7rem;
        letter-spacing: 0.11rem;
    }
    #direccion-gen{
        font-size: .9rem;
        letter-spacing: 0.2rem;
    }
}
@media screen and (max-width: 751px) {
    #direccion-esp{
        font-size: 70%;
    }
    #direccion-gen{
        font-size: 90%;
    }
}
@media screen and (max-width: 700px) {
    #direccion-esp{
        font-size: 60%;
    }
    #direccion-gen{
        font-size: 80%;
        letter-spacing: 0.18rem;
    }
}
</style>