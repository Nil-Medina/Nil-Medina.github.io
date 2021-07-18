//declarando variables para los controles
var txtNom = document.getElementById("txtNom");
var txtApe = document.getElementById("txtApe");
var txtCor = document.getElementById("txtCor");
var tbnRegistrar = document.getElementById("tbnRegistrar")
var btnRegistrar = document.getElementById("btnRegistrar")

//creamos un procedimiento para mostrar
function MostrarRegistro(){
    //declaramos una variable para guardar los datos
    var listaregistro=Mostrar();
    //selecciono el tbody de la tabla donde voy a guardar
    tbody = document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    //Agregamos las columnas que se registren
    for(var i=0; i<listaregistro.length;i++){
        //Declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonombre = fila.insertCell(0);
        var tituloapellido = fila.insertCell(1);
        var titulocorreo = fila.insertCell(2);
        //agregamos valores
        titulonombre.innerHTML = listaregistro[i].nombre;
        tituloapellido.innerHTML = listaregistro[i].apellido;
        titulocorreo.innerHTML = listaregistro[i].correo;
        tbody.appendChild(fila);
    }
}

//creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    //capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    //Llamamos al procedimiento Registrar
    Registrar(nom,ape,cor);
    MostrarRegistro();
}

//Agregamos un evento al boton regustrar
// btnRegistrar.addEventListener("click",function(){
//     alert("Hola");
// })

//Creamos un procedimiento para el mensaje
// function Mensaje(){
//     alert("Hola");
// }
//agregamos el evento al boton
// btnRegistrar.addEventListener("click",Mensaje);

//Asignamos la funcion registrar datos al boton
btnRegistrar.addEventListener("click", RegistrarDatos);