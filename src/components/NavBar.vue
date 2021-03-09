<template>
    <nav class="fixed top-0 h-20 max-h-24 flex flex-col w-screen">
        <!-- Menu -->
        <div class="menu flex flex-row">
            <a href="/" class="w-1/6 w flex justify-center items-center py-1"> 
                <span class="text-5xl text-black">Logo</span>
            </a>
            <ul class="w-5/6 flex justify-around items-center">
                <li v-for="(option, index) in options" :key="index">
                    <router-link :to="option.sectionUrl" class="text-black flex flex-col h-full justify-center items-center text-center" exact>
                        <img :src="getImg(option.icon)"/>
                        {{option.sectionName}}
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- Info importante -->
        <important-info></important-info>
    </nav>
</template>

<style scoped>
    nav{
        box-shadow: 0px 5px 10px 2px rgba(0,0,0,.5);
        height: auto;
        background: rgba(255, 255, 255, .5);
        backdrop-filter: blur(10px);
        z-index: 9;
    }
    li{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    img{
        height: 20px;
        width: 20px;
        transition: all .5s ease-in-out;    
    }
    li a{
        width: 100%;
    }
    a{
        transition: all .5s ease-in-out;
    }
    .router-link-exact-active,
    .router-link-active {
        transition: all .5s ease-in-out;
        background-color: rgba(57, 86, 105, .7);
        color: white;
    }
    .router-link-exact-active img,
    .router-link-active img{
        filter: brightness(0) invert(1);
    }
    li a:hover:not(.router-link-exact-active){
        background-color: rgba(96, 126, 146, .7);
        color: white;        
    }
    li a:hover img{
        filter: brightness(0) invert(1);       
    }
    @media screen and (max-width:650px){
        nav a{
            width: 25%;
        }
        nav ul{
            width: 75%;
        }
        nav ul li{
            display: flex;
            justify-content: center;
        }
        nav ul li a{
            width: 100%;
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
        name:'nav-bar',
        data(){
            return{
                showNavbar: false,
                lastScrollPosition: 0,
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
            onScroll(){
                // Get the current scroll position
                var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                
                // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
                if (currentScrollPosition < 0) {
                    return
                }

                // Stop executing this function if the difference between
                // current scroll position and last scroll position is less than some offset
                // if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                //     return
                // }

                // Here we determine whether we need to show or hide the navbar
                // this.showNavbar = currentScrollPosition < this.lastScrollPosition
                this.showNavbar = currentScrollPosition > 600
                
                // Set the current scroll position as the last scroll position
                this.lastScrollPosition = currentScrollPosition
            },
            getImg(imgName){
                return require('@/assets/images/'+imgName+'.svg')
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