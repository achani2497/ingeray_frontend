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
]