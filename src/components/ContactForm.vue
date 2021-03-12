<template>
    <form action="#">
        <div class="input-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" v-model="nombre">
        </div>
        <div class="input-group">
            <label for="institutionName">Nombre de la Institución</label>
            <input type="text" id="institutionName" name="institutionName" v-model="nombreInstitucion">
        </div>
        <div class="input-group h-24">
            <label for="unitName">Unidad</label>
            <p><small>(Corresponde si la institución tiene mas de un edificio)</small></p>
            <input type="text" id="unitName" name="unitName" v-model="nombreUnidad" >
        </div>
        <div class="input-group">
            <label for="telefono">Teléfono de contacto</label>
            <input type="text" id="telefono" name="telefono" v-model="telefonoContacto">
        </div>
        <div class="input-group">
            <label for="mail">Mail de contacto</label>
            <input type="text" id="mail" name="mail" v-model="mailContacto">
        </div>
        <div class="input-group">
            <label for="consulta">Consulta</label>
            <textarea name="consulta" id="consulta" cols="30" rows="5"></textarea>
        </div>
        <button class="flex justify-center items-center h-10 w-full bg-green-400 font-bold text-xl border-2 rounded-3xl p-2">
            <span>Enviar consulta</span>
        </button>
    </form>
</template>
<script>
export default {
    data: function(){
        return{
            nombre:'',
            nombreInstitucion:'',
            nombreUnidad:'',
            telefonoContacto:'',
            mailContacto:''
        }
    }
}
</script>
<style scoped>
    form{
        width: 30%;
        box-shadow: 10px 10px 60px -8px rgba(0,0,0,.2);
        background: rgba(255, 255, 255, .3);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, .3);
        overflow: hidden;
        padding: 10px;
    }
    .input-group{
        display: flex;
        flex-direction: column;
    }
    .input-group:not(:last-child){
        margin-bottom: 2vh;
    }
    .input-group label{
        font-weight: 500;
        font-size: 1.4rem;
    }
    .input-group input, .input-group textarea{
        background-color: rgba(255, 255, 255, .3);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: 1px solid white;
        padding-left: 5px;
        font-size: 1.1rem;
    }
    .input-group input{
        height: 4vh;
    }
    .input-group input:focus, .input-group textarea:focus{
        outline: none;
        box-shadow: 0 0 10px 2px rgba(255, 255, 255, 1);
    }
    button{
        position: relative;
        width: 100%;
        border: 2px solid #56ff01;
        overflow: hidden;
    }
    button span{
        transition: all .4s ease-in-out;
        z-index: 1;
    }
    button::before{
        content: '';
        height: 100%;
        width: 0;
        transition: all .4s ease-in-out;
        background-color: #56ff01;
        position: absolute;
        left: 0;
        z-index: 0;
    }
    button:hover::before{
        width: 100%;
    }
</style>