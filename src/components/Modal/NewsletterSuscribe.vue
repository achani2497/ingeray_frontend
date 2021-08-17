<template>
    <form @submit.prevent="enviarFormulario">
        <div class="modal-body">
            <div class="modal-group">
                <label for="email">EMAIL</label>
                <input type="text" name="email">
            </div>
            <div class="modal-group">
                <label for="apellidos">APELLIDOS</label>
                <input type="text" name="apellidos">
            </div>
            <div class="modal-group">
                <label for="nombre">NOMBRE</label>
                <input type="text" name="nombre">
            </div>
            <div class="modal-group">
                <label for="sms">WHATSAPP</label>
                <input type="text" name="sms">
            </div>
        </div>
        <div class="modal-footer">
            <button type="submit" class="bg-green-300" @click="$emit('close')"> Suscribirme!</button>
            <button type="button" class="border border-red-400" @click="$emit('close')"> Cancelar</button>
        </div>
    </form>
</template>
<script>
export default {
    data: function(){
        return{}
    },
    methods:{
        enviarFormulario(){
            console.log('Envio formulario de suscripcion a newsletter')
        }
    }
}
</script>
<style scoped>
form{
  width: 100%;
  padding: 1rem;
}
.modal-group{
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0
}
input{
  height: 2rem;
  border-radius: 5px;
  box-shadow: inset 5px 5px 20px #d8d8d8,
              inset -5px -5px 20px #ffffff;
  padding-left: .5rem;
  font-size: 1.2rem;
}
input:focus{
  border: 2px gray solid;
  outline: none;
}
button{
  transition: all .5s ease-in-out;
}
button:focus{
  outline: none;
}
button:hover{
  transform: scale(1.1);
}
.modal-footer{
  display: flex;
  gap: 1.5rem;
  height: 2rem;
}
.modal-footer button{
  width: 100%;
  border-radius: 5px;
}
.modal-footer button:hover{
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, .5);
}

/* Modal transtions */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
@media screen and (max-width: 650px) {
  .modal-container{
    width: 95%;
  }
}
</style>