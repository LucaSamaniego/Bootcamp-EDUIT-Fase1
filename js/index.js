const nombre = document.getElementById("name");
const nombreAlumno = document.getElementById("alumno");
const email = document.getElementById("email");
const mensaje = document.getElementById("message");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const mayoOMenos = document.getElementById("mot");
const telefono = document.getElementById("tel")

form.addEventListener ("submit", e=>{
    e.preventdefault() 
    let warnings= ""
    let entrar = false
    let regexEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    parrafo.innerHTML = ""
    if (nombre.Value.length <4){
        warnings+= 'El nombre no es valido <br>'
        entrar = true
    }
    if (nombreAlumno.Value.length <4){
        warnings+= 'El nombre no es valido <br>'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings+= 'El email no es valido <br>'
        entrar=true
    }
    if(mensaje.Value.length >200){
        warnings+= 'Introducir hasta 200 caracteres<br>'
        entrar = true
    }
    if (mayoOMenos.Value.length<4) {
        warnings+= 'Nombre inválido'
        entrar = true

    }
    if (telefono.Value.length <Number(8)) {
        warnings+= 'Telfono inválido'
        entrar= true

    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{parrafo.innerHTML = "Enviado"
    }
});