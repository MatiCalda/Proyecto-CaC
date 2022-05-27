let userActivo;
userActivo = obtenerUsuarioActivo();
var campos = [
    'nombre',
    'apellido',
    'alias',
    'codigoPostal',
    'email',
    'verifEmail',
    'clave',
    'verifClave',
]
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

procesarLogIn(userActivo);



//habilitarSignIn();

function validarNombre() {
    let campo = document.getElementById("nombre");
    if (campo.value.length < 3) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("nombreWarning").innerText = "Nombre muy corto.";
        esValido["nombre"] = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("nombreWarning").innerHTML = "&nbsp;";
        esValido["nombre"] = true;
    }
    //habilitarSignIn();
}
function validarApellido() {
    let campo = document.getElementById("apellido");
    if (campo.value.length < 3) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("apellidoWarning").innerText = "Apellido muy corto.";
        esValido["apellido"] = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("apellidoWarning").innerHTML = "&nbsp;";
        esValido["apellido"] = true;
    }
    //habilitarSignIn();
}
function validarAlias() {
    let campo = document.getElementById("alias");
    if (campo.value.length == 0) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("aliasWarning").innerText = "Alias muy corto.";
        esValido["alias"] = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("aliasWarning").innerHTML = "&nbsp;";
        esValido["alias"] = true;
    }
    //habilitarSignIn();
}
function validarCodigoPostal() {
    let campo = document.getElementById("codigoPostal");
    if (campo.value.length < 4) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("codigoPostalWarning").innerText = "El codigo postal debe tener mínimo 4 digitos.";
        esValido["codigoPostal"] = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("codigoPostalWarning").innerHTML = "&nbsp;";
        esValido["codigoPostal"] = true;
    }
    //habilitarSignIn();
}
function validarEmail() {
    let campo = document.getElementById("email");
    if (!campo.value.includes("@") || !campo.value.includes(".com")) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("emailWarning").innerText = "Email no válido";
        esValido["email"] = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("emailWarning").innerHTML = "&nbsp;";
        esValido["email"] = true;
    }
    //habilitarSignIn();
}
function validarVerifEmail() {
    let campo = document.getElementById("verifEmail");
    if (campo.value != document.getElementById("email").value) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("verifEmailWarning").innerText = "El email no corresponde con el anterior";
        esValido["verifEmail"] = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("verifEmailWarning").innerHTML = "&nbsp;";
        esValido["verifEmail"] = true;
    }
    //habilitarSignIn();
}
function validarClave() {
    let campo = document.getElementById("clave");
    if (campo.value.length < 6) {
        document.getElementById("claveWarning").className = "warning";
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        esValido["clave"] = false;
    }
    else {
        document.getElementById("claveWarning").className = "light";
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        esValido["clave"] = true;
    }
    //habilitarSignIn();
}
function validarVerifClave() {
    let campo = document.getElementById("verifClave");
    if (campo.value != document.getElementById("clave").value) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("verifClaveWarning").innerText = "La contraseña no corresponde con la anterior";
        esValido["verifClave"] = false;
    }
    else {
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("verifClaveWarning").innerHTML = "&nbsp;";
        esValido["verifClave"] = true;
    }
    //habilitarSignIn();
}



campos.forEach(campo => {
    document.getElementById(campo).addEventListener("focus", e => {
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById(campo + "Warning").innerHTML = "&nbsp;";
    })
});


function camposValidos() {
    let valido = true;
    let keys = Object.values(esValido);
    for (let i = 0; i < keys.length; i++) {
        valido &&= keys[i];
    }
    return valido;
}

// SignIn

let users = [];
users = obtenerUsuarios();

const btnSingIn = document.getElementById("btnSignIn");
btnSingIn.addEventListener("click", e => {
    e.preventDefault();
    // verifico valores de los imputs
    validarNombre();
    validarApellido();
    validarAlias();
    validarCodigoPostal();
    validarEmail();
    validarVerifEmail();
    validarClave();
    validarVerifClave();

    if (camposValidos()) {
        if (userActivo) {// si tiene un usuario activo
            // actualizo datos de usuario
            userActivo.nombre = document.getElementById("nombre").value;
            userActivo.apellido = document.getElementById("apellido").value;
            userActivo.alias = document.getElementById("alias").value;
            userActivo.codigoPostal = document.getElementById("codigoPostal").value;
            userActivo.email = document.getElementById("email").value;
            userActivo.clave = document.getElementById("clave").value;
            users.forEach(e => {
                if (e.email == userActivo.email) {
                    e.nombre = userActivo.nombre;
                    e.apellido = userActivo.apellido;
                    e.alias = userActivo.alias;
                    e.codigoPostal = userActivo.codigoPostal;
                    e.clave = userActivo.clave;
                    localStorage.setItem("userActivo", JSON.stringify(userActivo));
                }
            })
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            if (buscarUsuario(document.getElementById("email").value) != undefined) { // si el usuario existe
                // alerta mail ya registrado
                const correo = document.getElementById("emailWarning");
                correo.innerText = "El mail ya está registrado";
            } else {
                // inserto usuario 
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
        }
    }

    /* if (buscarUsuario(document.getElementById("email").value) != undefined) { // si el usuario existe
        if (userActivo) {// si tiene un usuario activo
            if (camposValidos()) {
                userActivo.nombre = document.getElementById("nombre").value;
                userActivo.apellido = document.getElementById("apellido").value;
                userActivo.alias = document.getElementById("alias").value;
                userActivo.codigoPostal = document.getElementById("codigoPostal").value;
                userActivo.email = document.getElementById("email").value;
                userActivo.clave = document.getElementById("clave").value;
                users.forEach(e => {
                    if (e.email == userActivo.email) {
                        console.log("llegue")
                        console.log(e.email)
                        console.log(e.clave)
                        localStorage.setItem("userActivo", JSON.stringify(userActivo));
                        sessionStorage.removeItem("users");
                    }
                })
            }
        }
        else {
            const correo = document.getElementById("emailWarning");
            correo.innerText = "El mail ya está registrado";
        }
    } else if (camposValidos()) { // sino si todos los valores son validos
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
    } */
})

function procesarLogIn(userActivo) {
    if (userActivo) {
        document.getElementById("titulo").innerText = 'Datos de Perfil';
        document.getElementById("btnSignIn").innerText = 'Guardar';
        document.getElementById("nombre").value = userActivo.nombre;
        document.getElementById("apellido").value = userActivo.apellido;
        document.getElementById("alias").value = userActivo.alias;
        document.getElementById("codigoPostal").value = userActivo.codigoPostal;
        document.getElementById("email").value = userActivo.email;
        document.getElementById("email").disabled = true;
        document.getElementById("verifEmail").value = userActivo.email;
        document.getElementById("verifEmail").disabled = true;
        document.getElementById("clave").value = userActivo.clave;
        document.getElementById("verifClave").value = userActivo.clave;
        //fuerzo a poner esValido todo en true
        let keys = Object.keys(esValido);
        for (let i = 0; i < keys.length; i++) {
            esValido[keys[i]] = true;
        }
        document.getElementById("btnSignIn").removeAttribute("disabled");
    } else {
        document.getElementById("titulo").innerText = 'Registrate';
        document.getElementById("btnSignIn").innerText = 'Registrar';
    }
}

function obtenerUsuarioActivo() {
    let user;
    if (localStorage.getItem('userActivo')) {
        user = JSON.parse(localStorage.getItem("userActivo"));
    }
    return user;
}

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



/* document.getElementById("nombre").addEventListener('focusout', e => {
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
    //habilitarSignIn();
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
    //habilitarSignIn();
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
    //habilitarSignIn();
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
    //habilitarSignIn();
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
    //habilitarSignIn();
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
    //habilitarSignIn();
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
    //habilitarSignIn();
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
    //habilitarSignIn();
}); */