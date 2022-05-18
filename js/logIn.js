// LogIn
let users = [];
users = obtenerUsuarios();

const btnLogIn = document.getElementById("btnLogIn");
btnLogIn.addEventListener("click", e => {
    e.preventDefault();
    let mail = document.getElementById("email");
    let pass = document.getElementById("password");
    let ingresoValido = false;
    users.forEach( e => {
        if (e.email == mail && e.clave == pass) {
            ingresoValido = true;
        }
    })
    if (ingresoValido) {
        alert("ingreso exitoso");
    }else{
        
    }

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