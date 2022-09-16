function aviso() {
    alert("Bienvenido al mundo javaScript");
}

function confirmacion() {
    //los valores que puede almaceenar la variable confirmacion
    //son true o false 
    let confirmacion = confirm("¿Desea salir de la sesion?");
    /* para imprimir una variable en una cadena podemos utilizar las comillas simples inversas `` y luego hacemos  el llamado de la variable  con ${aqui debera de escribir el nombre de la varible */
    alert(`valor seleccionado${confirmacion}`);

}

function capturarDatos() {
    let nombre = prompt("¿cual es su nombre?");
    //Notese que en campo del promt se monstrara 0 por defecto

    let edad = prompt("¿Cual es su edad ?", 0);

    alert(`su nombre es ${nombre} y su edad ${edad}`);
}
function dibujarParrafo() {
    let parrafo = prompt(
        "Escriba la información que desee visualizar en el párrafo"
    );
   /* Utilizaremos la API DOM para acceder al elemento 
   <p id="idParrafo"> </p> que hemos creado en nuestro documento HTML*/
    
    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;


}
    
