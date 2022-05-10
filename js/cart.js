cart = JSON.parse(localStorage.getItem("carrito_2"));
var total = 0;

cart.forEach(pedido => {
    var subTotal;
    subTotal = pedido.product.precio * pedido.cantidad;
    total += subTotal;
    console.log(subTotal);
    function cargarCart() {
        let html = `
        <tr id="${pedido.product.id}">
            <td>
                <img src="https://picsum.photos/100" class="avatar img-circle img-thumbnail" alt="avatar">
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
            <td class="align-middle">
                $ ${pedido.product.precio}
            </td>
            <td class="align-middle">
                $ ${subTotal}
            </td>
            <td class="align-middle">
                <a class="btnEliminar ri-delete-bin-2-line text-decoration-none ri-lg" onclick="borrarProducto(${pedido.product.id}, ${pedido.product.precio})"></a>
            </td>
        </tr>
            `;
        document.getElementById('carrito').innerHTML += html;
    }
    cargarCart();
});

function borrarProducto (idProducto, precioProducto){
    const borrar = document.getElementById(idProducto);
    borrar.parentNode.removeChild(borrar);
    total -= precioProducto;
    agregarTotal();
    console.log(idProducto)
}

function agregarTotal() {
    console.log(total);
    let html = `
        <th scope="col">
            $ ${total}
        </th>
    `;
    document.getElementById('total').innerHTML = html;
}
agregarTotal();

