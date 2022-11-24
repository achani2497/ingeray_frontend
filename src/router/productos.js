export default [
    {
        path: 'mamografos',
        name: 'Mamógrafos',
        component: () => import('../components/Productos/subcategorias/mamografos.vue'),
        props: {
            slug: 'mamografos'
        }
    },
    {
        path: 'captores-digitales',
        name: 'Captores Digitales',
        component: () => import('../components/Productos/subcategorias/captoresDigitales.vue'),
        props: {
            slug: 'captores-digitales'
        }
    },
    {
        path: 'equipos-alta-frecuencia',
        name: 'Equipos con fuente de Alta Frecuencia',
        component: () => import('../components/Productos/subcategorias/altaFrecuencia.vue'),
        props: {
            slug: 'equipos-alta-frecuencia'
        }
    },
    {
        path: 'equipos-frecuencia-industrial',
        name: 'Equipos con fuente de Frecuencia Industrial',
        component: () => import('../components/Productos/subcategorias/frecuenciaIndustrial.vue'),
        props: {
            slug: 'equipos-frecuencia-industrial'
        }
    },
    {
        path: 'equipos-moviles',
        name: 'Equipos Móviles',
        component: () => import('../components/Productos/subcategorias/equiposMoviles.vue'),
        props: {
            slug: 'equipos-moviles'
        }
    },
    {
        path: 'paneles',
        name: 'Paneles de Adquisición Digital Directa de Imágenes',
        component: () => import('../components/Productos/subcategorias/paneles.vue'),
        props: {
            slug: 'paneles'
        }
    },
    {
        path: 'arcos-c',
        name: 'Arcos en C',
        component: () => import('../components/Productos/subcategorias/arcoc.vue'),
        props: {
            slug: 'arcos-c'
        }
    },
    // {
    //     path: '',
    //     name: '',
    //     component: () => import('../components/Productos/subcategorias/'),
    //     props: {
    //         slug: ''
    //     }
    // },
]