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

class ProductCart {
    constructor(producto, cantidad) {
        this.product = producto;
        this.cantidad = cantidad;
    }
};

const cart = [];
// Convertimos el array de objetos en un formato tipo JSON
const productosEnStorage = JSON.stringify(products);
// Guardamos en el localstorage el array JSON convertido de productos
localStorage.setItem("products", productosEnStorage);

// let productosObtenidosDelStorage = JSON.parse(localStorage.getItem("products"));

products.forEach(product => {
    // Enlazando el div contenedor
    const cards = document.getElementById("products");
    // Creacion de las etiquetas con sus clases(.className) y el contenido (.innerText)
    const card = document.createElement("div");
    card.className = "card bg-transparent";
    card.id = `${product.id}`

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

    const divRight = document.createElement("div");
    divRight.className = "text-right"

    const button = document.createElement("button");
    button.className = "btn btn-info";
    button.innerText = "Comprar";

    const divRight2 = document.createElement("div");
    divRight2.className = "text-right"

    // const div = document.createElement("div");
    // const div2 = document.createElement("div");

    const button3 = document.createElement("button");
    button3.className = "badge-pill badge-light py-1";
    button3.innerText = "Ver Carrito";

    const button2 = document.createElement("button");
    button2.setAttribute("data-id", product.id);
    button2.addEventListener("click", e => {
        let idProduct = parseInt(e.target.getAttribute("data-id"));
        products.forEach(producto => {
            if (producto.id === idProduct) {
                let prodCart = new ProductCart(producto, 1);
                cart.push(prodCart);
                const carritoString = JSON.stringify(cart);
                localStorage.setItem("carrito_2", carritoString);
                console.log(prodCart.product.nombre);
            }
        });
    });
    button2.className = "badge-pill badge-light py-1";
    button2.innerText = "Agregar al Carrito";

    const icon = document.createElement("i");
    icon.className = "bi bi-cart-plus ri-xl"

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";


    const addCartBtn = document.createElement("button");
    addCartBtn.setAttribute("data-id", product.id);
    addCartBtn.addEventListener("click", e => {
        let idProduct = parseInt(e.target.getAttribute("data-id"));

        products.forEach(producto => {
            if (producto.id === idProduct) {
                let prodCart = new ProductCart(producto, 1);
                cart.push(prodCart);
                const carritoString = JSON.stringify(cart);
                localStorage.setItem("carrito_2", carritoString);
                console.log(prodCart.product.nombre);
            }
        });
    });


    cards.append(card);
    card.append(img, cardBody, cardFooter);
    cardBody.append(h5, p, p2, divRight);
    divRight.append(button);
    cardFooter.append(divRight2);
    divRight2.append(button2, button3);
    button2.append(icon);
});

const cards = document.querySelectorAll(".card");
cards.forEach((btnComprar) => {
    btnComprar.addEventListener("click", selectorBotones)
});

function selectorBotones(e) {
    const texto = e.target.textContent;
    console.log(texto);
    if (texto === "Comprar") {
        comprar(e)
    } if (texto === "Agregar al Carrito") {
        agregarCarrito(e)
    } if (texto === "Ver Carrito") {
        verCarrito()
    }
    return;
}

function comprar(e) {
    const boton = e.target;
    const card = boton.closest(".card");
    const titulo = card.querySelector(".card-title").textContent;

    products.forEach(producto => {
        if (producto.nombre === titulo) {
            carrito.push(producto);
            const carritoString = JSON.stringify(carrito);
            localStorage.setItem("carrito", carritoString);
            console.log(localStorage.getItem("carrito"));
        }
    });

    window.location.href = "cart.html"

}

function agregarCarrito(e) {
    const boton = e.target;
    const card = boton.closest(".card");
    const titulo = card.querySelector(".card-title").textContent;

    products.forEach(producto => {
        if (producto.nombre === titulo) {
            carrito.push(producto);
            console.log(carrito);
        }
    });
}

function verCarrito() {
    const carritoString = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoString);
    // console.log(localStorage.getItem("carrito"));
    window.location.href = "cart.html"
}
