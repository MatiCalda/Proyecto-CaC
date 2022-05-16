const products = [
    {
        id: 1,
        nombre: "Pantalla Led Samsung Np-r420 14.0 Reg 40 Pines",
        img: "../img/Productos/Monitor.jpg",
        precio: 11900,
        descripcion: "Pantalla Led Samsung Np-r420 14.0 Reg 40 Pines",
        stock: 10
    },
    {
        id: 2,
        nombre: "Silla Gamer Pc",
        img: "../img/Productos/Silla gamer.jpg",
        precio: 2000,
        descripcion: "Diseñada para quienes pasan muchas horas frente a la computadora. Disfrutá sin descuidar las zonas lumbar, dorsal y cervical.",
        stock: 20
    },
    {
        id: 3,
        nombre: "Kit de Pc completa",
        img: "../img/Productos/Pc Completa Intel I5 + Monitor 19 Led +8gb +hd 1 Tb +kit.jpg",
        precio: 3000,
        descripcion: "Pc Completa Intel I5 + Monitor 19 Led +8gb +hd 1 Tb +kit",
        stock: 30
    },
    {
        id: 4,
        nombre: "Kit Strike 4 en 1",
        img: "../img/Productos/Kit Xtrike-me Gamer 4 En 1.jpg",
        precio: 4000,
        descripcion: "Kit Xtrike Gamer de Mouse, Teclado, Mousepad y Auriculares",
        stock: 40
    },
    {
        id: 5,
        nombre: "Pc Armada Intel Core i7",
        img: "../img/Productos/Computadora armada.jpg",
        precio: 5000,
        descripcion: "Pc Armada Intel Core I7 1 Tb 16gb De Ram Graficos Hd Nuevas",
        stock: 50
    },
    {
        id: 6,
        nombre: "Kit Pc, Monitor , Parlantes, Auriculares, Mouse y Teclado",
        img: "../img/Productos/imagen.jpg",
        precio: 10000,
        descripcion: "Kit Pc, Monitor , Parlantes, Auriculares, Mouse y Teclado",
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

