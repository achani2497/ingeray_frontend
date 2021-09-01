<template>
    <div class="flex flex-col gap-4 p-6">
        <div class="text-container flex flex-col">
            <div class="title blue">
                Misión
            </div>
            <p class="simple-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam minus ipsa laudantium ullam nobis blanditiis maiores sint totam illo hic harum recusandae deleniti accusamus, saepe delectus sapiente repellendus sed consequatur est tempore! Exercitationem perferendis illo excepturi quae laudantium architecto accusamus mollitia quo natus? Dolores tempora eos nulla consectetur ducimus.
            </p>
        </div>
        <div class="text-container flex flex-col">
            <div class="title blue">
                Visión
            </div>
            <p class="simple-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam minus ipsa laudantium ullam nobis blanditiis maiores sint totam illo hic harum recusandae deleniti accusamus, saepe delectus sapiente repellendus sed consequatur est tempore! Exercitationem perferendis illo excepturi quae laudantium architecto accusamus mollitia quo natus? Dolores tempora eos nulla consectetur ducimus.
            </p>
        </div>
        <div class="text-container flex flex-col">
            <div class="title blue">
                Objetivo
            </div>
            <p class="simple-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam minus ipsa laudantium ullam nobis blanditiis maiores sint totam illo hic harum recusandae deleniti accusamus, saepe delectus sapiente repellendus sed consequatur est tempore! Exercitationem perferendis illo excepturi quae laudantium architecto accusamus mollitia quo natus? Dolores tempora eos nulla consectetur ducimus.
            </p>
        </div>
        <div class="staff">
            <div class="title blue">Conocé a Nuestro Equipo</div>
            <div class="staff-personal">
                <!-- Card -->
                <div class="personal-card" v-for="(persona, index) in staff" :key="index">
                    <div class="personal-card-header flex items-center justify-center p-4">
                        <img :src="persona.foto" alt="img">
                    </div>
                    <div class="personal-card-body p-4 flex flex-col">
                        <div class="name blue">
                            {{persona.nombre}}
                        </div>
                        <div class="job-title blue">
                            {{persona.rol}}
                        </div>
                        <p>
                            {{persona.descripcion}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.staff-personal{
    display: grid;
    gap: 1rem;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
}
.personal-card{
    box-shadow: 0px 3px 5px 2px rgba(0,0,0,.3);
}
.personal-card-header{
    background: #e1e1e1;
}
img{
    height: 200px;
    width: 200px;
    border-radius: 50%;
}
.title{
    margin: 0;
}
.name{
    font-size: 30px;
    height: 35px;
}
.job-title{
    font-size: 23px;
}
.personal-card-body p{
    font-size: 18px;
}
</style>
<script>
export default {
    data(){
        return{
            staff: []
        }
    },
    mounted(){
        fetch("/staff.json") //El archivo tiene que estar en la carpeta public
            .then(r => r.json())
            .then(json => {
                this.staff = json.staff
            })
    }    
}
</script>