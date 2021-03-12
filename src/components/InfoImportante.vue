<template>
    <div class="important-info flex justify-around items-center h-12 w-full" id="importantInfo">
        <h3 class="flex items-center ubicacion">
            <img src="@/assets/images/icons/map.svg" alt="ubicacion" class="mr-2 big-icon white-icon">
            Campillo 2586, Capital Federal, Argentina
        </h3>
        <h3 class="flex items-center whatsapp">
            <img src="@/assets/images/icons/whatsapp.svg" alt="whatsapp" class="mr-2 big-icon">
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
.ubicacion{
    font-size: 1.25rem;
}
.white-icon{
    filter: brightness(0) invert(1);
}
.important-info > h3 > img{
    transition: all .5s ease-in-out;    
}
.whatsapp{
    font-size: 1rem;
}

.big-icon{
    height: 30px;
    width: 30px;    
}
</style>