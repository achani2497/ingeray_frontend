import servicios from '../js/servicios.json'
export const serviceMixin = {
    methods:{
        getServiceInfo: function(name){
            return servicios.servicios.find((servicio) => servicio.url === name)
        }
    }
}