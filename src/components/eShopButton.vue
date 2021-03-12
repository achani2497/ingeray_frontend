<template>
    <button class="fixed bottom-10 right-16 bg-gray-500 w-16 h-16 flex justify-center items-center p-3" @click="redirect">
        <img src="@/assets/images/icons/carrito-de-compras.svg" alt="carrito de compra">
        <p class="texto fixed -bottom-6 -right-14 w-44 text-white p-1">Visita nuestro e-shop!</p>
    </button>
</template>
<style scoped>
    button{
        z-index: 4;
        border-radius: 50%;
        box-shadow: 0 -2px 10px 2px rgba(255, 255, 255,.5);
        background-color: var(--eshop-color);
        backdrop-filter: blur(10px);
        transition: all .2s ease-in-out
    }
    button:hover{
        box-shadow: none;
        transform: scale(.9);
    }
    button:hover .texto{
        box-shadow: none;
    }
    button:focus{
        outline: none;
    }
    button img{
        filter: brightness(0) invert(1);

    }
    .texto{
        background-color: var(--eshop-color);
        border-radius: 25px;
        box-shadow: 0 7px 10px 2px rgba(255, 255, 255,.3);
        transition: all .2s ease-in-out;
    }

</style>
<script>
export default {
    methods:{
        redirect: function(){
            return window.location = 'https://ingeraysrl.mercadoshops.com.ar/'
        }
    }
}
</script>