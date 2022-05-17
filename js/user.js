let users = [];
users = obtenerUsuarios();

const btnSingIn = document.getElementById("btnSignIn");
btnSingIn.addEventListener("click", e => {
    e.preventDefault();
    if (buscarUsuario(document.getElementById("email").value) != undefined) { // si el usuario existe
        const correo = document.getElementById("emailWarning");
        correo.innerText = "El mail ya está registrado";
    } else {
        let user = {};
        user.nombre = document.getElementById("nombre").value;
        user.apellido = document.getElementById("apellido").value;
        user.alias = document.getElementById("alias").value;
        user.codigoPostal = document.getElementById("codigoPostal").value;
        user.email = document.getElementById("email").value;
        user.clave = document.getElementById("clave").value;
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    }
})








function buscarUsuario(email) {
    let user = users.find(user => { return user.email === email; });
    return user;
}


function obtenerUsuarios() {
    let users = [];
    if (localStorage.getItem('users') == undefined) { // si no existe el carrito
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        users = JSON.parse(localStorage.getItem("users"));
    }
    return users;
}
