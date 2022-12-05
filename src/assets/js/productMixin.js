import ProductosVeterinarios from '../js/productos_veterinarios.json'
import Productos from '../js/productos.json'
export const productMixin = {
    methods: {
        getEquipmentInfo: function (name) {
            return ProductosVeterinarios.productos_veterinarios.find((producto) => producto.product_dev_name === name)

        },
        getProductEquipment: function(name) {
            return Productos.productos.find((producto) => producto.nombreCategoria === name);
        },
        getVetCarouselImages: function (product_name) {
            const product = this.getEquipmentInfo(product_name)
            return product.product_carousel_images
        },
        getAllProducts() {
            return ProductosVeterinarios.productos_veterinarios
        },
        enviarMensajeWhastapp: function () {
            const from = "54911...";
            var yourMessage = "testeando";
      
            let message = yourMessage.split(" ").join("%20");
      
            console.log("https://wa.me/" + from + "?text=%20" + message);
        }
    }
}