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



/* function validarNombre() {
    let esValido;
    let campo = document.getElementById("nombre");
    if (campo.value.length < 3) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("nombreWarning").innerText = "Nombre muy corto.";
        esValido = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("nombreWarning").innerHTML = "&nbsp;";
        esValido = true;
    }
    return esValido;
}

function validarApellido() {
    let esValido;
    let campo = document.getElementById("apellido");
    if (campo.value.length < 3) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("apellidoWarning").innerText = "Apellido muy corto.";
        esValido = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("apellidoWarning").innerHTML = "&nbsp;";
        esValido = true;
    }
    return esValido;
}

function validarAlias() {
    let esValido;
    let campo = document.getElementById("alias");
    if (campo.value.length == 0) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("aliasWarning").innerText = "Alias muy corto.";
        esValido = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("aliasWarning").innerHTML = "&nbsp;";
        esValido = true;
    }
    return esValido;
}

function validarCodigoPostal() {
    let esValido;
    let campo = document.getElementById("codigoPostal");
    if (campo.value.length < 4) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("codigoPostalWarning").innerText = "El codigo postal debe tener mínimo 4 digitos.";
        esValido = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("codigoPostalWarning").innerHTML = "&nbsp;";
        esValido = true;
    }
    return esValido;
}

function validarEmail() {
    let esValido;
    let campo = document.getElementById("email");
    if (!campo.value.includes("@") || !campo.value.includes(".com")) {
        tieneErrores = true;
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("emailWarning").innerText = "Email no válido";
    }
    else {
        tieneErrores = false;
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("emailWarning").innerHTML = "&nbsp;";
    }
    return esValido;
}

function validarVerifEmail() {
    let esValido;
    let campo = document.getElementById("verifEmail");
    if (campo.value != document.getElementById("email").value) {
        tieneErrores = true;
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("verifEmailWarning").innerText = "El email no corresponde con el anterior";
    }
    else {
        tieneErrores = false;
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("verifEmailWarning").innerHTML = "&nbsp;";
    }
    return esValido;
}

function validarClave() {
    let esValido;
    let campo = document.getElementById("clave");
    if (campo.value.length < 6) {
        document.getElementById("claveWarning").className = "warning";
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        esValido = false;
    }
    else {
        document.getElementById("claveWarning").className = "light";
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        esValido = true;
    }
    return esValido;
}

function validarVerifClave() {
    let esValido;
    let campo = document.getElementById("verifClave");
    if (campo.value != document.getElementById("clave").value) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("verifClaveWarning").innerText = "La contraseña no corresponde con la anterior";
        esValido = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("verifClaveWarning").innerHTML = "&nbsp;";
        esValido = true;
    }
    return esValido;
}

validarTodo();

function validarTodo() {
    return validarNombre() &&
        validarApellido() &&
        validarAlias() &&
        validarCodigoPostal() &&
        validarEmail() &&
        validarVerifEmail &&
        validarClave() &&
        validarVerifClave();
}

document.getElementById("form").addEventListener('submit', e => {
    e.preventDefault();
    if (validarTodo()) {
        e.target.submit();
    } else {
        alert("no envio");
    }
}) */


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
    btnSignIn()
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
    btnSignIn()
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
    btnSignIn()
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
    btnSignIn()
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
    btnSignIn()
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
    btnSignIn()
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
    btnSignIn()
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
    btnSignIn()
});

function camposValidos() {
    let valido = true;
    let valores = Object.values(esValido);
    for (let i = 0; i < valores.length; i++) {
        valido &&= valores[i];
    }
    return valido;
}
function btnSignIn() {
    const btnSignIn = document.getElementById("btnSignIn");
    if (camposValidos()) {
        btnSignIn.removeAttribute("disabled");
    } else {
        btnSignIn.setAttribute("disabled", true);
    }
}


document.getElementById("form").addEventListener('submit', e => {
    e.preventDefault();
    if (camposValidos) {
        e.target.submit();
    } else {
        alert("no envio");
    }
})


