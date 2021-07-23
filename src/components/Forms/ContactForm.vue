<template>
    <div>
        <!-- <nav-bar :showLocationInfo="true"></nav-bar> -->
        <div class="form-container">
            <div class="header">
                <div class="header-title">
                    <div class="header-image"></div>
                    <div class="header-text">
                        <p>Contáctenos</p>
                        <p>sobre este producto</p>
                    </div>
                </div>
            </div>
            <div class="body">
                <form class="h-full w-full" action="#">
                    <!-- Header del formulario -->
                    <div class="help-box" :class="{'incomplete':!form.dudaPrincipal.complete}">
                        <p>Seleccione una opción*</p>
                        <b>¿Cómo podemos ayudarlo?</b>
                        <select name="consulta" id="consulta" v-model="form.dudaPrincipal.val" @change="marcaloComoCompletado(form.dudaPrincipal)">
                            <option value="-">Seleccione una opción . . .</option>
                            <option value="1">Deseo información sobre este equipamiento.</option>
                            <option value="2">Necesito un presupuesto detallado del equipamiento</option>
                            <option value="3">Busco asesoramiento sobre estos equipamientos</option>
                            <option value="4">Tengo equipos que requieren reparación</option>
                        </select>
                    </div>
                    <!-- Body del formulario -->
                    <div class="data-box">
                        <!-- Avance del formulario -->
                        <div class="title-box">
                            <div class="title-container">
                                <div class="title blue mr-2">Contáctenos sobre</div> 
                                <div class="sub-title blue"> Equipos Rodantes</div>
                            </div>
                            <small class="w-full">* Complete los 3 pasos del formulario para brindarle una mejor atención</small>
                        </div>
                        <div class="steps">
                            <div v-for="(step, index) in this.steps" :key="index">
                                <div class="step" :class="{disabled : !step.active}">
                                    <div class="number">{{step.number}}</div>
                                    {{step.title}}
                                </div>
                            </div>
                        </div>
                        <!-- Primeros 4 campos -->
                        <div class="fields" v-if="this.currentStep === 1">
                            <div class="field w-full" :class="{'incomplete':!form.nombrePersona.complete}">
                                <label for="nombre">Nombre *</label>
                                <input class="input-text flex-grow" type="text" name="nombre" v-model="form.nombrePersona.val" @change="marcaloComoCompletado(form.nombrePersona)">
                            </div>
                            <div class="field w-full" :class="{'incomplete':!form.apellidoPersona.complete}">
                                <label for="apellido">Apellido *</label>
                                <input class="input-text flex-grow" type="text" name="apellido" v-model="form.apellidoPersona.val" @change="marcaloComoCompletado(form.apellidoPersona)">
                            </div>
                            <div class="field w-full" :class="{'incomplete':!form.emailPersona.complete}">
                                <label for="email">Dirección de correo eléctronico *</label>
                                <input class="input-text flex-grow" type="text" name="email" v-model="form.emailPersona.val" @change="marcaloComoCompletado(form.emailPersona)">
                            </div>
                            <div class="field w-full" :class="{'incomplete':!form.telefono.complete}">
                                <label for="telefono">Teléfono Comercial *</label>
                                <input class="input-text flex-grow" type="text" name="telefono" v-model="form.telefono.val" @change="marcaloComoCompletado(form.telefono)">
                            </div>
                        </div>
                        <!-- Segundos 4 campos -->
                        <div class="fields" v-else-if="this.currentStep === 2">
                            <div class="field" :class="{'incomplete':!this.form.nombreEmpresa.complete}">
                                <label for="empresa">Empresa/Organismo *</label>
                                <input class="input-text" type="text" name="empresa" v-model="form.nombreEmpresa.val">
                            </div>
                            <div class="field">
                                <label for="institucion">Institución/Unidad</label>
                                <input class="input-text" type="text" name="instiitucion" v-model="form.nombreInstitucion.val">
                            </div>
                            <div class="field">
                                <label for="area">Área</label>
                                <input class="input-text" type="text" name="area" v-model="form.area.val">
                            </div>
                            <div class="field">
                                <label for="cargo">Cargo</label>
                                <input class="input-text" type="text" name="cargo" v-model="form.cargo.val">
                            </div>
                        </div>
                        <!-- Últimos 3 campos -->
                        <div class="third-part" v-else>
                            <div class="selects">
                                <div class="field" :class="{'incomplete':!form.informacionAtencion.complete}">
                                    <label for="atencion">Información para su Atención *</label>
                                    <select name="atencion" id="atencion" v-model="form.informacionAtencion.val" @change="marcaloComoCompletado(form.informacionAtencion)">
                                        <option value="-">Seleccione una opcion . . . </option>
                                        <option value="Ser contactado por ventas">Ser contactado por ventas</option>
                                        <option value="Cotización">Cotización</option>
                                        <option value="Solo información">Solo información</option>
                                    </select>
                                </div>
                                <div class="field">
                                    <label for="tiempoEntrega">Tiempo estimado de compra</label>
                                    <select name="tiempoEntrega" id="tiempoEntrega" v-model="form.tiempoCompra.val">
                                        <option value="-">Seleccione una opcion . . . </option>
                                        <option value="Urgente">Urgente</option>
                                        <option value="0 a 3 meses">0 a 3 meses</option>
                                        <option value="3 a 6 meses">3 a 6 meses</option>
                                        <option value="Más de 12 meses">Más de 12 meses</option>
                                    </select>
                                </div>
                            </div>
                            <div class="text-area">
                                <label for="comentarios" class="text-area-label">Especifique el motivo de su consulta para que podamos ofrecerte un mejor servicio</label>
                                <textarea name="comentarios" id="" cols="30" rows="5" v-model="form.comentarios.val"></textarea>
                            </div>
                        </div>
                    </div>
                    <!-- Footer del formulario -->
                    <div class="form-footer" :style="this.currentStep===1? 'justify-content: flex-end' : 'justify-content: space-between'">
                        <button class="previous" @click="previousStep" v-show="this.currentStep > 1">Anterior</button>
                        <button class="next" @click="nextStep" v-if="this.currentStep < 3">Siguiente</button>
                        <button class="next" @click="enviarFormulario" v-else>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .form-container{
        height: auto;
        width: 100vw;
        background: #D2DDEB;
    }
    .header{
        height: 6rem;
        padding: 0 3rem;
        width: 100%;
        background: white;
        box-shadow: 0 5px 10px 5px rgba(0,0,0,.3);
        display: flex;
        justify-items: center;
        z-index: 10;
    }
    .header-title{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .header-image{
        background: blue;
        width: 4rem;
        height: 2.5rem;
    }
    .header-text{
        padding-left: 5px;
    }
    .body{
        height: 100%;
        z-index: -1;
        padding: 2rem 3rem;
    }
    .help-box{
        display: flex;
        flex-direction: column;
        margin-bottom: 2.5rem;
    }
    select{
        height: 3rem;
        width: 100%;
        border: 2px solid gray;
        margin-top: 5px;
    }
    .title-box{
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .title-container{
        display: flex;
    }
    .title-box small{
        font-weight: bolder;
        width: 100%;
        font-size: 15px;
    }
    .steps{
        display: flex;
        gap: 2rem;
        padding: 2rem 0 2.5rem 0;
    }
    .step{
        display: flex;
        align-items: center;
        gap: .5rem;
        font-family: 'IngeTextBold', Arial, Helvetica, sans-serif;
    }
    .number{
        height: 1.7rem;
        width: 1.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        color: white;
        background: #1E6595;
    }
    .disabled{
        filter:opacity(50%)
    }

/* 1RA Y 2DA PARTE DEL FORMULARIO */
    .fields{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .field{
        display: flex;
        flex-direction: column;
        position: relative;
        width: 50%;
        padding: .5rem;
    }
    .field label{
        position: absolute;
        left: 15px;
        top: 10px;
        font-size: 14px;
    }
    .field input{
        height: 3.5rem;
        border: 2px solid gray;
        padding-top: 15px;
        padding-left: 10px;
        font-size: 20px;
    }
    .field select{
        height: 3.5rem;
        width: 100%;
        padding-top: 10px;
        padding-left: 5px;
        font-size: 20px;
    }
    .incomplete input, .incomplete select{
        border: 2px solid red;
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    }
    .incomplete label, .incomplete p, .incomplete b{
        color: red;
        font-weight: bolder;
        z-index: 10;
    }
    
/* 3RA PARTE DEL FORMULARIO */
    .third-part{
        display: flex;
        flex-direction: column;
    }
    .third-part label{
        top: 15px
    }
    .third-part .selects{
        display: flex;
    }
    .third-part .text-area{
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        padding: .5rem;
    }
    .third-part textarea{
        padding-top: 25px;
        padding-left: 10px;
        font-size: 20px;
        width: 100%;
        border: 2px solid gray;
    }
    .text-area-label{
        position: absolute;
        width: 95%; 
        top: 10px!important;
        left: 15px!important;
        background-color:white; 
        height: auto;
    }

/* BOTONES */
    .form-footer{
        display: flex;
        width: 100%;
        height: 3rem;
        margin-top: 1rem;
        justify-content: space-between;
    }
    button{
        border-radius: 8px;
        width: 8rem;
    }
    button:focus{
        outline: none;
    }
    .previous{
        background: transparent;
        border: 2px solid darkcyan;
        color: darkcyan;
        font-weight: bolder;
    }
    .next{
        background: darkcyan;
        color: white;
    }

/* ANIMACION */
    .shake {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
    }
    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }
        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }
        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }

@media screen and (max-width: 830px) {
    .steps{
        flex-direction: column;
    }
    .title{
        font-size: clamp(25px, 4.5vw, 50px);
    }
    .sub-title{
        font-size: clamp(25px, 4.5vw, 50px);
    }
}
@media screen and (max-width: 716px) {
    .third-part textarea{
        padding-top: 45px;
    }
}
@media screen and (max-width: 650px){
    .body{
        padding: 2rem 1rem;
    }
    .help-box{
        margin-bottom: 1.5rem;
    }
    .field{
        width: 100%;
    }
    .steps{
        gap: 1rem;
        padding: 1rem 0 1rem 0;
    }
    .third-part .selects{
        flex-direction: column;
    }
    .third-part .text-area-label{
        width: 94%;
    }
}
@media screen and (max-width: 466px){
    .title{
        font-size: clamp(17px, 5vw, 50px);
    }
    .sub-title{
        font-size: clamp(17px, 5vw, 50px);
    }
}
</style>
<script>
import { validationMixins } from '../../assets/js/validationMixin'
export default {
    mixins:[validationMixins],
    data: function(){
        return{
            currentStep: 1,
            steps:[
                {
                    number:1,
                    title:'Datos del Contacto',
                    active: true
                },
                {
                    number:2,
                    title:'Detalle de la Consulta',
                    active: false
                },
                {
                    number:3,
                    title:'Información y Comentarios',
                    active: false
                },
            ],
            form:{
                dudaPrincipal:{
                    val:'-',
                    complete: true
                },
                nombrePersona:{
                    val:'',
                    complete: true
                },
                apellidoPersona:{
                    val:'',
                    complete: true
                },
                emailPersona:{
                    val:'',
                    complete: true
                },
                telefono:{
                    val:'',
                    complete: true
                },
                nombreEmpresa:{
                    val:'',
                    complete: true
                },
                nombreInstitucion:{
                    val:'',
                    complete: true
                },
                area:{
                    val:'',
                    complete: true
                },
                cargo:{
                    val:'',
                    complete: true
                },
                informacionAtencion:{
                    val:'-',
                    complete: true
                },
                tiempoCompra:{
                    val:'-',
                    complete: true
                },
                comentarios:{
                    val:'',
                    complete: true
                }
            }
        }
    },
    methods:{
        nextStep(e){
            this.disableAllSteps()
            let form = this.form;
            let steps1 = [form.nombrePersona, form.apellidoPersona, form.emailPersona, form.telefono];
            let steps2 = [form.nombreEmpresa]
            this.unsetComplete(steps1)
            switch (this.currentStep) {
                case 1:
                    this.validateFields(steps1)
                    break;
                case 2:
                    this.unsetComplete(steps2)
                    this.validateFields(steps2)
                default:
                    break;
            }
            e.preventDefault();
            this.setActiveStep(this.currentStep)
        },
        previousStep(e){
            this.disableAllSteps()
            this.currentStep = this.max(1, this.currentStep-1)
            this.setActiveStep(this.currentStep)
            e.preventDefault();
        },
        enviarFormulario(e){
            let form = this.form
            let steps3 = [form.dudaPrincipal, form.informacionAtencion]
            if(this.fieldsNotEmpty(steps3)){
                console.log('Se envia nomasss')
            } else {
                this.setComplete(steps3)
                console.log('No se manda nada')
            }
            e.preventDefault()
        },
        max(num1, num2){
            return num1 > num2 ? num1 : num2
        },
        min(num1, num2){
            return num1 < num2 ? num1 : num2
        },
        disableAllSteps(){
            this.steps.forEach(step => step.active = false)
        },
        setActiveStep(stepNumber){
            this.steps[stepNumber-1].active = true
        },
        marcaloComoCompletado(field){
            field.complete = true
        }
    }
}
</script>