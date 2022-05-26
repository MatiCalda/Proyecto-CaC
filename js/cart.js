cart = JSON.parse(localStorage.getItem("cart"));



function mostrarCarrito() {
    var total = 0;
    document.getElementById('carrito').innerHTML = '';
    cart.forEach(pedido => {
        var subTotal;
        subTotal = pedido.product.precio * pedido.cantidad;
        total += subTotal;
        let html = `
            <tr id="${pedido.product.id}">
                <td>
                    <img src="../img/productos/${pedido.product.img}" class="avatar img-circle img-thumbnail img-cart" alt="${pedido.product.nombre}">
                </td>
                <td class="align-middle">
                    ${pedido.product.nombre}
                </td>
                <td class="align-middle">
                    ${pedido.product.descripcion}
                </td>
                <td class="align-middle text-center">
                    ${pedido.cantidad}
                </td>
                <td class="align-middle text-right">
                    $&nbsp;${pedido.product.precio.toLocaleString("en")}
                </td>
                <td class="align-middle text-right">
                    $&nbsp;${subTotal.toLocaleString("en")}
                </td>
                <td class="align-middle">
                    <a class="btnEliminar ri-delete-bin-2-line text-decoration-none ri-lg" data-id="${pedido.product.id}"></a>
                </td>
            </tr>
                `;
        document.getElementById('carrito').innerHTML += html;
    });

    actualizarTotal(total);

    const botonesElminar = document.querySelectorAll(".btnEliminar");
    // Recorriendo los botones, agregando la escucha de evento click para lanzar funcion Elminar
    botonesElminar.forEach((btn) => {
        btn.addEventListener("click", e => {
            let idProduct = parseInt(e.target.getAttribute("data-id"));
            let precioProducto;

            cart.forEach(pedido => {
                if (pedido.product.id === idProduct) {
                    precioProducto = pedido.product.precio;

                    if (pedido.cantidad === 1) {
                        cart = removeItemOnce(cart, pedido);
                        const borrar = document.getElementById(idProduct);
                        borrar.parentNode.removeChild(borrar);
                    } else {
                        pedido.cantidad--;
                    }

                    const carritoString = JSON.stringify(cart);
                    localStorage.setItem("cart", carritoString);
                }
            });


            total -= precioProducto;
            mostrarCarrito();
        })
    });
    const btnComprar = document.getElementById("btnComprar");
    if (cart.length == 0) {
        btnComprar.setAttribute("disabled", true);
    }else{
        btnComprar.removeAttribute("disabled");
    }

}
mostrarCarrito();

const borrarTodoCarrito = document.getElementById("btnBorrarTodo");
borrarTodoCarrito.addEventListener("click", e => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    mostrarCarrito();
})





function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function actualizarTotal(totalCalculado) {
    let html = `
        <th scope="col">
            $${totalCalculado.toLocaleString("en")}
        </th>
    `;
    document.getElementById('total').innerHTML = html;
}
