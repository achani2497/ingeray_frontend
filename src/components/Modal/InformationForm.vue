<template>
<!-- Form utilizado para cuando solicitan suscripción al newsletter y para cuando quieren que se los contacte tocando el boton 'Quiero que me contacten' en el footer -->
    <form @submit.prevent="enviarFormulario">
        <div class="form-content">
            <div :class="['TextInput', information[0].value === '' ? '' : (information[0].hasError ? 'has-error' : 'success')]">
                <label for="email">EMAIL</label>
                <input type="text" name="email" v-model="information[0].value" @change="validar([information[0]])">
                <ul v-if="information[0].hasError" class="help-message">
                  <li v-for="(error, index) in information[0].errores" :key="index">
                    <small>{{error}}</small>
                  </li>
                </ul>
            </div>
            <div :class="['TextInput', information[1].value === '' ? '' : (information[1].hasError ? 'has-error' : 'success')]">
                <label for="apellido">APELLIDO</label>
                <input type="text" name="apellido" v-model="information[1].value" @change="validar([information[1]])">
                <ul v-if="information[1].hasError" class="help-message">
                  <li v-for="(error, index) in information[1].errores" :key="index">
                    <small>{{error}}</small>
                  </li>
                </ul>
            </div>
            <div :class="['TextInput', information[2].value === '' ? '' : (information[2].hasError ? 'has-error' : 'success')]">
                <label for="nombre">NOMBRE</label>
                <input type="text" name="nombre" v-model="information[2].value" @change="validar([information[2]])">
                <ul v-if="information[2].hasError" class="help-message">
                  <li v-for="(error, index) in information[2].errores" :key="index">
                    <small>{{error}}</small>
                  </li>
                </ul>
            </div>
            <div :class="['TextInput', information[3].value === '' ? '' : (information[3].hasError ? 'has-error' : 'success')]">
                <label for="celular">WHATSAPP</label>
                <input type="text" name="celular" v-model="information[3].value" @change="validar([information[3]])">
                <ul v-if="information[3].hasError" class="help-message">
                  <li v-for="(error, index) in information[3].errores" :key="index">
                    <small>{{error}}</small>
                  </li>
                </ul>
            </div>
        </div>
        <div class="modal-footer">
            <button type="submit" class="btn submit-btn" :class="{invalid: formHasError}"> {{sendButtonText}}</button>
            <button type="button" class="btn border border-red-600 text-red-600" @click="$emit('close')"> Cancelar</button>
        </div>
    </form>
</template>
<script>
export default {
    props:['isNewsletter', 'sendButtonText'],
    data: function(){
        return{
          formHasError: false,
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
              rules:['required', 'min5'],
              errores:[]
            },
            {
              name:'Nombre',
              value:'',
              hasError: '',
              rules:['required', 'min5'],
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
          let hayErrores = this.validar(this.information)

          if(!hayErrores){
            if(this.isNewsletter){
              console.log('Mando newsletter')
            } else {
              console.log('Mando datos de contacto')
            }
          } else {
            this.formHasError = true
          }
        },
        validar(array){
          let errores = []
          array.forEach(campo => {
            campo.errores = []
            campo.rules.forEach(regla => {
              let error = this.verificarRegla(campo, regla)
              if(error !== ''){
                errores.push(error)
              }
            })
          })

          return errores.length !== 0
        },
        verificarRegla(campo, regla){
          let error = ''

          switch (regla) {
            case 'required':
              if(campo.value.trim() !== ''){
                campo.hasError = false
              } else {
                error = `Falta completar el campo ${campo.name}.`
              }

              break;
            case 'emailFormat':
              if(campo.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                campo.hasError = false
              } else {
                error = 'El mail tiene un formato inválido.'
              }

              break;
            case 'min5':
              if(campo.value.length >= 5){
                campo.hasError = false
              } else {
                error = `El ${campo.name} tiene que tener al menos 5 caracteres`
              }

              break;
            case 'min10':
              if(campo.value.length >= 10){
                campo.hasError = false
              } else {
                error = `El ${campo.name} tiene que tener al menos 10 caracteres`
              }

              break;
          }
          if(error !== ''){
            this.setError(campo, error)
          }

          return error
        },
        setError(campo, error){
          campo.hasError = true
          campo.errores.push(error)
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
input {
  border-radius: 5px;
  color: black;
  font-size: 18px;
  border: 2px solid transparent;
  padding: 5px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}
input:focus {
  border-color: #0071fe;
}
.help-message {
  font-size: 14px;
}
.modal-footer{
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  gap: 1rem;
}
.TextInput{
    gap: .2rem;
}
.TextInput.has-error input {
  background-color: #fddfe2;
  color: #f23648;
}
.TextInput.has-error input:focus {
  border-color: #f23648;
}
.TextInput.has-error .help-message {
  color: #ff0019;
}
.help-message{
  list-style: disc;
  padding-left: 13px;
  font-size: 19px;
}
.TextInput.success input{
  background-color: #e0eee4;
  color: #21a67a;
}
.TextInput.success input:focus{
  border-color: #21a67a;
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
        opacity: 0;
    }
    100%{
        opacity: 100%;
    }
}
@media screen and (max-width: 650px) {
  .modal-container{
    width: 95%;
  }
}
</style>