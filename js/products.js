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
    // Creacion de las etiquetas con sus clases(.className) y el contenido (.innerText)
    const card = document.createElement("div");
    card.className = "card bg-transparent";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = product.img;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const h5 = document.createElement("h5");
    h5.className = "card-title text-light";
    h5.innerText = product.nombre;

    const p = document.createElement("p");
    p.className = "card-text text-light";
    p.innerText = product.descripcion;

    const p2 = document.createElement("p");
    p2.className = "card-text text-light";
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
