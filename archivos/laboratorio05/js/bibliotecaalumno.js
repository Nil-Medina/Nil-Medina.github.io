//declarando variables para los controles
var txtNom = document.getElementById("txtNom");
var txtApe = document.getElementById("txtApe");
var txtDni = document.getElementById("txtDni");
var Curso = document.getElementById("cboCurso");
var rbM = document.getElementById("rbM");
var rbT = document.getElementById("rbT");
var rbN = document.getElementById("rbN");
var chkEst = document.getElementById("chkEst");
var tbnRegistrar = document.getElementById("tbnRegistrar");
var btnRegistrar = document.getElementById("btnRegistrar");

//creamos un procedimiento para mostrar
function MostrarRegistro(){
    //declaramos una variable para guardar los datos
    var listaalumno=Mostrar();
    //selecciono el tbody de la tabla donde voy a guardar
    tbody = document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    //Agregamos las columnas que se registren
    for(var i=0; i<listaalumno.length;i++){
        //Declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonombre = fila.insertCell(0);
        var tituloapellido = fila.insertCell(1);
        var titulodni = fila.insertCell(2);
        var titulocurso = fila.insertCell(3);
        var tituloturno = fila.insertCell(4);
        var tituloestado = fila.insertCell(5);
        //agregamos valores
        titulonombre.innerHTML = listaalumno[i].nombre;
        tituloapellido.innerHTML = listaalumno[i].apellido;
        titulodni.innerHTML = listaalumno[i].dni;
        titulocurso.innerHTML = listaalumno[i].curso;
        tituloturno.innerHTML = listaalumno[i].turno;
        tituloestado.innerHTML = listaalumno[i].estado;
        tbody.appendChild(fila);
    }
}

//creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    //capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    if (Curso.value==0 || Curso.value==""){
        var cur = textContent = " ";
    }else{
        cur = parseFloat(Curso.value);
        var indice=Curso.selectedIndex;
        switch(indice){
            case 1:
                cur="Diseño Web";
                break;
            case 2:
                cur="Base de Datos";
                break;
            case 3:
                cur="Programación Java";
                break;
            default:
                cat=0;
                break;
        }
    }
    if (rbM.checked == false & rbT.checked == false & rbN.checked == false){
        return;
    }else if (rbM.checked == true){
        var turn = document.getElementById("rbM").value;
    } else if(rbT.checked == true){
        var turn = document.getElementById("rbT").value;
    }else if (rbN.checked == true){
        var turn = document.getElementById("rbN").value;
    }
    var est = chkEst.checked;
    if (chkEst.checked == true){
        var est = document.getElementById("chkEst").value;
    }else if(chkEst.checked == false){
        var est = document.getElementById("chkEst").textContent = "No Habilitado";
    }
    //Llamamos al procedimiento Registrar
    Registrar(nom,ape,dni,cur,turn,est);
    MostrarRegistro();
}

//Agregamos un evento al boton regustrar
// btnRegistrar.addEventListener("click",function(){
//     alert("Hola");
// })

//Asignamos la funcion registrar datos al boton
btnRegistrar.addEventListener("click", RegistrarDatos);