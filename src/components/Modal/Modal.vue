<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                  <slot name="content">
                    <!-- Header -->
                    <div class="modal-header">
                        <!-- <slot name="header">
                            default header
                        </slot> -->
                        <div class="title">Información del contacto</div>
                        <button @click="$emit('close')">
                          <span>&times;</span>
                        </button>
                    </div>
                    <!-- Body -->
                    <div class="modal-body">
                        <!-- <slot name="body">
                            default body
                        </slot> -->
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
                          <label for="sms">SMS</label>
                          <input type="text" name="sms">
                        </div>
                    </div>
                    <!-- Footer -->
                    <div class="modal-footer">
                        <!-- <slot name="footer">
                            default footer
                        </slot> -->
                      <button class="bg-green-300" @click="$emit('close')"> Suscribirme!</button>
                      <button class="border border-red-400" @click="$emit('close')"> Cancelar</button>
                    </div>
                  </slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 50vw;
  margin: 0px auto;
  background: #FEFEFE;
  padding: 20px 30px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: 'IngeText', Arial, Helvetica, sans-serif;
  color: black
}
.modal-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-header button{
  height: 20px;
  width: 20px;
  border-radius: 100%;
  position: relative;
}
.modal-header span{
  position: absolute;
  top: -200%;
  left: 50%;
  font-size: 40px;
}
.modal-header h3 {
  margin-top: 0;
}
.title{
  font-size: 30px;
  color: #b0b0b0;
}
.modal-body {
  margin: 20px 0;
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