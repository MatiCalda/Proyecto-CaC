const products = [
    {
        id: 1,
        nombre: "Pantalla Led Samsung Np-r420 14.0 Reg 40 Pines",
        img: "../img/Products/D_NQ_NP_810980-MLA47325699671_092021-O.webp",
        precio: 11900,
        descripcion: "lorem insump 1",
        stock: 10
    },
    {
        id: 2,
        nombre: "Silla Gamer Pc Escritorio Sillón Ergonómico Acero Inoxidable",
        img: "../img/Products/D_NQ_NP_867798-MLA48662490744_122021-O.webp",
        precio: 2000,
        descripcion: "lorem insump 2",
        stock: 20
    },
    {
        id: 3,
        nombre: "Producto 3",
        img: "../img",
        precio: 3000,
        descripcion: "lorem insump 3",
        stock: 30
    },
    {
        id: 4,
        nombre: "Buffer",
        img: "../img/",
        precio: 4000,
        stock: 40
    },
    {
        id: 5,
        nombre: "Smartphones varios modelos",
        img: "../img/",
        precio: 5000,
        descripcion: "lorem insump 5",
        stock: 50
    },
    {
        id: 6,
        nombre: "Celular",
        img: "../img/",
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
    if(localStorage.getItem('cart') == undefined){ // si no existe el carrito
        localStorage.setItem("cart", JSON.stringify(theCart));
    }else{
        theCart = JSON.parse(localStorage.getItem("cart"));
    }
    return theCart;
}

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
        });
    });
    
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

