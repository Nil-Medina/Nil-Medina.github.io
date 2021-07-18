//declarando variables para los controles
var txtNom = document.getElementById("txtNom");
var txtPre = document.getElementById("txtPre");
var cboCategoria = document.getElementById("cboCategoria");
var txtCan = document.getElementById("txtCan");
var tbnRegistrar = document.getElementById("tbnRegistrar")
var btnRegistrar = document.getElementById("btnRegistrar")

//creamos un procedimiento para mostrar
function MostrarRegistro(){
    //declaramos una variable para guardar los datos
    var listaproductos=Mostrar();
    //selecciono el tbody de la tabla donde voy a guardar
    tbody = document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    //Agregamos las columnas que se registren
    for(var i=0; i<listaproductos.length;i++){
        //Declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonombre = fila.insertCell(0);
        var tituloprecio = fila.insertCell(1);
        var titulocategoria = fila.insertCell(2);
        var titulocantidad = fila.insertCell(3);
        //agregamos valores
        titulonombre.innerHTML = listaproductos[i].nombre;
        tituloprecio.innerHTML = listaproductos[i].precio;
        titulocategoria.innerHTML = listaproductos[i].categoria;
        titulocantidad.innerHTML = listaproductos[i].cantidad;
        tbody.appendChild(fila);
    }
}

//creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    //capturando valores
    var nom=txtNom.value;
    var pre=txtPre.value;
    var can=txtCan.value;
    var Categoria = document.getElementById("cboCategoria");
    if (Categoria.value==0 || Categoria.value==""){
        alert("Seleccione una categoria");
        cat.focus();
    }else{
        cat = parseFloat(Categoria.value);
        var indice=Categoria.selectedIndex;
        switch(indice){
            case 1:
                cat="Entretenimiento";
                break;
            case 2:
                cat="Tecnologia";
                break;
            case 3:
                cat="Linea Blanca";
                break;
            default:
                cat=0;
                break;
        }
    }
    //Llamamos al procedimiento Registrar
    Registrar(nom,pre,cat,can);
    MostrarRegistro();
}

//Agregamos un evento al boton regustrar
// btnRegistrar.addEventListener("click",function(){
//     alert("Hola");
// })

//Asignamos la funcion registrar datos al boton
btnRegistrar.addEventListener("click", RegistrarDatos);