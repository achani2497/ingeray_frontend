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
                <div class="popover_wrapper span-max flex justify-center items-center gap-6">
                    <router-link to="/contacto" class="icon whatsapp-icon"></router-link>
                    <span>Diagnóstico por Imágenes</span>
                    <div class="popover_content">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto sit vitae a culpa quod laborum similique voluptatum perspiciatis vero voluptate labore, blanditiis quos quis reprehenderit? Nisi adipisci natus tempora porro.                        
                    </div>
                </div>
                <div class="popover_wrapper span-min">
                    <span>Atención Comercial</span>
                    <div class="popover_content popover_content_left">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto sit vitae a culpa quod laborum similique voluptatum perspiciatis vero voluptate labore, blanditiis quos quis reprehenderit? Nisi adipisci natus tempora porro.
                    </div>
                </div>
                <div class="popover_wrapper span-min">
                    <span>División Veterinaria</span>
                    <div class="popover_content popover_content_right">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique nisi quae iste sint id, iusto nemo repellendus quos officiis velit praesentium! Ex dolor dicta aliquid voluptas deleniti velit quae atque?
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.important-info{
    background-color: var(--dark-blue);
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
    z-index: 9;
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
.popover_wrapper {
    position: relative;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.popover_content{
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: -5rem;
  right: 0;
  padding: 1rem;
  background-color: var(--dark-blue);
  padding: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  width: 200%;
  max-width: 300px;
}
.popover_wrapper:hover .popover_content {
  z-index: 10;
  opacity: 1;
  visibility: visible;
  transform: translateY(9rem);
  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}
.popover_content .popover_content_left{
    left: 0;
}
.popover_content .popover_content_right{
    right: 0;
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