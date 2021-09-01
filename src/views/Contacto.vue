<template>
    <div class="form-container flex flex-wrap justify-around">
        <div class="info">
            <h3 class="text-3xl text-center text-underline mb-3">Información de contacto</h3>
            <div class="contact-box">
                <h3 class="text-xl">Ventas</h3>
                <div class="contact">
                    <p>ingerayventas@gmail.com</p>
                    <p>+54 9 11 3851-0695</p>
                    <p>8 a 17 h.</p>
                </div>
                <div class="contact">
                    <p>ventas@ingeray.com.ar</p>
                    <p>+54 9 11 5976-7596</p>
                    <p>8 a 18 h.</p>
                </div>
                <div class="contact">
                    <p>ventasonlineingeray@gmail.com</p>
                    <p>+54 9 11 5504-4427</p>
                    <p>9 a 18 h.</p>
                </div>
            </div>
            <div class="contact-box">
                <h3 class="text-xl">Administración</h3>
                <div class="contact">
                    <p>administracion@ingeray.com.ar</p>
                    <p>+54 9 11 3851-0695</p>
                    <p>8 a 13 h.</p>
                </div>
                <div class="contact">
                    <p>+54 9 11 5504 4427</p>
                    <p>13 a 17 h.</p>
                </div>
            </div>
            <div class="contact-box">
                <h3 class="text-xl">Comercial</h3>
                <div class="contact">
                    <!-- <p>DANIEL PENHOS</p> -->
                    <p>ingeraysrl@gmail.com</p>
                    <p>danielpenhos@ingeray.com.ar</p>
                    <p>+54 9 11 4192-6163</p>
                    <p>8 a 17 h.</p>
                </div>
                <div class="contact">
                    <!-- <p>MATIAS PENHOS</p> -->
                    <p>mpenhos@ingeray.com.ar</p>
                    <p>+54 9 11 4192-6162</p>
                    <p>8 a 17 h.</p>
                </div>
            </div>
        </div>
        <div class="map">
            <Map/>
        </div>
        <contact class="contact-form mt-6"></contact>
    </div>
</template>
<script>
import Map from '../components/ContactSection/Map'
export default {
    components: {Map},
    title: 'Contacto',
}
</script>
<style scoped>
    .form-container{
        height: auto;
        margin-top: -1rem;
    }
    .info{
        width: 33%;
        box-shadow: 0 5px 10px 4px rgba(0,0,0,.2);
        padding: 0 1rem;
    }
    .map{
        width: 63%;
        height: 56vh;
        box-shadow: 0 5px 10px 4px rgba(0,0,0,.2);
    }
    .contact-box{
        letter-spacing: 2px;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
    .contact-box:not(:last-child){
        border-bottom: 2px solid rgba(255, 255 ,255, .8);
    }
    .contact-box h3{
        font-weight: 600;
    }
    .contact{
        margin: .5rem 0;
        border-bottom: 1px solid rgba(0,0,0,.4);
    }
@media screen and (max-width: 900px){
    .form-container{
        gap: 1rem;
    }
    .info{
        width: 50%;
    }
    .map{
        width: 95%;
    }
    .contact-form{
        margin-top: 0;
        margin-bottom: 1rem;
    }
}
@media screen and (max-width: 700px) {
    .info{
        width: 70%;
    }
}
@media screen and (max-width: 650px){
    .form-container{
        margin-top: 0;
        padding-top: 1rem;
    }
}
@media screen and (max-width: 500px) {
    .info{
        width: 95%;
    }
}
@media screen and (max-width: 414px) {
    .form-container{
        margin-bottom: 3vh;
        margin-top: 0;
        padding-top: 3vh;
    }
}
</style>
