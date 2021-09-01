<template>
    <nav class="fixed top-0 flex flex-col w-screen">
        <!-- Menu -->
        <div class="menu flex justify-between bkg-nav-blue">
            <!-- Logo -->
            <router-link to="/" class="logo-container" id="logo-container" exact>
                <div class="logo"></div>
            </router-link>
            <!-- Secciones -->
            <ul class="flex secciones">
                <li class="router-cta">
                    <router-link to="/" class="li-content home" exact>Home</router-link>
                </li>
                <li class="cta">
                    <div class="productos li-content" @click="openMenu('productos')">
                        Productos
                    </div>
                </li>
                <li class="cta">
                    <div class="servicios li-content" @click="openMenu('servicios')">
                        Servicios
                    </div>
                </li>
                <li class="router-cta">
                    <router-link to="/clientes" class="li-content" exact>Clientes</router-link>
                </li>
                <li class="router-cta">
                    <router-link to="/contacto" class="li-content" exact>Contacto</router-link>
                </li>
                <SubMenu :show="this.showSubMenu" :option="this.subMenuOption" @closeSubMenu="showSubMenu = false"></SubMenu>
            </ul>
        </div>
        <!-- Info importante -->
        <ImportantInfo :class="{'hide':showNavbar}"></ImportantInfo>
    </nav>
</template>

<style scoped>
    nav{
        background-color: #7A9AC7;
        z-index: 20;
    }
    .menu{
        height: 5rem;
        padding-left: .3%;
        z-index: 10;
    }
    .secciones{
        height: 3rem;
        width: auto;
        background: linear-gradient(to right, #666666,#999999, #CCCCCC);
        border-top-left-radius: 15px;
        overflow: hidden;
        box-shadow: 0px -3px 10px 5px rgba(0,0,0,.2);
        align-self: flex-end;
        display: flex;
    }
    .secciones li{
        height: 100%;
        width: min(170px, 15vw);
        display: flex;
        flex-direction: row;
        font-weight: bold;
        font-size: 1.1rem;
    }
    .secciones .li-content{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .secciones li label:hover{
        cursor: pointer;
    }
    .secciones li a, .cta{
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    .cta{
        width: min(230px, 23vw)!important;
    }
    img{
        height: 20px;
        width: 20px;
        transition: all .5s ease-in-out;    
    }
    #logo-container{
        background-color: transparent;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo{
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        width: 180px;
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
    .cta:hover:not(.router-link-exact-active){
        background-color: #666666;
        color: white; 
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
import SubMenu from '@/components/NavBarSubMenu.vue'
import ImportantInfo from '@/components/InfoImportante.vue'
    export default {
        components:{ImportantInfo, SubMenu},
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