const products = [
    {
        id: 1,
        nombre: "Pantalla Led Samsung Np-r420 14.0 Reg 40 Pines",
        img: "../img/Productos/Monitor.jpeg",
        precio: 11.900,
        descripcion: "lorem insump 1",
        stock: 10
    },
    {
        id: 2,
        nombre: "Silla Gamer Pc",
        img: "../img/Productos/Silla gamer.jpeg",
        precio: 2000,
        descripcion: "lorem insump 2",
        stock: 20
    },
    {
        id: 3,
        nombre: "Kit de Pc completa",
        img: "../img/Productos/Pc Completa Intel I5 + Monitor 19 Led +8gb +hd 1 Tb +kit.jpeg",
        precio: 3000,
        descripcion: "lorem insump 3",
        stock: 30
    },
    {
        id: 4,
        nombre: "Kit Strike 4 en 1",
        img: "../img/Productos/Kit Xtrike-me Gamer 4 En 1.jpeg",
        precio: 4000,
        stock: 40
    },
    {
        id: 5,
        nombre: "Pc Armada Intel Core i7",
        img: "../img/Productos/Computadora armada.jpeg",
        precio: 5000,
        descripcion: "lorem insump 5",
        stock: 50
    },
    {
        id: 6,
        nombre: "Kit Pc, Monitor , Parlantes, Auriculares, Mouse y Teclado",
        img: "../img/Productos/imagen.jpeg",
        precio: 10000,
        descripcion: "lorem insump 6",
        stock: 90
    }
];

class ProductCart {
    constructor(producto, cantidad) {
        this.product = producto;
        this.cantidad = cantidad;
    }
};


const cart = obtenerCarrito();
// Convertimos el array de objetos en un formato tipo JSON
const productosEnStorage = JSON.stringify(products);
// Guardamos en el localstorage el array JSON convertido de productos
localStorage.setItem("products", productosEnStorage);

function obtenerCarrito(){
    let theCart = [];
    if(localStorage.getItem('carrito_2') == undefined){ // si no existe el carrito
        localStorage.setItem("carrito_2", JSON.stringify(theCart));
    }else{
        theCart = JSON.parse(localStorage.getItem("carrito_2"));
    }

    return theCart;
}
// let productosObtenidosDelStorage = JSON.parse(localStorage.getItem("products"));

// let productosObtenidosDelStorage = JSON.parse(localStorage.getItem("products"));

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
    p3.className = "d-none";
    p3.innerText = `${product.id}`;

    const divRight = document.createElement("div");
    divRight.className = "text-right"

    const button = document.createElement("button");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#formaDePago");
    button.className = "btnComprar btn btn-info";
    button.innerText = "Comprar";

    const divRight2 = document.createElement("div");
    divRight2.className = "text-right"


    // const button3 = document.createElement("button");
    // button3.className = "badge-pill badge-light py-1";
    // button3.innerText = "Ver Carrito";

    const button2 = document.createElement("button");
    button2.setAttribute("data-id", product.id);
    button2.addEventListener("click", e => { // agrega el producto al carrito
        let idProduct = parseInt(e.target.getAttribute("data-id"));
        products.forEach(producto => {
            if (producto.id === idProduct) {
                let prodCart = new ProductCart(producto, 1);
                console.log("hasta aca llegue1")
                let itemCarrito = cart.find(item => { return item.product.id === idProduct; });
                console.log("hasta aca llegue2")
                if (itemCarrito == undefined) {   // si no encontro el elemento en el carrito
                    cart.push(prodCart);
                } else {
                    itemCarrito.cantidad++;
                }
                const carritoString = JSON.stringify(cart);
                console.log(carritoString);
                localStorage.setItem("carrito_2", carritoString);
            }
        });
    });
    button2.className = "btnAgregar  badge-pill badge-light py-1";
    button2.innerText = "Agregar al Carrito";

    const icon = document.createElement("i");
    icon.className = "bi bi-cart-plus ri-xl"

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";

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
    // Guardando el contenido del titulo de la card
    const titulo = card.querySelector(".card-title").textContent;
    // Buscando y guardando producto en el carrito y en el localStorage
    products.forEach(producto => {
        if (producto.nombre === titulo) {
            carrito.push(producto);
            // funcion para guardar el array
            guardarEnlocalStorage
        }
    });
    // Redirigiendo a carrito
    window.location.href = "cart.html"

}
/*
// Evento agregar al carrito
//  Enlazando todos los botones de agregar
const botonesAgregar = document.querySelectorAll(".btnAgregar");
// Recorriendo los botones, agregando la escucha de evento click para lanzar funcion agregarCarrito
botonesAgregar.forEach((btn) => {
    btn.addEventListener("click", agregarCarrito)
});
*/
function agregarCarrito(e) {
    // guardando los datos del boton clickeado
    const boton = e.target;
    // Guardando los datos de la card al que pertenece el boton
    const card = boton.closest(".card");
    // Guardando el contenido del titulo de la card
    const titulo = card.querySelector(".card-title").textContent;
    // Buscando y guardando producto en el carrito
    products.forEach(producto => {
        if (producto.id === id) {
            // Quiero recorrer el array carrito y si el producto ya existe, crear cantidad y sumarle 1
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
const btnCarrito = document.getElementById("carrito");
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
