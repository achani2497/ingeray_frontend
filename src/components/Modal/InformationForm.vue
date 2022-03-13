<template>
<!-- Form utilizado para cuando solicitan suscripción al newsletter y para cuando quieren que se los contacte tocando el boton 'Quiero que me contacten' en el footer -->
    <form @submit.prevent="enviarFormulario">
        <div class="form-content">
          <Input :campo="information[0]"></Input>
          <Input :campo="information[1]"></Input>
          <Input :campo="information[2]"></Input>
          <Input :campo="information[3]"></Input>
          <div class="warning-temporal-message" :class="{fadeIn:formHasError}" v-show="formHasError">{{errorMessage}}</div>
        </div>
        <div class="modal-footer">
            <button type="submit" class="btn submit-btn" :class="{invalid: formHasError}"> {{sendButtonText}}</button>
            <button type="button" class="btn border border-red-600 text-red-600" @click="$emit('close')"> Cancelar</button>
        </div>
    </form>
</template>
<script>
import Input from './ModalInput.vue'
export default {
    components:{Input},
    props:['isNewsletter', 'sendButtonText'],
    data: function(){
        return{
          formHasError: false,
          errorMessage: '',
          information:[
            {
              name:'Email',
              value:'',
              hasError: '',
              rules:['required','emailFormat'],
              errores:[]
            },
            {
              name:'Apellido',
              value:'',
              hasError: '',
              rules:['required', 'min4'],
              errores:[]
            },
            {
              name:'Nombre',
              value:'',
              hasError: '',
              rules:['required', 'min4'],
              errores:[]
            },
            {
              name:'Celular',
              value:'',
              hasError: '',
              rules:['required', 'min10'],
              errores:[]
            }
          ]
        }
    },
    methods:{
      enviarFormulario(){

        let estanTodosCompletos = this.estanTodosCompletos(this.information)
        let ningunoTieneError = this.ningunoTieneError(this.information)

        if(estanTodosCompletos && ningunoTieneError){
          if(this.isNewsletter){
            console.log('Mando newsletter')
          } else {
            console.log('Mando datos de contacto')
          }
        } else {
          this.formHasError = true
          if(!estanTodosCompletos){
            this.errorMessage = 'Primero completá todos los campos'
          }
        }
      },
      estanTodosCompletos(array){
        return array.every(campo => campo.value.trim() !== '')
      },
      ningunoTieneError(array){
        return array.every(campo => !campo.hasError)
      }
    },
    watch:{
      formHasError: function(newVal, oldVal){
        setTimeout(() => {
          this.formHasError = false
        }, 4200)
      }
    }
}
</script>
<style scoped>

.form-content{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    font-size: 20px;
    color: white;
}
.modal-footer{
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  gap: 1rem;
}
.warning-temporal-message{
  border-radius: 15px;
  background-color: #fddfe2;
  border: 1px solid #f23648;
  color: #f23648;
  text-align: center;
}
.fadeIn{
  animation: fadeInInge 5s forwards;
}
.btn{
  border-radius: 25px;
  width: 100%;
  padding: .3rem 0;
  margin-top: 1rem;
  font-size: 20px;
}
.submit-btn{
    background-color: hsl(120, 39%, 54%);
    color: white;
    border: none;
    border: 1px solid hsl(120, 39%, 40%);
    transition: transform .3s ease-in-out;
}
.submit-btn:hover{
    cursor: pointer;
}
.submit-btn.invalid {
  animation: shake 0.5s;
  animation-iteration-count: forwards;
}
.invalid{
  animation: shake .5s forwards;
}
.message{
    gap: 2rem;
    padding: 1rem;
    height: 200px;
    width: 100%;
    margin-top: -2rem;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    /* animation: fadeInInge .6s ease-in forwards; */
}
.sent{
    background-color: hsl(120, 39%, 54%);
}
.check-container{
    border: 2px solid white;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
}
.check{
  display: inline-block;
  transform: rotate(45deg);
  height: 27px;
  width: 12px;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
}
.stick{
    width: 1px;
    height: 40px;
    border: 1px solid white;
}
#stick1{
    transform: rotate(45deg);
}
#stick2{
    transform: rotate(-45deg);
}
.failed{
    background-color: hsl(0, 100%, 67%);
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}
@keyframes fadeInInge {
    0%{
      transform: translateY(10px);
      opacity: 0;
    }
    25%{
      transform: translateY(0);
      opacity: 1;
    }
    50%{
      transform: translateY(0);
      opacity: 1;
    }
    75%{
      transform: translateY(0);
      opacity: 1;
    }
    100%{
      transform: translateY(10px);
      opacity: 0;
    }
}
@media screen and (max-width: 650px) {
  .modal-container{
    width: 95%;
  }
}
</style>