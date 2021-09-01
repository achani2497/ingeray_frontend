<template>
    <div class="row">
        <div class="cards w-full flex flex-wrap justify-around">
            <div v-for="(servicio, index) in servicios" :key="index" class="card">
                <div class="card-image bg-cover bg-no-repeat">
                    <img loading="lazy" :src="servicio.imagen" alt="image">
                </div>
                <div class="card-body p-3">
                    <div class="card-title">
                        <h2 class="text-2xl">{{servicio.nombreServicio}}</h2>
                    </div>
                    <div v-if="servicio.titulo">
                        <div class="title">{{servicio.titulo}}</div>
                        <div class="sub-title">{{servicio.subtitulo}}</div>
                    </div>
                    <p class="text-lg">{{servicio.descripcion}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .row{
        display: flex;
        flex-wrap: wrap;
        background-color: #e1e1e1;
    }
    .cards{
        padding: 1rem 1rem;
        row-gap: 3rem;
        column-gap: 1rem;
    }
    .card{
        width: 30%;
        box-shadow: 10px 10px 60px -8px rgba(0,0,0,.2);
        border-radius: 25px;
        background: #e1e1e1;
		box-shadow:  20px 20px 40px #bfbfbf,
					-20px -20px 40px #ffffff;
        overflow: hidden;
    }
    .card-title{
        border-bottom: 2px solid rgb(255, 255, 255);
        padding-bottom: 5px;
        margin-bottom: 5px;
        overflow: hidden;
    }
    .card-image{
        object-fit: contain;
        height: 200px;
        background-image: url('https://picsum.photos/200/300');
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
<script>
export default {
    title: 'Servicios',
    data: function(){
        return{
            lastScrollPosition:0,
            filtro:'',
            showNavbar: false,
            servicios:[
                {
                    nombreServicio:'Servicio Técnico a Demanda',
                    titulo: 'Evaluación y Diagnóstico',
                    subtitulo: 'PRIMER VISITA SIN COSTO',
                    descripcion: 'Contamos con un amplio plantel de técnicos e ingenieros especializados en marcas nacionales e internacionales. Si aún no eres cliente, solicitá tu primer visita de evaluación y diagnóstico técnico escribiéndonos por correo a serviciotecnico@ingeray.com.ar o si preferís también podrás contactarte por whatsapp al +54 9 11 5504-4427',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreServicio:'Servicios de Post-Venta',
                    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, esse? Atque nam placeat aliquid totam obcaecati labore, dolor illo rerum eum consequuntur amet libero quo fugiat cum animi aperiam rem.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreServicio:'Abonos de Mantenimiento',
                    descripcion: 'Conocé las ventajas de estar permanentemente asistido por profesionales técnicos en tus servicios de diágnostico. Optá por el Servicio a Demanda o por Visitas periódicas a programar. Diseñamos cada propuesta a la medida del cliente para brindar el mejor y más efectivo Servicio de Mantenimiento Correctivo y Preventivo.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreServicio:'Asistencia Técnica Remota',
                    descripcion: 'Ahorrá tiempo y dinero de visitas técnicas contratando el Servicio de Asistencia Remota de Equipos Digitalizados. Tanto para equipamiento de radiología convencional como digital, equipos de sala, rodantes, arcos en C y mamógrafos. Accedé a el mejor equipo técnico en línea.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreServicio:'Cálculo de Blindaje, Planos, Obra de Blindaje y Tramites para la obtención de Certificaciones Homologadas',
                    descripcion: 'Desarrollamos Proyectos Completos para Servicios de Diagnóstico por Imágenes. Cálculo, Planimetría y Gestión del Blindaje Radiosanitario, nos encargamos de todo por vos, tanto de la confección de planos, presentación y seguimiento de Trámites ante el Ministerio de Salud de la Nación de todas las jurisdicciones nacionales. Contamos con todas las soluciones a las necesidades de Blindajes y Habilitaciones. Gestión y Obtención de las Certificaciones Aprobadas por Radiofísica Sanitaria. Obra completa de Blindaje materiales homologados. Relevamientos de Blindajes e Informes Técnicos para su adecuación.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreServicio:'Digitalización e Integración de Tecnologías de Diagnostico Medido',
                    descripcion: 'Ofrecemos a nuestros clientes el Servicio de Digitalización e Integración de Tecno-logías de Diágnostico. Tanto Digitalizacion de Equipos con Panel de Detección Directa sin partes móviles como Sistemas de Radiología Digital Directa. Evaluamos el estado de situacion del equipamiento existente y brindamos soluciones acordes a cada caso, generamos plan de acción e incorporación de nueva tecnología y brindamos asesoramiento y soporte en la puesta en marcha.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreServicio:'Puesta en Valor y Restauración de Equipos Clásicos',
                    descripcion: 'Los equipos clásicos han demostrado ser durables, funcionales y seguros. No te deshagas de tu equipamiento de diágnostico, podés modernizar tus equipos clásicos con la mejor tecnología. Comunicate con nosotros para solicitar tanto asesoramiento como un presupuesto a medida para la Puesta en Valor y Restauración de tus equipos de diagnóstico por imágenes.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                },
                {
                    nombreServicio:'Proyectos de diseño de ambientación de equipos y salas de pediatría',
                    descripcion: 'Adecuar la imagen del equipamiento de diagnóstico y las áreas pediátricas para que los pequeños se sientan a gusto cuando tengan que acudir al médico, es algo que viene preocupando hace bastante tiempo. Contamos con los mejores profesionales y diseñadores especializados Proyectos de Ambientación. Ponete en contacto para la generación ambientes amigables que contribuyan a reducir la ansiedad a través de la decoración y el color para crear un ambiente acogedor que ayude a reducir el estrés de los niños.',
                    // imagen:require('../assets/images/equipo-rayos-x-digital.jpg')
                    imagen:''
                }
            ],
        }
    },
}
</script>