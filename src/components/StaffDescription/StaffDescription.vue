<template>
    <ul class="staff-description flex flex-col gap-4">
        <li v-for="(persona, index) in equipo" :key="index" class="personal-card flex gap-4">
            <ik-image class="ik-image" :path="`/${persona.imagen}`" :alt="`foto de ${persona.nombre}` "></ik-image>
            <div class="personal-details flex flex-col gap-2">
                <div class="person">
                    <titles :subtitle="persona.nombre" :fontSize="25"></titles>
                    <p> {{persona.rol}} </p>
                </div>
                <div class="contact-details">
                    <div class="contact-data-icon" v-for="(mail, index2) in persona.mail" :key="index2">
                        <div class="data-icon mail-icon"></div>
                        <a class="blue" :href="'mailto: '+mail"> {{mail}} </a>
                    </div>
                    <div class="contact-data-icon">
                        <div class="data-icon whatsapp-icon"></div>
                        <a class="blue" :href="persona.whatsapp"> {{persona.whatsapp}} </a>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props:['equipo']
}
</script>
<style scoped>
.ik-image{
    max-width: 130px;
    max-height: 150px;
    width: 25%;
}
.personal-details{
    width: 75%;
}
.nombre{
    font-size: 20px;
}
.contact-data-icon{
    display: flex;
    align-items: center;
    gap: .3rem;
}
.data-icon{
    height: 35px;
    width: 35px;
    background-size: 400%;
    background-position: center center;
    background-repeat: no-repeat;
}
.mail-icon{
    background-image: url('~@/assets/images/contacto/mail.svg');
}
.whatsapp-icon{
    background-image: url('~@/assets/images/contacto/whatsapp.svg');
}
@media screen and (max-width: 900px){
    .personal-details{
        width: 100%;
    }
    .personal-card{
        width: 100%;
    }
}
@media screen and (max-width:414px) {
    .personal-details{
        width: 100%;
    }
    .personal-card{
        width: 100%;
    }
}
</style>