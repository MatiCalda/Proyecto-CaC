const products = [
    {
        id: 1,
        nombre: "Producto 1",
        img: "../img/imagen.jpg",
        precio: 1000,
        descripcion: "lorem insump 1",
        stock: 10
    },
    {
        id: 2,
        nombre: "Producto 2",
        img: "../img/imagen.jpg",
        precio: 2000,
        descripcion: "lorem insump 2",
        stock: 20
    },
    {
        id: 3,
        nombre: "Producto 3",
        img: "../img/imagen.jpg",
        precio: 3000,
        descripcion: "lorem insump 3",
        stock: 30
    },
    {
        id: 4,
        nombre: "Producto 4",
        img: "../img/imagen.jpg",
        precio: 4000,
        descripcion: "lorem insump 4",
        stock: 40
    },
    {
        id: 5,
        nombre: "Producto 5",
        img: "../img/imagen.jpg",
        precio: 5000,
        descripcion: "lorem insump 5",
        stock: 50
    }
];

for (let i = 0; i < products.length; i++) {
    var titulo = document.getElementById("titulo"+(i+1));
    titulo.innerText = products[0].nombre;
    var imagen = document.getElementById("imagen"+(i+1));
    imagen.src = products[0].img;
    var precio = document.getElementById("precio"+(i+1));
    precio.innerText = "Precio: $" + products[0].precio;
    var descripcion = document.getElementById("descripcion"+(i+1));
    descripcion.innerText = "" + products[0].descripcion;
    var stock = document.getElementById("stock"+(i+1));
    stock.innerText = "Stock: " + products[0].stock;
}


