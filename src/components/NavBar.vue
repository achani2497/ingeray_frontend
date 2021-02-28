<template>
    <nav class="fixed -top-0 h-20 max-h-24 flex flex-row w-screen bg-gray-300">
        <a href="/" class="w-1/6 flex justify-center items-center"> 
            <span class="text-5xl text-black">Logo</span>
        </a>
        <ul class="w-5/6 flex justify-around items-center">
            <router-link to="/" class="text-black">Inicio</router-link>
            <router-link to="/" class="text-black">Servicios</router-link>
            <router-link to="/" class="text-black">¿Quiénes somos?</router-link>
            <router-link to="/" class="text-black">Contacto</router-link>
        </ul>
    </nav>
</template>

<style scoped>
    nav{
        background-color: var(--main-color);
        box-shadow: 0px 5px 20px 1px rgba(255,255,255,.5);
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
                lastScrollPosition: 0
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