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
const carrito = [];

products.forEach(product => {
    // Enlazando el div contenedor
    const cards = document.getElementById("products");
    // Creacion de las etiquetas con sus clases(.className) y el contenido (.innerText)
    const card = document.createElement("div");
    card.className = "card bg-light";

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

    const p3 = document.createElement("p");
    p3.className = "d-none id";
    p3.innerText = `${product.id}`;

    const divRight = document.createElement("div");
    divRight.className = "text-right"

    const button = document.createElement("button");
    button.className = "btnComprar btn btn-info";
    button.innerText = "Comprar";

    const divRight2 = document.createElement("div");
    divRight2.className = "text-right"

    // const div = document.createElement("div");
    // const div2 = document.createElement("div");

    // const button3 = document.createElement("button");
    // button3.className = "badge-pill badge-light py-1";
    // button3.innerText = "Ver Carrito";

    const button2 = document.createElement("button");
    button2.className = "btnAgregar  badge-pill badge-light py-1";
    button2.innerText = "Agregar al Carrito";

    const icon = document.createElement("i");
    icon.className = "bi bi-cart-plus ri-xl"

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";

    // const small = document.createElement("small");
    // small.className = "text-muted";
    // small.innerText = product.stock

    cards.append(card);
    card.append(img, cardBody, cardFooter);
    cardBody.append(h5, p, p2, p3, divRight);
    divRight.append(button);
    cardFooter.append(divRight2);
    divRight2.append(button2);
    button2.append(icon);
});

// Evento comprar
// Enlazando a lista de botones comprar
const botonesComprar = document.querySelectorAll(".btnComprar");
// Recorriendo los botones, agregando la escucha de evento click para lanzar funcion comprar
botonesComprar.forEach((btn) => {
    btn.addEventListener("click", comprar)
});

function comprar(e) {
    // guardando los datos del boton clickeado
    const boton = e.target;
    // Guardando los datos de la card al que pertenece el boton
    const card = boton.closest(".card");
    // Guardando el id de la card
    const id = Number.parseInt(card.querySelector(".id").textContent);
    // Buscando y guardando producto en el carrito y en el localStorage
    products.forEach(producto => {
        if (producto.id === id) {
            carrito.push(producto);
    // Funcion para guardar el array
            guardarEnlocalStorage()
        }
    });
    // Redirigiendo a carrito
    window.location.href = "cart.html"

}

// Evento agregar al carrito
//  Enlazando todos los botones de agregar
const botonesAgregar = document.querySelectorAll(".btnAgregar");
// Recorriendo los botones, agregando la escucha de evento click para lanzar funcion agregarCarrito
botonesAgregar.forEach((btn) => {
    btn.addEventListener("click", agregarCarrito)
});

function agregarCarrito(e) {
    // guardando los datos del boton clickeado
    const boton = e.target;
    // Guardando los datos de la card al que pertenece el boton
    const card = boton.closest(".card");
    // Guardando el id de la card
    const id = Number.parseInt(card.querySelector(".id").textContent);
    // Buscando y guardando producto en el carrito
    products.forEach(producto => {
        if (producto.id === id) {
            carrito.push(producto);
            console.log(carrito);
        }
    });
}

// function verCarrito() {
//     const carritoString = JSON.stringify(carrito);
//     localStorage.setItem("carrito", carritoString);
//     console.log(localStorage.getItem("carrito"));
//     window.location.href = "cart.html"
// }

// Evento boton carrito
const btnCarrito = document.getElementById("btncarrito");
btnCarrito.addEventListener("click", botonCarrito);

function botonCarrito() {
    // funcion para guardar el array
    guardarEnlocalStorage()
    // Redirigiendo a carrito
    window.location.href = "cart.html"

}

function guardarEnlocalStorage() {
    const carritoString = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoString);
}