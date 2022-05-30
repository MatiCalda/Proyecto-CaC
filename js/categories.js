// const valor = localStorage.getItem("categoria");
// const productos = localStorage.getItem("productos");
// function mostrar(valor) {
//     // Enlazando el div contenedor
//     const cards = document.getElementById("products");
//     let html = "";
//     for (let i = 0; i < productos.length; i++) {
//         if (productos[i].categoria === valor) {
//             html = `<div class="card">
//             <img src= ${products[i].img} class="card-img-top" alt="${productos[i].nombre}">
//             <div class="card-body">
//                 <h5 class="card-title">${productos[i].nombre}</h5>
//                 <p class="card-text">${productos[i].descripcion}
//                 </p>
//                 <div class="text-right">
//                     <p class="card-text">${productos[i].precio}</p><button data-toggle="modal" data-target="#formaDePago"
//                         class="btnComprar btn btn-info col">Comprar</button>
//                 </div>
//             </div>
//             <div class="card-footer">
//                 <div class="text-right"><a href="javascript:void(0)" data-id="6"
//                         class="btnAgregar text-decoration-none badge-pill badge-light py-1">Agregar al Carrito<i
//                             class="bi bi-cart-plus ri-xl"></i></a></div>
//             </div>
//         </div>`
//         }
//         cards.innerHTML= html;
//     }
// }