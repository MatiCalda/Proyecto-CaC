let productsLS;
productsLS = obtenerProductosLS();
loadHTMLFooter();
loadHTMLCards();

function loadHTMLCards() {
    productsLS.forEach(product => {
        if (product.destacado) {
            let html = `
            <div class="card bg-light">
                    <img class="card-img-top" src="img/Productos/${product.img}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.nombre}</h5>
                        <p class="card-text">${product.descripcion}</p>
                        <p class="card-text">$${product.precio}</p>
                        <div class="align-items-end">
                            <div class="text-right">
                                <button data-toggle="modal" data-target="#formaDePago"
                                    class="btnComprar btn btn-info">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="text-right">
                            <a href="javascript:void(0)" data-id="${product.id}"
                                class="btnAgregar text-decoration-none badge-pill badge-light py-1">
                                Agregar al Carrito<i class="bi bi-cart-plus ri-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            document.getElementById('productsIndex').innerHTML += html;
        }
    });

}

function loadHTMLFooter() {
    let html = `
    <br><br><br><br>
        <footer class="fixed-bottom text-center footer-style py-2">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col">
                        TecnoTienda™ Todos los derechos reservados
                    </div>
                    <div class="col">
                        <div class="row justify-content-center">
                            <div class="px-3">
                                <a target="_blank" href="https://www.Twitter.com" class="btn-social btn-outline"><i class="bi-twitter bi-twitter-color ri-2x"></i></a>
                            </div>
                            <div class="px-3">
                                <a target="_blank" href="https://www.Facebook.com" class="btn-social btn-outline"><i class="bi-facebook bi-facebook-color ri-2x"></i></a>
                            </div>
                            <div class="px-3">
                                <a target="_blank" href="https://www.instagram.com" class="btn-social btn-outline"><i class="bi-instagram bi-instagram-color ri-2x"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="iconos text-right p-2">
                            <img src="https://www.brooksfieldstore.com/modules/themeeditor/img/footer_logo_1.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </footer> `
    document.getElementById('footer').innerHTML = html;
}



function obtenerProductosLS() {
    let products;
    products = JSON.parse(localStorage.getItem("products"));
    return products;
}
