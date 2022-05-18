// validaciones SignIn

var esValido = {
    nombre: false,
    apellido: false,
    alias: false,
    codigoPostal: false,
    email: false,
    verifEmail: false,
    clave: false,
    verifClave: false,
}

habilitarSignIn();

document.getElementById("nombre").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo.length < 3) {
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("nombreWarning").innerText = "Nombre muy corto.";
        esValido["nombre"] = false;
    }
    else {
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("nombreWarning").innerHTML = "&nbsp;";
        esValido["nombre"] = true;
    }
    habilitarSignIn();
});

document.getElementById("apellido").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo.length < 3) {
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("apellidoWarning").innerText = "Apellido muy corto.";
        esValido["apellido"] = false;
    }
    else {
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("apellidoWarning").innerHTML = "&nbsp;";
        esValido["apellido"] = true;
    }
    habilitarSignIn();
});

document.getElementById("alias").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo.length == 0) {
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("aliasWarning").innerText = "Alias muy corto.";
        esValido["alias"] = false;
    }
    else {
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("aliasWarning").innerHTML = "&nbsp;";
        esValido["alias"] = true;
    }
    habilitarSignIn();
});

document.getElementById("codigoPostal").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo.length < 4) {
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("codigoPostalWarning").innerText = "El codigo postal debe tener mínimo 4 digitos.";
        esValido["codigoPostal"] = false;
    }
    else {
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("codigoPostalWarning").innerHTML = "&nbsp;";
        esValido["codigoPostal"] = true;
    }
    habilitarSignIn();
});

document.getElementById("email").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (!campo.includes("@") || !campo.includes(".com")) {
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("emailWarning").innerText = "Email no válido";
        esValido["email"] = false;
    }
    else {
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("emailWarning").innerHTML = "&nbsp;";
        esValido["email"] = true;
    }
    habilitarSignIn();
});

document.getElementById("verifEmail").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo != document.getElementById("email").value) {
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("verifEmailWarning").innerText = "El email no corresponde con el anterior";
        esValido["verifEmail"] = false;
    }
    else {
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("verifEmailWarning").innerHTML = "&nbsp;";
        esValido["verifEmail"] = true;
    }
    habilitarSignIn();
});

document.getElementById("clave").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo.length < 6) {
        document.getElementById("claveWarning").className = "warning";
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        esValido["clave"] = false;
    }
    else {
        document.getElementById("claveWarning").className = "light";
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        esValido["clave"] = true;
    }
    habilitarSignIn();
});

document.getElementById("verifClave").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo != document.getElementById("clave").value) {
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("verifClaveWarning").innerText = "La contraseña no corresponde con la anterior";
        esValido["verifClave"] = false;
    }
    else {
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("verifClaveWarning").innerHTML = "&nbsp;";
        esValido["verifClave"] = true;
    }
    habilitarSignIn();
});

function camposValidos() {
    let valido = true;
    let valores = Object.values(esValido);
    for (let i = 0; i < valores.length; i++) {
        valido &&= valores[i];
    }
    return valido;
}

function habilitarSignIn() {
    const btnSignIn = document.getElementById("btnSignIn");
    if (camposValidos()) {
        btnSignIn.removeAttribute("disabled");
    } else {
        btnSignIn.setAttribute("disabled", true);
    }
}

// SignIn

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
        // mostrar modal
        $('#msjOK').modal({
            backdrop: 'static'
        })
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


