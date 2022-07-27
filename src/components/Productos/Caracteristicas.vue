<template>
    <div class="caracteristicas flex flex-col py-4 w-full h-auto">
        <div class="titulos">
            <titles title="Destacables de este equipo" subtitle="Características" :fontSize="25"></titles>
        </div>
        <div class="texto-caracteristica simple-text py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, incidunt expedita. Mollitia asperiores possimus impedit, nemo velit voluptates accusantium quidem labore at. Necessitatibus optio vitae, doloremque, tempore aliquid voluptates recusandae impedit officiis sunt tempora alias deleniti aut maxime! Qui vero distinctio numquam, earum quod deserunt rem incidunt accusamus aperiam, repellat aliquid voluptatibus minus assumenda odit nihil? Reprehenderit vero inventore, deserunt laborum similique reiciendis nostrum, molestias animi commodi porro maiores quasi sapiente molestiae unde ea eligendi eos necessitatibus quod? Doloribus, blanditiis aspernatur, consequatur cum earum temporibus, enim nisi fugiat saepe architecto obcaecati pariatur. Atque autem ipsum odit sapiente animi dolorem maxime?
        </div>
        <button class="contact-outline">Ver Más</button>
    </div>
</template>
<style scoped>
.texto-caracteristica{
    column-count: 2;
    text-align: justify;
}
@media screen and (max-width: 650px){
    .texto-caracteristica{
        column-count: 1;
        text-align: left;
    }
}
</style>