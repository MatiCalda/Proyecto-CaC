class producto {
    nombre 
    imagen
    descripcion 
    precio 
}

var carrito = {
    productos: [],
    agregarProducto: function(producto){
        this.productos.push(producto);
    }
};

