<template>
    <nav v-if="this.showNavbar">
        <ul>
            <router-link to="/">Seccion 1</router-link>
            <router-link to="/">Seccion 2</router-link>
            <router-link to="/">Seccion 3</router-link>
            <router-link to="/">Seccion 4</router-link>
        </ul>
    </nav>
</template>

<style>
    nav{
        height: 100px;
        background-color: var(--main-color);
        position: fixed;
        top: 0;
    }
    a{
        color: white;
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
            onScroll () {
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
            window.addEventListener('scroll', this.onScroll)
        },
        destroyed(){
            window.removeEventListener('scroll', this.onScroll)
        }
    }
</script>