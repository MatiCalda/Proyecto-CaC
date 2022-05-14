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
const carrito = [];
let html = "";

// Enlazando el div contenedor
const cards = document.getElementById("products");

products.forEach(product => {
    // Creacion de las etiquetas con sus clases
    html +=
        `    <div class="card bg-light">
    <img class="card-img-top" src=${product.img}></img>
    <div class="card-body">
        <h5 class="card-title">${product.nombre}</h5>
        <p class="card-text">${product.descripcion}</p>
        <p class="card-text">${product.precio}</p>
        <p class="d-none">${product.id}</p>
        <div class="text-right">
         <button class="btnComprar btn btn-info" data-id=${product.id}>Comprar</button>
        </div>
    </div>
    <div class="card-footer text-right">
        <button class="btnAgregar  badge-pill badge-light py-1" data-id=${product.id}>
        Agregar al Carrito<i class="bi bi-cart-plus ri-xl"></i>
        </button>
    </div>
</div>`;
});

cards.innerHTML = html;

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
    // Guardando el contenido del atributo data-id del boton
    const idProduct = parseInt(boton.getAttribute("data-id"));
    // Buscando y guardando producto en el carrito
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === idProduct) {
            carrito.push(products[i]);
            console.log(carrito)
        }
    }
}

// Evento boton carrito
const btnCarrito = document.getElementById("btncarrito");
btnCarrito.addEventListener("click", botonCarrito);

function botonCarrito() {
    // funcion para guardar el array
    guardarEnlocalStorage
    // Redirigiendo a carrito
    window.location.href = "cart.html"

}

function guardarEnlocalStorage() {
    const carritoString = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoString);
}
