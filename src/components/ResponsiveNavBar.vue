<template>
    <div class="nav bg-gray-300 fixed bottom-0 " :class="{'active': isActive}" @click.prevent="toggle">
        <div class="menu-header flex justify-center">
            <button class="burger flex flex-col justify-center items-center" >
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
            </button>
        </div>
        <ul class="w-screen">
            <li v-for="(option, index) in options" :key="index" class="flex items-center">
                <router-link :to="option.sectionUrl" class="text-black ml-2">{{option.sectionName}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive: false,
            options:[
                {
                    sectionName: 'Inicio',
                    sectionUrl: '/'
                },
                {
                    sectionName: 'Seccion1',
                    sectionUrl: '/seccion'
                },
                {
                    sectionName: 'Seccion2',
                    sectionUrl: '/seccion'
                },
                {
                    sectionName: 'Seccion3',
                    sectionUrl: '/seccion'
                },
            ]
        }
    },
    methods:{
        toggle(){
            this.isActive = !this.isActive
        }
    }
}
</script>
<style scoped>
    .hidden{
        visibility: hidden;
    }
    button{
        cursor: pointer;
    }
    button:focus{
        outline: none;
    }
    @media screen and (max-width:414px) {
        .menu-header{
            position: relative;
        }
        .nav{
            height: auto;
            width: 100vw;
            transition: all 1s cubic-bezier(.165, .84, .44, 1);
            transform: translateY(calc(100% - 7vh));
        }
        .burger{
            width: 8vh;
            height: 50px;
            padding: 0 3px;
        }   
        .burger .line{
            background-color: #130f40;
            height: 2px;
            width: 100%;
            margin-top: -1px;
            transition: transform 1s cubic-bezier(.165, .84, .44, 1)
        }
        .nav.active{
            transform: translateY(0)
        }
        .nav.active .burger{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .line-1{
            transform: translateY(-6px);
            -webkit-transform: translateY(-6px);
        }
        .line-2{
            transform-origin: 100% 100%;
            transform: scaleX(.8);
        }
        .burger:hover .line-2{
            transform: scaleX(1);
        }
        .line-3{
            transform: translateY(6px);
        }
        .nav.active .burger{
            transform: rotate(-180deg);
        }
        .nav.active .line{
            background-color: black;
        }
        .nav.active .line-1{
            transform: rotate(45deg);
        }
        .nav.active .line-2{
            opacity: 0;
        }
        .nav.active .line-3{
            transform: rotate(-45deg);
        }
        li{
            height: 7vh;
        }
        .menu-header, li{
            border-bottom: 1px solid rgba(0,0,0,.1);
        }
    }
</style>