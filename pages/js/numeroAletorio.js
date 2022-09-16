//Generamos un numero aleatorio que se encuentre en el rango de 1 al 25
const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
//Creamos una constante 
const numeroIntentos = 3;
//Guarda el numero de intentos que realiza el usuario
let intentos = 1;
function generarNumeroAleatorio() {
    //Definimos una variable para impresion de mensajes 
    const parrafo = document.querySelector("#idParrafo");
}

//verificamos en que intento esta el usuario
if (intentos <= numeroIntentos) {
    let numero = prompt(
        "¿Que número se ha generado (Intento " + intentos + ")?"
        
    );
}


//verificamos  el numero aleatorio con el ingresado por el usuario

if (numero == numeroAleatorio)
{
    mensaje = `¡Es sorprendente, pudiste adivinar el numero oculto(${numeroAleatorio}).Refresque la página para volver a jugar. `;
}

else if (intentos == numeroIntentos)
{
    mensaje = ` Vuelve a intentar.Quedan
     ${numeroIntentos - intentos


    
     }intentos`;
}



//aumentamos el valor de los intentos
intentos++;
{
    else {
        mensaje = ` Su numero de intentos ha terminado.
        El numero oculto era:${numeroAleatorio}.Refresca la pagina para volver a jugar.`;
    }

    parrafo.innerHTML = mensaje;
}






