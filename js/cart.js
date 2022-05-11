cart = JSON.parse(localStorage.getItem("carrito_2"));

function mostrarCarrito(){
    var total = 0;
    document.getElementById('carrito').innerHTML = '';
    cart.forEach(pedido => {
        var subTotal;
        subTotal = pedido.product.precio * pedido.cantidad;
        total += subTotal;
        console.log(subTotal);
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
        btn.addEventListener("click", e=>{
            let idProduct = parseInt(e.target.getAttribute("data-id"));
            let precioProducto;
    
            cart.forEach(pedido => {
                if(pedido.product.id === idProduct){
                    console.log('producto encontrado: $' + pedido.product.precio);
                    precioProducto = pedido.product.precio;
    
                    if(pedido.cantidad === 1){
                        cart = removeItemOnce(cart, pedido);
                        const borrar = document.getElementById(idProduct);
                        borrar.parentNode.removeChild(borrar);
                    }else{
                        pedido.cantidad--;
                    }
    
                    const carritoString = JSON.stringify(cart);
                    localStorage.setItem("carrito_2", carritoString);
                }
            });
    
    
            total -= precioProducto;
            // actualizarTotal(total);
            mostrarCarrito();
            console.log(idProduct);
        })
    });    
}
mostrarCarrito();



function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  /*
function borrarProducto(idProducto) {
    const borrar = document.getElementById(idProducto);
    borrar.parentNode.removeChild(borrar);
    total -= precioProducto;
    agregarTotal();
    console.log(idProducto)
}
*/
function actualizarTotal(totalCalculado) {
    console.log(totalCalculado);
    let html = `
        <th scope="col">
            $ ${totalCalculado}
        </th>
    `;
    document.getElementById('total').innerHTML = html;
}



