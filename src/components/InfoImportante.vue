<template>
    <div class="important-info flex justify-around items-center h-12 w-full" id="importantInfo">
        <h3 class="flex items-center ubicacion">
            <div class="icon nav-icon"></div>
            Campillo 2586, Capital Federal, Argentina
        </h3>
        <h3 class="flex items-center whatsapp">
            <div class="icon whatsapp-icon"></div>
            <div class="flex flex-col">
                <p>Gabriel Fandini | ventas@ingeray.com.ar | +54 9 11 5976-7596</p>
                <p>Dalina López | ingerayventas@gmail.com | +54 9 11 3851-0695</p>
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
    font-size: 1.25rem;
    transition: all .3s ease-in-out;
}
.whatsapp{
    font-size: 1rem;
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
        /* font-size: 1rem; */
        font-size: 2vw;
        background: olive;
    }
    .whatsapp{
        width: 60%;
        /* font-size: 1rem; */
        /* font-size: 1.7vw; */
        font-size: 1.9vw;
    }
}
@media screen and (max-width: 710px){
    .ubicacion{
        /* width: 45%; */
        /* font-size: .9rem; */
    }
    .whatsapp{
        /* width: 55%; */
        /* font-size: .75rem; */
    }
}
@media screen and (max-width: 615px){
}
@media screen and (max-width: 414px){
}
</style>