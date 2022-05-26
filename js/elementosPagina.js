let productsLS;
productsLS = obtenerProductosLS();
loadHTMLFooter();
loadHTMLCards();
loadHTMLFormaDePago();


function obtenerProductosLS() {
    let products;
    products = JSON.parse(localStorage.getItem("products"));
    return products;
}


function loadHTMLCards() {
    if (!!document.getElementById("productsIndex")) {
        productsLS.forEach(product => {
            if (product.destacado) {
                let html = `
            <div class="card bg-light">
                    <img class="card-img-top" src="img/productos/${product.img}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.nombre}</h5>
                        <p class="card-text">${product.descripcion}</p>
                        <p class="card-text">$ ${product.precio.toLocaleString("es")}</p>
                        <div class="mt-auto text-right">
                            <button data-toggle="modal" data-target="#formaDePago"
                                class="btnComprar btn btn-info">Comprar</button>
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
    

}
function loadHTMLFooter() {
    if (!!document.getElementById("footer")) {
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
}

function loadHTMLFormaDePago() {
    if (!!document.getElementById("formaDePago")) {
        let html = `
    <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Forma de Pago</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3">
                        <li class="nav-item pill-info"> <a data-toggle="pill" href="#credit-card"
                                class="nav-link active">
                                <i class="ri-bank-card-line ri-1x mr-1"></i> Debito / Credito </a> </li>
                        <li class="nav-item pill-info"><a data-toggle="pill" href="#paypal" class="nav-link ">
                                <i class="ri-paypal-line ri-1x mr-1"></i> Paypal </a> </li>
                        <li class="nav-item pill-info"> <a data-toggle="pill" href="#net-banking" class="nav-link ">
                                <i class="ri-smartphone-line ri-1x mr-1"></i> Mercado Pago </a> </li>
                        <li class="nav-item pill-info"> <a data-toggle="pill" href="#net-banking" class="nav-link ">
                                <i class="ri-smartphone-line ri-1x mr-1"></i> Todo Pago </a> </li>
                    </ul>
                    <!-- Contenidos Forma de Pago -->
                    <div class="tab-content">
                        <!-- Tarjeta Debito/Credito -->
                        <div id="credit-card" class="tab-pane fade show active pt-3">
                            <form role="form" onsubmit="event.preventDefault()">
                                <div class="form-group"> <label for="username">
                                        <h6>Nombre</h6>
                                    </label> <input type="text" name="username" placeholder="Nombre" required
                                        class="form-control "> </div>
                                <div class="form-group"> <label for="cardNumber">
                                        <h6>Numero de Tarjeta</h6>
                                    </label>
                                    <div class="input-group">
                                        <input type="text" name="Numero de Tarjeta"
                                            placeholder="Numero de tarjeta valido" class="form-control " required>
                                        <div class="input-group-append">
                                            <span class="input-group-text text-muted">
                                                <!-- <i class="ri-visa-fill ri-xl mx-1"></i> -->
                                                <!-- <i class="ri-mastercard-line ri-xl mx-1"></i> -->
                                                <!-- <i class="ri-bank-card-line ri-xl mx-1"></i> american express-->
                                                <i class="fab fa-cc-visa mx-1"></i>
                                                <i class="fab fa-cc-mastercard mx-1"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8">
                                        <div class="form-group"> <label><span class="hidden-xs">
                                                    <h6>Fecha de Vencimiento</h6>
                                                </span></label>
                                            <div class="input-group"> <input type="number" placeholder="MM" name=""
                                                    class="form-control" required> <input type="number" placeholder="AA"
                                                    name="" class="form-control" required> </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group mb-4"> <label data-toggle="tooltip"
                                                title="Three digit CV code on the back of your card">
                                                <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                            </label> <input type="text" required class="form-control"> </div>
                                    </div>
                                </div>
                                <div class="card-footer"> <button type="button"
                                        class="subscribe btn btn-info btn-block shadow-sm"> Confirmar Pago </button>
                            </form>
                        </div>
                    </div> <!-- Cierre Tarjeta Debito/Credito -->
                    <!-- Paypal -->
                    <div id="paypal" class="tab-pane fade pt-3">
                        <h6 class="pb-2">Selecciona tu tipo de cuenta paypal</h6>
                        <div class="form-group ">
                            <label class="radio-inline">
                                <input type="radio" name="optradio" checked> Local
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="optradio" class="ml-5"> Internacional
                            </label>
                        </div>
                        <p>
                            <button type="button" class="btn btn-info ">
                                <i class="fab fa-paypal mr-2"></i>
                                Ingresar a mi Paypal</button>
                        </p>
                        <p class="text-muted"> Nota: Después de hacer clic en el botón, se le dirigirá a un
                            enlace seguro para el pago. Después de completar el proceso de pago, será redirigido
                            a el sitio web para ver los detalles de su pedido. </p>
                    </div> <!-- Cierre Paypal -->
                    <!-- MercadoPago / TodoPago -->
                    <div id="net-banking" class="tab-pane fade pt-3">
                        <div class="form-group "> <label for="Select Your Bank">
                                <h6>Seleccione la cantidad de cuotas</h6>
                            </label> <select class="form-control" id="ccmonth">
                                <option value="" selected disabled>--Por favor seleccione la cantidad de cuotas a
                                    pagar--</option>
                                <option>Una cuota</option>
                                <option>2 cuotas</option>
                                <option>4 cuotas</option>
                                <option>12 cuotas</option>
                                <option>18 cuotas</option>
                            </select> </div>
                        <div class="form-group">
                            <p> <button type="button" class="btn btn-info "><i class="ri-smartphone-line mr-2"></i>
                                    Confirmar Pago</button> </p>
                        </div>
                        <p class="text-muted">Nota: Después de hacer clic en el botón, se le dirigirá a un
                            enlace seguro para el pago. Después de completar el proceso de pago, será redirigido
                            a el sitio web para ver los detalles de su pedido. </p>
                    </div> <!-- Cierre MercadoPago / TodoPago -->
                    <div id="net-banking" class="tab-pane fade pt-3">
                        <div class="form-group "> <label for="Select Your Bank">
                                <h6>Seleccione la cantidad de cuotas</h6>
                            </label> <select class="form-control" id="ccmonth">
                                <option value="" selected disabled>--Por favor seleccione la cantidad de cuotas a
                                    pagar--</option>
                                <option>Una cuota</option>
                                <option>2 cuotas</option>
                                <option>4 cuotas</option>
                                <option>12 cuotas</option>
                                <option>18 cuotas</option>
                            </select> </div>
                        <div class="form-group">
                            <p> <button type="button" class="btn btn-info "><i class="ri-smartphone-line mr-2"></i>
                                    Confirmar Pago</button> </p>
                        </div>
                        <p class="text-muted">Nota: Después de hacer clic en el botón, se le dirigirá a un
                            enlace seguro para el pago. Después de completar el proceso de pago, será redirigido
                            a el sitio web para ver los detalles de su pedido. </p>
                    </div> <!-- Cierre MercadoPago / TodoPago -->
                </div>
                <div class="modal-footer">
                    <div class=" text-center">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
        document.getElementById('formaDePago').innerHTML = html;
    }
}