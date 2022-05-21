// LogIn
let users = [];
users = obtenerUsuarios();

const btnLogIn = document.getElementById("btnLogIn");
btnLogIn.addEventListener("click", e => {
    e.preventDefault();
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let ingresoValido = false;
    users.forEach(e => {
        if (e.email == mail && e.clave == pass) {
            ingresoValido = true;
        }
    })
    if (ingresoValido) {
        let html = document.getElementById("msjEstado");
        html.innerHTML = `
        <div class="alert alert-sucsess" role="alert">
            Acceso exitoso
        </div>
        `
        $('#login').modal('hide');
        //alert("ingreso exitoso");
    } else {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        let html = document.getElementById("msjEstado");
        html.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Dato/s erróneos, verificar mail y/o contraseña.
        </div>
        `
        //alert("error en ingreso");
    }

})

document.getElementById("closeLogIn").addEventListener("click", e => {
    let html = document.getElementById("msjEstado");
        html.innerHTML = ` `
})

function obtenerUsuarios() {
    let users = [];
    if (localStorage.getItem('users') == undefined) { // si no existe el carrito
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        users = JSON.parse(localStorage.getItem("users"));
    }
    return users;
}