<template>
    <div class="documentos flex flex-col gap-4 py-4">
        <div class="titulos">
            <titles :inverted="true" title="Documentos" subtitle="Brochure" :fontSize="31" :subtitleFontSize="20"></titles>
        </div>
        <div class="links flex flex-wrap justify-between items-end gap-4">
            <div class="brochures flex flex-col gap-4">
                <div v-for="datos in brochures" class="flex items-center gap-3">
                    <div class="flex gap-2 underline" v-if="datos.link === '#'">
                        <div :class="`${ datos.specificIcon ? datos.specificIcon :'icono-brochure'} icono-docs`"></div>
                        <button v-popover:infoBrochure.right >{{ datos.nombreLink }}</button>
                        <popover name="infoBrochure">
                            Para recibir más información y folleteria por favor contáctese a ventas@ingeray.com.ar
                        </popover>
                    </div>
                    <div v-else>
                        <div :class="`${ datos.specificIcon ? datos.specificIcon :'icono-brochure'} icono-docs`"></div>
                        <a :href="`/documentos/${datos.link}`" download>{{datos.nombreLink}}</a>
                    </div>
                </div>
            </div>
            <router-link v-if="esProductos" to="/productos" :class="`contact-outline alt-width ${esMamo() ? 'mamo-btn-outline' : ''}`">Volver</router-link>
        </div>
    </div>
</template>
<script>
import { mamoMixin } from '../../assets/js/mamoMixin';
export default {
    mixins: [mamoMixin],
    props: ['brochures'],
    data() {
        return {
            esProductos: false,
        }
    },
    methods: {
        getPdfUrl: function(direccion) {
            return `@/assets/documentos/${direccion}`
        }
    },
    mounted() {
        let ruta = this.$router.currentRoute.path.includes('veterinaria')
            if(ruta) {
                this.esProductos = false 
            } else {
                this.esProductos = true
            }
    },
}
</script>
<style scoped>
.icono-docs{
    height: 40px;
    width: 45px;
    background-position: center center;
    background-size: 140%;
}
.icono-brochure{
    background-image: url("~@/assets/images/icons/libro.png");
}
.lalcec-icon{
    background-image: url("~@/assets/images/icons/lalcec.png");
}

.alt-width {
    min-width: 100px;
    text-align: center;
}
</style>