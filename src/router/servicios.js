export default [
    {
        path: 'alquileres',
        name: 'Alquiler de equipamiento',
        component: () => import('../components/Servicios/alquileres.vue'),
        props: {
            slug: "alquileres"
        }
    },
    {
        path: 'puesta-en-valor',
        name: 'Puesta en Valor y Restauracion',
        component: () => import('../components/Servicios/puestaEnValor'),
        props: {
            slug: "puesta-en-valor"
        }
    },
    {
        path: 'mantenimiento',
        name: 'Abonos de Mantenimiento',
        component: () => import('../components/Servicios/abonosDeMantenimiento'),
        props: {
            slug: "mantenimiento"
        }
    },
    {
        path: 'servicio-tecnico',
        name: 'Servicio Técnico sobre Pedido',
        component: () => import('../components/Servicios/servicioTecnico'),
        props: {
            slug: "servicio-tecnico"
        }
    },
    {
        path: 'digitalizacion',
        name: 'Digitalización e Integración',
        component: () => import('../components/Servicios/digitalizacion'),
        props: {
            slug: "digitalizacion"
        }
    },
    {
        path: 'asistencia-remota',
        name: 'Asistencia Técnica Remota',
        component: () => import('../components/Servicios/asistenciaRemota'),
        props: {
            slug: "asistencia-remota"
        }
    },
    {
        path: 'calculo-de-blindaje',
        name: 'Calculo y Obra de Blindaje',
        component: () => import('../components/Servicios/calculoDeBlindaje'),
        props: {
            slug: "calculo-de-blindaje"
        }
    },
    {
        path: 'ambientacion',
        name: 'Ambientación',
        component: () => import('../components/Servicios/ambientacion'),
        props: {
            slug: "ambientacion"
        }
    }
]