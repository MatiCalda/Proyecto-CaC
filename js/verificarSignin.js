var tieneErrores = true;

function validarNombre(){
    let esValido;
    let campo = document.getElementById("nombre");
    if (campo.value.length < 3) {
        campo.classList.add("alert-danger");
        campo.classList.add("border-danger");
        document.getElementById("nombreWarning").innerText = "Nombre muy corto.";
        esValido = false;
    }
    else{
        campo.classList.remove("border-danger");
        campo.classList.remove("alert-danger");
        document.getElementById("nombreWarning").innerHTML = "&nbsp;";
        esValido = true;
    }
    return esValido;
}
/*
document.getElementById("nombre").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo.length < 3) {
        tieneErrores = true;
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("nombreWarning").innerText = "Nombre muy corto.";
    }
    else{
        tieneErrores = false;
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("nombreWarning").innerHTML = "&nbsp;";
    }
});

document.getElementById("apellido").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo.length < 3) {
        tieneErrores = true;
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("apellidoWarning").innerText = "Apellido muy corto.";
    }
    else{
        tieneErrores = false;
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("apellidoWarning").innerHTML = "&nbsp;";
    }
});

document.getElementById("alias").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo.length == 0) {
        tieneErrores = true;
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("aliasWarning").innerText = "Alias muy corto.";
    }
    else{
        tieneErrores = false;
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("aliasWarning").innerHTML = "&nbsp;";
    }
});

document.getElementById("codigoPostal").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo.length < 4) {
        tieneErrores = true;
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("codigoPostalWarning").innerText = "El codigo postal debe tener mínimo 4 digitos.";
    }
    else{
        tieneErrores = false;
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("codigoPostalWarning").innerHTML = "&nbsp;";
    }
});

document.getElementById("email").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (!campo.includes("@") || !campo.includes(".com")) {
        tieneErrores = true;
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("emailWarning").innerText = "Email no válido";
    }
    else{
        tieneErrores = false;
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("emailWarning").innerHTML = "&nbsp;";
    }
});

document.getElementById("verifEmail").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo != document.getElementById("email").value) {
        tieneErrores = true;
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("verifEmailWarning").innerText = "El email no corresponde con el anterior";
    }
    else{
        tieneErrores = false;
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("verifEmailWarning").innerHTML = "&nbsp;";
    }
});

document.getElementById("clave").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo.length < 6) {
        tieneErrores = true;
        document.getElementById("claveWarning").className = "warning";
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
    }
    else{
        tieneErrores = false;
        document.getElementById("claveWarning").className = "light";
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
    }
});

document.getElementById("verifClave").addEventListener('focusout', e => {
    let campo = e.target.value;
    if (campo != document.getElementById("clave").value) {
        tieneErrores = true;
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("verifClaveWarning").innerText = "La contraseña no corresponde con la anterior";
    }
    else{
        tieneErrores = false;
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("verifClaveWarning").innerHTML = "&nbsp;";
    }
});
*/


document.getElementById("form").addEventListener('submit', e =>{
    e.preventDefault();
    if (validarNombre()) {
        e.target.submit();
    }else{
        alert("no envio");
    }
})
