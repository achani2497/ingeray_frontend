export const validationMixins = {
    data:function(){
        return {

        }
    },
    methods:{
        notEmpty(val){
            return val.trim() !== '' && val.trim() !== '-'
        },
        fieldsNotEmpty(fields){
            return fields.every(field => this.notEmpty(field.val))
        },
        setComplete(fields){
            fields.forEach(field => {
                if(!this.notEmpty(field.val)){
                    field.complete = false
                }else{
                    field.complete = true
                }
            })
        },
        validateFields(fields){
            if(this.fieldsNotEmpty(fields)){
                this.setComplete(fields) // Acá me marca a todos como completos
                this.currentStep = this.min(3, this.currentStep+1)
            }else{
                this.setComplete(fields) // Acá busca cuales estan incompletos y los marca como tal
            }
        },
        sendIfComplete(fields){
            if(this.fieldsNotEmpty(fields)){
                console.log('Se envia nomas')
            } else {
                
            }

        }
    }
}