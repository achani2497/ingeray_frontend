<template>
    <nav class="fixed top-0 flex flex-col w-screen">
        <!-- Menu -->
        <div class="menu flex justify-between flex-row bkg-nav-blue">
            <!-- Logo -->
            <router-link to="/" class="logo-container" id="logo-container" exact>
                <div class="logo"></div>
            </router-link>
            <!-- Secciones -->
            <ul class="flex justify-between items-center">
                <li>
                    <router-link to="/" class="router-cta li-content" exact>Home</router-link>
                </li>
                <li>
                    <div class="cta productos li-content" @click="openMenu('productos')">
                        Productos
                    </div>
                </li>
                <li>
                    <div class="cta servicios li-content" @click="openMenu('servicios')">
                        Servicios
                    </div>
                </li>
                <li>
                    <router-link to="/clientes" class="router-cta li-content" exact>Clientes</router-link>
                </li>
                <li>
                    <router-link to="/contacto" class="router-cta li-content" exact>Contacto</router-link>
                </li>
            </ul>
        </div>
        <!-- Info importante -->
        <important-info v-if="showLocationInfo" :class="{'hide':showNavbar}"></important-info>
        <sub-menu :show="this.showSubMenu" :option="this.subMenuOption" @closeSubMenu="showSubMenu = false"></sub-menu>
    </nav>
</template>

<style scoped>
    nav{
        background-color: #7A9AC7;
        z-index: 9;
    }
    .menu{
        height: 5rem;
    }
    .menu > ul{
        height: 3rem;
        background: linear-gradient(to right, #666666,#999999, #CCCCCC);
        border-top-left-radius: 25px;
        overflow: hidden;
        box-shadow: 0px -3px 10px 5px rgba(0,0,0,.2);
        align-self: flex-end;
        width: auto
    }
    .menu > ul > li{
        height: 100%;
        display: flex;
        flex-direction: row;
        font-weight: bold;
        font-size: 1.1rem;
    }
    .menu > ul > li .li-content{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: .25rem 0;
    }
    .menu > ul > li > label:hover{
        cursor: pointer;
    }
    .menu > ul > li > a, .cta{
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    .cta{
        width: 300px;
    }
    .router-cta{
        width: 150px;
    }
    img{
        height: 20px;
        width: 20px;
        transition: all .5s ease-in-out;    
    }
    #logo-container{
        background-color: transparent;
        width: 30%;
        padding: 0 2%;
        max-width: 380px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo{
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        width: 100%;
        max-width: 240px;
        height: 100%;
        background-image: url('../assets/images/icons/NavIcons/logo-ingeray1.svg');
    }
    .hide{
        transition: all .3s ease-in-out;
        opacity: 0;
    }
    .router-link-exact-active,
    .router-link-active {
        transition: all .5s ease-in-out;
        background-color: #9FB3E3;
        color: white;
    }
    li a:hover:not(.router-link-exact-active), 
    li .cta:hover:not(.router-link-exact-active){
        background-color: #666666;
        color: white;        
    }
    @media screen and (max-width:1000px) {
        li:nth-child(1), li:nth-child(2){
            width: 250px!important;
        }
        li:nth-child(3), li:nth-child(4){
            width: 150px!important;
        }
        ul{
            max-width: 60%;
        }
    }
    @media screen and (max-width:650px){
        nav{
            display: none;
        }
    }
    @media screen and (max-width:414px) {
        nav{
            display: none;
        }
    }
</style>

<script>
    export default {
        props:['showLocationInfo'],
        name:'nav-bar',
        data(){
            return{
                showNavbar: false,
                lastScrollPosition: 0,
                showSubMenu: false,
                subMenuOption: '',
                options:[
                    {
                        sectionName: 'Inicio',
                        sectionUrl: '/',
                        width:150
                    },
                    {
                        sectionName: 'Productos',
                        sectionUrl: '/productos',
                        width:300
                    },
                    {
                        sectionName: 'Servicios',
                        sectionUrl: '/servicios',
                        width:300
                    },
                    {
                        sectionName: 'Clientes',
                        sectionUrl: '/clientes',
                        width:150
                    },
                    {
                        sectionName: 'Contacto',
                        sectionUrl: '/contacto',
                        width:150
                    },
                ]
            }
        },
        methods:{
            onScroll(){
                // Get the current scroll position
                var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                
                // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
                if (currentScrollPosition < 0) {
                    return
                }

                // Stop executing this function if the difference between
                // current scroll position and last scroll position is less than some offset
                if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                    return
                }

                // Here we determine whether we need to show or hide the navbar
                // this.showNavbar = currentScrollPosition < this.lastScrollPosition
                this.showNavbar = currentScrollPosition > 300
                
                // Set the current scroll position as the last scroll position
                this.lastScrollPosition = currentScrollPosition
            },
            getImg(imgName){
                return require('@/assets/images/icons/NavIcons/'+imgName+'.svg')
            },
            openMenu(subMenuName){
                this.subMenuOption = subMenuName
                this.showSubMenu = true
            }
        },
        mounted(){
            // window.addEventListener('scroll', this.onScroll)
        },
        destroyed(){
            // window.removeEventListener('scroll', this.onScroll)
        }
    }
</script>