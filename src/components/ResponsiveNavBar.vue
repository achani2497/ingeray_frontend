<template>
    <ul class="hidden flex flex-row w-full justify-evenly fixed bottom-0">
        <li v-for="(option, index) in options" class="w-full" :key="index">
            <router-link :to="option.sectionUrl" class="text-black flex flex-col h-full justify-center items-center text-center" exact>
                <img :src="getImg(option.icon)"/>
                {{option.sectionName}}
            </router-link>
        </li>
    </ul>
</template>
<script>    
export default {
    data(){
        return{
            options:[
                {
                    sectionName: 'Inicio',
                    sectionUrl: '/',
                    icon: 'home'
                },
                {
                    sectionName: 'Servicios',
                    sectionUrl: '/servicios',
                    icon: 'services'
                },
                {
                    sectionName: 'Productos',
                    sectionUrl: '/productos',
                    icon: 'products'
                },
                {
                    sectionName: 'Contacto',
                    sectionUrl: '/contacto',
                    icon: 'contact'
                },
            ]
        }
    },
    methods:{
        toggle(){
            this.isActive = !this.isActive
        },
        getImg(imgName){
            return require('@/assets/images/'+imgName+'.svg')
        }
    }
}
</script>
<style scoped>
    .hidden{
        display:none
    }
    @media screen and (max-width:414px) {
        .hidden{
            display: flex;
        }
        .router-link-exact-active,
        .router-link-active {
            background-color: #395669;
            color: white;
        }

        .router-link-exact-active img,
        .router-link-active img{
            filter: brightness(0) invert(1);
        }

        a{
            transition: all .5s ease-in-out;
            padding-top: 5px;
        }

        ul{
            width: 100%;
            height: auto;
            box-shadow: 0px -5px 10px 2px rgba(0,0,0,.5);
            height: auto;
            background: rgba(255, 255, 255, .7);
            backdrop-filter: blur(10px);
            z-index: 9;
        }
                           
        li{
            border-right: 1px solid rgba(0,0,0,.3);
        }

        img{
            transition: all .5s ease-in-out;
        }
        li img{
            height: 20px;
            width: 20px;
        }
    }
</style>