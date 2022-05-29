// const cart = obtenerCarrito();
const badgeIconoCarrito = document.getElementById('cantCart');

actualizarIconoCarrito();

function actualizarIconoCarrito(){
    let theCart = [];
    theCart = JSON.parse(localStorage.getItem("cart"));

    let valor = theCart.reduce( (total, producto) => {
        return total + producto.cantidad;
    }, 0);
    if (valor) {
        badgeIconoCarrito.innerText = valor;
    } else{
        badgeIconoCarrito.innerText = '';
    }
}