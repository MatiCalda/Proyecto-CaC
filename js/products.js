class ProductCart {
    constructor(producto, cantidad) {
        this.product = producto;
        this.cantidad = cantidad;
    }
};

const cart = obtenerCarrito();
const products = obtenerProductos();
console.log(products);
obtenerCards(products);

// Enlazamos las categorias
const celulares = document.getElementById("celulares");
const accesorios = document.getElementById("accesorios");
const pc = document.getElementById("pc");
const notebook = document.getElementById("notebook");
const componentes = document.getElementById("componentes");

// Agregamos eventos a los links
celulares.addEventListener("click", e => {
    // Prevenimos que los links recarguen la pagina
    e.preventDefault();
    // guardamos el valor dei id de categoria
    let valor = e.target.getAttribute("id");
    // Filtramos el array
    productos = products.filter(p => p.categoria == valor);
    // Imprimimos las cards
    imprimirCards(productos);
});
accesorios.addEventListener("click", e => {
    e.preventDefault();
    let valor = e.target.getAttribute("id");
    productos = products.filter(p => p.categoria == valor);
    obtenerCards(productos);
});
pc.addEventListener("click", e => {
    e.preventDefault();
    let valor = e.target.getAttribute("id");
    productos = products.filter(p => p.categoria == valor);
    obtenerCards(productos);
});
notebook.addEventListener("click", e => {
    e.preventDefault();
    let valor = e.target.getAttribute("id");
    productos = products.filter(p => p.categoria == valor);
    obtenerCards(productos);
});
componentes.addEventListener("click", e => {
    e.preventDefault();
    let valor = e.target.getAttribute("id");
    productos = products.filter(p => p.categoria === valor);
    obtenerCards(productos);
});


function obtenerCarrito() {
    let theCart = [];
    if (localStorage.getItem('cart') == undefined) { // si no existe el carrito
        localStorage.setItem("cart", JSON.stringify(theCart));
    } else {
        theCart = JSON.parse(localStorage.getItem("cart"));
    }
    return theCart;
}

function obtenerProductos() {
    let products;
    products = JSON.parse(localStorage.getItem("products"));
    return products;
}
function obtenerCards(productos) {
    // Enlazando el div contenedor
    const cards = document.getElementById("products");
    // Limpiando el contenedor
    cards.innerHTML="";
    productos.forEach(product => {
        // Creacion de las etiquetas con sus clases(.className) y el contenido (.innerText)
        const card = document.createElement("div");
        card.className = "card bg-light";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = "../img/Productos/" + product.img;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = product.nombre;

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerText = product.descripcion;

        const p2 = document.createElement("p");
        p2.className = "card-text";
        p2.innerText = "$ " + product.precio.toLocaleString("en");

        const p3 = document.createElement("p");
        p3.className = "d-none";
        p3.innerText = `${product.id}`;

        const divRight = document.createElement("div");
        divRight.className = "mt-auto text-right"

        const button = document.createElement("button");
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#formaDePago");
        button.className = "btnComprar btn btn-info";
        button.innerText = "Comprar";

        const divRight2 = document.createElement("div");
        divRight2.className = "text-right"

        const button2 = document.createElement("a");
        button2.href = ("javascript:void(0)");
        button2.setAttribute("data-id", product.id);
        button2.className = "btnAgregar text-decoration-none badge-pill badge-light py-1";
        button2.innerText = "Agregar al Carrito";
        button2.addEventListener("click", e => { // agrega el producto al carrito
            let idProduct = parseInt(e.target.getAttribute("data-id"));
            products.forEach(producto => {
                if (producto.id === idProduct) {
                    let prodCart = new ProductCart(producto, 1);
                    let itemCarrito = cart.find(item => { return item.product.id === idProduct; });
                    if (itemCarrito == undefined) {   // si no encontro el elemento en el carrito
                        cart.push(prodCart);
                    } else {
                        itemCarrito.cantidad++;
                    }
                    const carritoString = JSON.stringify(cart);
                    console.log(carritoString);
                    localStorage.setItem("cart", carritoString);
                }
                actualizarIconoCarrito();
            });
        });

        const icon = document.createElement("i");
        icon.className = "bi bi-cart-plus ri-xl"

        const cardFooter = document.createElement("div");
        cardFooter.className = "card-footer";

        cards.append(card);
        card.append(img, cardBody, cardFooter);
        cardBody.append(h5, p, divRight);
        divRight.append(p2, button);
        cardFooter.append(divRight2);
        divRight2.append(button2);
        button2.append(icon);
    });
}

