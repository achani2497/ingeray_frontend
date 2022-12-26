<template>
  <div class="relative">
    <div class="extended-bg-white z-0"></div>
    <div class="flex flex-col gap-4">
      <titles
        title="Tecnología Verde"
        subtitle="Productos Eco Resposables"
        :fontSize="31"
      ></titles>
      <div class="flex gap-6">
        <img
          src="@/assets/images/servicios/eco/eco.png"
          class="w-1/2"
          alt="eco"
          width="400px"
        />
        <div class="flex flex-col w-1/2">
          <p class="text-lg text-justify">
            En <b>Inge Ray</b> estamos comprometidos con el cuidado del
            medioambiente y por eso distribuimos una Serie de Productos de
            Diagnóstico Eco Responsables, que contemplan la reutilización de
            materiales reciclados que de haber sido desechados hubieran sumado
            metales pesados, plásticos y aceites tóxicos al medio natural
            perjudicando la calidad de vida de las futuras generaciones. Todos
            los productos con el <b>Sello ECO</b>, serán desarrollados bajo las
            Normas para Tecnologías Verdes Responsables.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "eco-seal",
};
</script>
<style scoped>
.extended-bg-white {
  position: absolute;
  width: 300%;
  height: 100%;
  transform: translateX(-50%);
  border: 1px solid black;
  background-color: white;
  z-index: -2;
}
</style>