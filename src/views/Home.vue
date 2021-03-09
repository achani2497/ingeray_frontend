<template>
  <div class="row">
    <div class="cards w-full flex flex-wrap justify-around">
      
      <div class="card">
        <div class="card-image bg-no-repeat">
          <img loading="lazy" src="@/assets/images/template.png" alt="image">
        </div>
        <div class="card-body p-3">
          <div class="card-title">
            <h2 class="text-2xl">Asistencia y Servicio Técnico de Equipamiento de Diagnóstico Médico</h2>
          </div>
          <p><b>PRIMERA VISITA DE EVALUACIÓN Y DIAGNÓSTICO SIN COSTO.</b></p>
          Contamos con un amplio plantel de técnicos e ingenieros especializados en marcas nacionales e importadas.
        </div>
      </div>
      
      <div class="card">
        <div class="card-image bg-cover bg-no-repeat">
          <img loading="lazy" src="@/assets/images/template.png" alt="image">
        </div>
        <div class="card-body p-3">
          <div class="card-title">
            <h2 class="text-2xl">Gran variedad de equipamiento de Radiologia Convencional y Digital</h2>
          </div>
          Equipos con Fuente de Alta Frecuencia, Media Frecuencia y Aparatologíade Industrial. Periféricos de Sala: Mesas Fijas y de Plano Flotante, Potter Mural, Columnas Portatubo, Espinógrafos. Equipos Rodantes, Arcos en C, Mamógrafos.
        </div>
        <div class="card-footer">
          <button class="inge-button">Ver Productos</button>
        </div>
      </div>

      <div class="card">
        <div class="card-image bg-cover bg-no-repeat">
          <img loading="lazy" src="@/assets/images/template.png" alt="image">
        </div>
        <div class="card-body p-3">
          <div class="card-title">
            <h2 class="text-2xl">Servicio de Asistencia Remota de Equipos Digitalizados</h2>
          </div>
          Equipamiento de Radiología Convencional y Digital, Equipos de Sala y Rodantes, Arcos en C y Mamógrafos.
        </div>
      </div>

      <div class="card">
        <div class="card-image bg-cover bg-no-repeat">
          <img loading="lazy" src="@/assets/images/template.png" alt="image">
        </div>
        <div class="card-body p-3">
          <div class="card-title">
            <h2 class="text-2xl">Abonos por Servicio de Mantenimiento preventivo y correctivo</h2>
          </div>
          Servicio a Demanda o Visitas Periódicas a Progamar. Visitas mensuales, trimestrales o semestrales.
        </div>
      </div>

      <div class="card">
        <div class="card-image bg-cover bg-no-repeat">
          <img loading="lazy" src="@/assets/images/template.png" alt="image">
        </div>
        <div class="card-body p-3">
          <div class="card-title">
            <h2 class="text-2xl">Calculo y Obra Blindaje de Sala de Radiología</h2>
          </div>
          Confección de planos, presentación y seguimiento trámites ante el Ministerio de Salud de la Nación ante todas las jurisdicciones Nacionales.
        </div>
      </div>

      <div class="card">
        <div class="card-image bg-cover bg-no-repeat">
          <img src="@/assets/images/template.png" alt="image" class="">
        </div>
        <div class="card-body p-3">
          <div class="card-title">
            <h2 class="text-2xl">Puesta en valor y Restauración de Salas y Equipos de Radiología</h2>
          </div>
          Equipamiento de Radiología Convencional y Digital, Equipos de Sala y Rodantes, Arcos en C y Mamógrafos.
        </div>
      </div>

      <div class="card">
        <div class="card-image bg-cover bg-no-repeat">
          <img src="@/assets/images/template.png" alt="image" class="">
        </div>
        <div class="card-body p-3">
          <div class="card-title">
            <h2 class="text-2xl">Diseño y Realizacion de Sistemas de Integración de Tecnologías de Diagnóstico</h2>
          </div>
          Digitalización de Equipos con Panel de Detección Directa sin partes móviles. Sistemas de Radiología Digital Directa.
        </div>
      </div>

      <div class="card">
        <div class="card-image bg-cover bg-no-repeat">
          <img src="@/assets/images/template.png" alt="image" class="">
        </div>
        <div class="card-body p-3">
          <div class="card-title">
            <h2 class="text-2xl">Contratos de Alquiler de Equipos Radiológicos</h2>
          </div>
          Equipamiento de Radiología Convencional y Digital, Equipos de Sala y Rodantes, Arcos en C y Mamógrafos.
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  title: 'Ingeray - Home'
}
</script>

<style scoped>
  .row{
    display: flex;
    flex-wrap: wrap;
  }
  .cards{
    padding: 1rem 1rem;
    row-gap: 1rem;
    column-gap: 1rem;
  }
  .card{
    width: 30%;
    box-shadow: 10px 10px 60px -8px rgba(0,0,0,.2);
    background: rgba(255, 255, 255, .3);
    backdrop-filter: blur(10px);
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, .3);
    overflow: hidden;
  }
  .card-title{
    border-bottom: 2px solid rgb(255, 255, 255);
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
  .card-image{
    object-fit: cover;
    object-position: 50% 50%;
  }
  .card-footer{
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1vh;
    padding-bottom: 3vh;
  }

  @media screen and (max-width: 900px){
    .cards{
      gap: 0;
    }
    .card{
      width: 45%;
      margin: .5rem 0;
    }
  }
  @media screen and (max-width: 650px){
    .cards{
      gap: 0;
    }
    .card{
      width: 45%;
    }
  }
  @media screen and (max-width: 615px){
    .card{
      width: 80%;
    }
  }

  @media screen and (max-width: 414px){
    .card{
      width: 100%;
      height: fit-content;
    }
  }

</style>
