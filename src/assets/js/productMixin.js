import ProductosVeterinarios from '../js/productos_veterinarios.json'
export const productMixin = {
    methods: {
        getEquipmentInfo: function (name) {
            return ProductosVeterinarios.productos_veterinarios.find((producto) => producto.product_dev_name === name)

        },
        getVetCarouselImages: function (product_name) {
            const product = this.getEquipmentInfo(product_name)
            return product.product_carousel_images
        },
        getAllProducts() {
            return ProductosVeterinarios.productos_veterinarios
        }
    }
}