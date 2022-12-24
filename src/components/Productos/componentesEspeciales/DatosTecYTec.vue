<template>
    <div class="especificaciones flex flex-col gap-4 py-4">
        <div class="titulos">
            <titles title="Ficha Técnica" subtitle="Especificaciones" :fontSize="25"></titles>
        </div>
        <div class="ficha w-full">
            <img v-for="image in datos" :src="image.tabla" alt="Ficha técnica">
        </div>
    </div>
</template>
<script>
export default {
    props: ['datos']
}
</script>
<style scoped>
.ficha{
    height: auto;
    background-color: cornsilk;
}
</style>