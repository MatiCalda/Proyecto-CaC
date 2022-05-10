cart = JSON.parse(localStorage.getItem("carrito_2"));
var total = 0;
cart.forEach(pedido => {
    var subTotal;
    subTotal = pedido.product.precio * pedido.cantidad;
    total += subTotal;
    console.log(subTotal);
    function cargarCart() {
        let html = `
        <tr>
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
                <a class="ri-delete-bin-2-line text-decoration-none ri-lg"></a>
            </td>
        </tr>
            `;
        document.getElementById('carrito').innerHTML += html;
    }
    cargarCart();
});

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

