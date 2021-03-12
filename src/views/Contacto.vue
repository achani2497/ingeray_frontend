<template>
    <div class="form-container flex flex-wrap justify-around items-center">
        <div class="info glass">
            <div class="info-contacto">
                <h3 class="text-xl">Gabriel Fandini</h3>
                <p>+54 9 11 5976-7596</p>
                <p>ventas@ingeray.com.ar</p>
            </div>
            <div class="info-contacto">
                <h3 class="text-xl">Dalina López</h3>
                <p>+54 9 11 3851-0695</p>
                <p>ingerayventas@gmail.com</p>
            </div>
            <div class="info-contacto">
                <h3 class="text-xl">Gabriel Fndini</h3>
                <p>+54 9 11 4444 4444</p>
                <p>ventas@ingeray.com.ar</p>
            </div>
            <div class="info-contacto">
                <h3 class="text-xl">Gabriel Fndini</h3>
                <p>+54 9 11 4444 4444</p>
                <p>ventas@ingeray.com.ar</p>
            </div>
        </div>
        <div class="map glass">
            asd
        </div>
        <contact class="mt-6"></contact>
    </div>
</template>
<script>
export default {
    title: 'Contacto'
}
</script>
<style scoped>
    .glass{
        box-shadow: 10px 10px 60px -8px rgba(0,0,0,.2);
        background: rgba(255, 255, 255, .3);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, .3);
        overflow: hidden;
        padding: 10px;
    }
    .form-container{
        height: auto;
        margin-top: 1rem;
    }
    .info{
        width: 33%;
    }
    .map{
        width: 63%;
        height: 50vh;
    }
    .info-contacto{
        letter-spacing: 2px;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
    .info-contacto:not(:last-child){
        border-bottom: 2px solid rgba(255, 255 ,255, .8);
    }
    .info-contacto h3{
        font-weight: 600;
    }
</style>
