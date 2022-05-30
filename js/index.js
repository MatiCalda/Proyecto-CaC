const products = [
    {
        id: 1,
        nombre: "Pantalla Led Samsung Np-r420 14.0 Reg 40 Pines",
        img: "Monitor.jpg",
        precio: 12500,
        descripcion: "Pantalla Led Samsung Np-r420 14.0 Reg 40 Pines",
        stock: 10,
        destacado: false,
        categoria: "componentes"
    },
    {
        id: 2,
        nombre: "Silla Gamer Pc",
        img: "Silla gamer.jpg",
        precio: 22999,
        descripcion: "Diseñada para quienes pasan muchas horas frente a la computadora. Disfrutá sin descuidar las zonas lumbar, dorsal y cervical.",
        stock: 20,
        destacado: true,
        categoria: "componentes"
    },
    {
        id: 3,
        nombre: "Kit de Pc completa",
        img: "Pc Completa Intel I5 + Monitor 19 Led +8gb +hd 1 Tb +kit.jpg",
        precio: 53999,
        descripcion: "Pc Completa Intel I5 + Monitor 19 Led +8gb +hd 1 Tb +kit",
        stock: 30,
        destacado: false,
        categoria: "pc"
    },
    {
        id: 4,
        nombre: "Kit Xtrike 4 en 1",
        img: "Kit Xtrike-me Gamer 4 En 1.jpg",
        precio: 1932,
        descripcion: "Kit Xtrike Gamer de Mouse, Teclado, Mousepad y Auriculares",
        stock: 40,
        destacado: true,
        categoria: "componentes"
    },
    {
        id: 5,
        nombre: "Pc Armada Intel Core i7",
        img: "Computadora armada.jpg",
        precio: 68999,
        descripcion: "Pc Armada Intel Core I7 1 Tb 16gb De Ram Graficos Hd Nuevas",
        stock: 50,
        destacado: true,
        categoria: "pc"
    },
    {
        id: 6,
        nombre: "Kit Pc, Monitor , Parlantes, Auriculares, Mouse y Teclado",
        img: "imagen.jpg",
        precio: 89900,
        descripcion: "Kit Pc, Monitor , Parlantes, Auriculares, Mouse y Teclado",
        stock: 90,
        destacado: false,
        categoria: "pc"
    }
];

class ProductCart {
    constructor(producto, cantidad) {
        this.product = producto;
        this.cantidad = cantidad;
    }
};

const cart = obtenerCarrito();

function obtenerCarrito() {
    let theCart = [];
    if (localStorage.getItem('cart') == undefined) { // si no existe el carrito
        localStorage.setItem("cart", JSON.stringify(theCart));
    } else {
        theCart = JSON.parse(localStorage.getItem("cart"));
    }
    return theCart;
}

// Convertimos el array de objetos en un formato tipo JSON
// Guardamos en el localstorage el array JSON convertido de productos
localStorage.setItem("products", JSON.stringify(products));


let botonesAgregar = document.querySelectorAll('.btnAgregar');
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', e => {
        let idProduct = parseInt(e.target.getAttribute("data-id"));
        console.log("idProduct: " + idProduct);
        products.forEach(producto => {
            if (producto.id === idProduct) {
                let prodCart = new ProductCart(producto, 1);
                let itemCarrito = cart.find(item => { return item.product.id === idProduct; });
                if (itemCarrito == undefined) {   // si no encontro el elemento en el carrito
                    cart.push(prodCart);
                } else {
                    itemCarrito.cantidad++;
                }
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        });
        actualizarIconoCarrito();

    })
}); 

const celularesnav = document.getElementById("celularesnav");
const accesoriosnav = document.getElementById("accesoriosnav");
const pcnav = document.getElementById("pcnav");
const notebooknav = document.getElementById("notebooknav");
const componentesnav = document.getElementById("componentesnav");

celularesnav.addEventListener("click", () => {
    localStorage.setItem("categoria", "celulares");
});
accesoriosnav.addEventListener("click", () => {
    localStorage.setItem("categoria", "accesorios");
});
pcnav.addEventListener("click", () => {
    localStorage.setItem("categoria", "pc");
});
notebooknav.addEventListener("click", () => {
    localStorage.setItem("categoria", "notebook");
});
componentesnav.addEventListener("click", () => {
    localStorage.setItem("categoria", "componentes");
});
