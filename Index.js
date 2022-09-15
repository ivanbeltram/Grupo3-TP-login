var mailCorrecto = null;
var passCorrecta = null;
var capcha = "qGphJD";

function registrarse() {

    var nuevoMail = document.getElementById("UsuarioNuevo").value;
    var nuevoPass = document.getElementById("ContraseñaNueva").value;
    var nuevoPass2 = document.getElementById("ContraseñaNueva2").value;
    var apellido = document.getElementById("Apellido").value;
    var nombre = document.getElementById("Nombre").value;
    var edad = document.getElementById("Edad").value;
    var capchaIngresada = document.getElementById("capcha").value;

    var mailIngresado = mailValido(nuevoMail);
    if (apellido != "" && nombre != "" && edad > 0) {
        if (capchaIngresada == capcha) {
            if (mailIngresado) {
                if (nuevoPass == nuevoPass2) {
                    mailCorrecto = nuevoMail;
                    passCorrecta = nuevoPass;
                    alert("¡Registrade!")
                    return true;
                }else{
                    alert("Las contraseñas no son iguales.")
                }
            } else {
                alert("Mail invalido.")
                return false;
            }
        } else {
            alert("Captcha incorrecto.")
            return false;
        }
    } else {
        alert("Falta información.")
        return false;
    }
}


function checkearDatos() {
    var mail = document.getElementById("Email").value;
    var pass = document.getElementById("Password").value;
    var mailIngresado = mailValido(mail);
    if (mailIngresado) {
        if (mail == mailCorrecto) {

            if (pass == passCorrecta) {
                alert("¡Bienvenide!")
            } else if (pass === ''){
                alert("Falta ingresar contraseña.")
            } else {
                alert("Contraseña incorrecta.")
            }

        } else {
            alert("Mail incorrecto.")
        }
    }

}

function mailValido(x) {
    var mailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (x.match(mailFormat)) {

        return true;
    } else if (x === '') {
        alert("No se ha ingresado un mail.")
        return false;
    } else {
        alert("El mail es inválido.");
        return false;
    }
}




var divR = document.getElementById('registrarseDiv');

var divI = document.getElementById('loginDiv');

var btnR1 = document.getElementById('registrarseBoton');

var btnR2 = document.getElementById('registrarseBoton2');

btnR1.addEventListener('click', function handleClick() {
    divR.style.display = 'block';
    divI.style.display = 'none';
});

btnR2.addEventListener('click', function handleClick() {
    var infoCorrecta = registrarse();
    if (infoCorrecta) {
        divI.style.display = 'block';
        divR.style.display = 'none';
    }


});