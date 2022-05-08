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

products.forEach(product => {
    // Enlazando el div contenedor
    const cards = document.getElementById("products");
    // Creacion de las etiquetas con sus clases y el contenido
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = product.img;
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerText = product.nombre;
    const p = document.createElement("p");
    p.className = "card-text";
    p.innerText = product.descripcion;
    const p2 = document.createElement("p");
    p2.className = "card-text";
    p2.innerText = product.precio;
    const button = document.createElement("button");
    button.className = "btn btn-secondary";
    button.innerText = "Agregar al carrito";
    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";
    const small = document.createElement("small");
    small.className = "text-muted";
    small.innerText = product.stock
    
    cards.append(card);
    card.append(img, cardBody, cardFooter);
    cardBody.append(h5, p, p2, button);
    cardFooter.append(small);

});





















// for (let i = 0; i < products.length; i++) {
//     var titulo = document.getElementById("titulo"+(i+1));
//     titulo.innerText = products[0].nombre;
//     var imagen = document.getElementById("imagen"+(i+1));
//     imagen.src = products[0].img;
//     var precio = document.getElementById("precio"+(i+1));
//     precio.innerText = "Precio: $" + products[0].precio;
//     var descripcion = document.getElementById("descripcion"+(i+1));
//     descripcion.innerText = "" + products[0].descripcion;
//     var stock = document.getElementById("stock"+(i+1));
//     stock.innerText = "Stock: " + products[0].stock;
// }


