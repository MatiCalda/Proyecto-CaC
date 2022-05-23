// LogIn
let users = [];
let userActivo;

userActivo = obtenerUsuarioActivo();
users = obtenerUsuarios();

procesarLogIn(userActivo);

const btnCerrarSesion = document.getElementById("cerrarSesion");
btnCerrarSesion.addEventListener("click", e=> {
    userActivo = undefined;
    localStorage.removeItem("userActivo");
    window.location.href = document.getElementById("linkInicio").href;
})

const btnLogIn = document.getElementById("btnLogIn");
btnLogIn.addEventListener("click", e => {
    e.preventDefault();
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let ingresoValido = false;
    users.forEach(e => {
        if (e.email == mail && e.clave == pass) {
            ingresoValido = true;
            userActivo = e;
            localStorage.setItem("userActivo", JSON.stringify(userActivo));
        }
    })
    if (ingresoValido) { //si el ingreso es exitoso
        let html = document.getElementById("msjEstado");
        html.innerHTML = `
        <div class="alert alert-success" role="alert">
            Acceso exitoso
        </div>
        `
        $('#login').modal('hide');
        procesarLogIn(userActivo);
    } else {            //si el ingreso es erroneo
        limpiarModal();
        let html = document.getElementById("msjEstado");
        html.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Dato/s erróneos, verificar mail y/o contraseña.
        </div>
        `
    }

})

function obtenerUsuarioActivo() {
    let user;
    if (localStorage.getItem('userActivo')) {
        user = JSON.parse(localStorage.getItem("userActivo"));
    }
    return user;
}

function obtenerUsuarios() {
    let users = [];
    if (localStorage.getItem('users') == undefined) {
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        users = JSON.parse(localStorage.getItem("users"));
    }
    return users;
}

$('#login').on('show.bs.modal', e => {
    limpiarModal();
})


function limpiarModal() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    let html = document.getElementById("msjEstado");
    html.innerHTML = ` `;
}

function procesarLogIn(userActivo) {
    if (userActivo) {
        document.getElementById("aliasUser").innerText = userActivo.alias;
        document.getElementById("btnLogged").classList.remove('d-none');
        document.getElementById("btnNoLogged").classList.add('d-none');
    }else{
        document.getElementById("btnLogged").classList.add('d-none');
        document.getElementById("btnNoLogged").classList.remove('d-none');
    }
}