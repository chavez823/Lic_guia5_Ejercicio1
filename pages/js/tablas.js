/*Utilizaremos la API DOM para la creacion de una tabla*/
let table = "<table>";
table += "<thead>";
table += "<tr>";
table += "<th scope=''col>#</th>";
table += "<th scope='col'>Nombre</th>";
table += "<th scope='col'>Apellido</th>";
table += "<th scope='col'>Correo electrónico</th>";
table += "</tr>";
table += "</thead>";
table += "<tbody>";
table += "<tr>";
table += "<td scope='row'>1</td>";
table += "<td> Marcos Antonio</td>";
table += "<td>Alas</td>";
table += "<td>marcos.alas@estudiante.udb.edu.sv</td>";
table += "</tr>";
table += "<tr>";
table += "<td scope='row'>2</td>";
table += "<td>Ana Paola</td>";
table += "<td>Rivas Polanco</td>";
table += "<td>paola.rivas@estudiante.udb.edu.sv</td>";
table += "</tr>";
table += "<tr>";
table += "<td scope='row'>3</td>";
table += "<td>Alexis Armando</td>";
table += "<td>Quintanilla peñá</td>";
table += "<td>alexis.quintanilla@estudiante.udb.edu.sv</td>";
table += "</tr>";
table += "<tr>";
table += "<td scope='row'>4</td>";
table += "<td>vanessa Alejandra</td>";
table += "<td>Bermudez Urquilla</td>";
table += "<td>vanessa.bermudez@estudiiante.udb.edu.sv</td>";
table += "</tr>";
table += "<tr>";
table += "<td scope='row'>5</td>";
table += "<td>Oscar Armando</td>";
table += "<td>López Rodriguez</td>";
table += "<td>oscar.lopez@estudiante.udb.edu.sv</td>";
table += "</tr>";
table += "</tbody>";
table += "</table>";

const contenedor = document.querySelector("#idContenedor")
contenedor.innerHTML = table;

