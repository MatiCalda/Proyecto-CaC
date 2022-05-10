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
    },
    {
        id: 6,
        nombre: "Celular",
        img: "../img/imagen.jpg",
        precio: 10000,
        descripcion: "lorem insump 6",
        stock: 90
    }
];


// Convertimos el array de objetos en un formato tipo JSON
const productosEnStorage = JSON.stringify(products);
// Guardamos en el localstorage el array JSON convertido de productos
localStorage.setItem("products", productosEnStorage);

let productosObtenidosDelStorage = JSON.parse(localStorage.getItem("products"));

products.forEach(product => {
    // Enlazando el div contenedor
    const cards = document.getElementById("products");
    // Creacion de las etiquetas con sus clases y el contenido
    const col = document.createElement("div");
    col.className = "col-md-4 pb-4";

    const card = document.createElement("div");
    card.className = "card ";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = product.img;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.innerText = product.nombre;

    const descripcion = document.createElement("p");
    descripcion.className = "card-text";
    descripcion.innerText = product.descripcion;

    const small = document.createElement("small");
    small.className = "text-muted";
    small.innerHTML = "Stock: " + product.stock + " Unidades <br></br>";

    const container = document.createElement("div");
    container.className = "container-fluid";

    const row = document.createElement("div");
    row.className = "row justify-content-between";

    const colPrecio = document.createElement("div");
    colPrecio.className = "col alignt-middle";

    const precio = document.createElement("p");
    precio.className = "card-text";
    precio.innerText = "$ " + product.precio;

    const colButton = document.createElement("div");
    colButton.className = "col text-right";

    const comprarButton = document.createElement("button");
    comprarButton.className = "btn btn-info";
    comprarButton.innerText = "Comprar";

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";

    const textRight = document.createElement("div");
    textRight.className = "text-right";
    
    const addCartBtn = document.createElement("button");
    addCartBtn.id = "producto" + product.id;
    addCartBtn.href = "#";
    addCartBtn.className = "text-decoration-none badge-pill badge-light py-1";
    addCartBtn.innerHTML = "Añadir al carro <i class=\"bi bi-cart-plus ri-xl\"></i>";

    cards.append(col);
    col.append(card);
    card.append(img, cardBody, cardFooter);
    cardBody.append(titulo, descripcion, small, container);
    container.append(row);
    row.append(colPrecio, colButton);
    colPrecio.append(precio);
    colButton.append(comprarButton);
    cardFooter.append(textRight);
    textRight.append(addCartBtn);

});




