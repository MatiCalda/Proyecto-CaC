document.getElementById("nombre").addEventListener('focusout', e => {
    campo = e.target.value;
    if (campo.length < 3) {
        //alert-danger border-danger
        e.target.classList.add("alert-danger");
        e.target.classList.add("border-danger");
        document.getElementById("nombreWarning").innerText = "Nombre muy corto";
    }
    else{
        e.target.classList.remove("border-danger");
        e.target.classList.remove("alert-danger");
        document.getElementById("nombreWarning").innerText = "";
    }
});


