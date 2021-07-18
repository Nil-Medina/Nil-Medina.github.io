//variables para los controles
var txtCod = document.getElementById("txtCod");
var txtNom = document.getElementById("txtNom");
var txtApe = document.getElementById("txtApe");
var txtCor = document.getElementById("txtCor");
var btnRegistrar = document.getElementById("btnRegistrar");
//Llamamos a la funcion registrar del Firebase
// function writeUserData(nm, ap,cr) {
//     database.ref('registro/').set({
//         nombre: nm,
//         apellido: ap,
//         correo: cr
//     });
// }
//Creamos un procedimiento para buscar datos 
function Buscar (codigo){
    //seleccionamos la tabla
    var db = database.ref().child("registro");
    db.once("value").then(function(snapshot){
        snapshot.forEach(function(data){
            //declaramos una variables para el codigo de la tabla 
            var key = data.key;
            //evaluamos que el Key de la tabla sea igual al codigo buscado 
            if(key == codigo){
                var cod = key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;
                //enviamos los datos a los controles 
                txtCod.value = cod;
                txtNom.value = nom;
                txtApe.value = ape;
                txtCor.value = cor;
            }
        });
    });
}
//creamos la funcion limpiar
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}
//creamos un procedimiento para mostrar
function Mostrar() {
    //declaramos una variable para el numero de filas
    var i = 0;
    //selecciono el tbody de la tabla donde voy a guardar
    tbody = document.querySelector("#tbRegistro tbody");
    tbody.innerHTML = "";
    //se selecciona la tabla
    var db = database.ref().child("registro");
    db.once("value", function (snapshot) {
    if (snapshot.exists()) {
        // Loop para recorrer los datos de Firebase Realtime Database
        snapshot.forEach(function (data) {
            var cod = data.key;
            var nom = data.val().nombre;
            var ape = data.val().apellido;
            var cor = data.val().correo;
            //declaramos una variable para la fila
            var fila = tbody.insertRow(i);
                //declaramos variables para los titulos
                var titulonombre = fila.insertCell(0);
                var tituloapellido = fila.insertCell(1);
                var titulocorreo = fila.insertCell(2);
                var tituloact = fila.insertCell(3);
                var titulocor = fila.insertCell(4);
                //agregamos los valores
                    titulonombre.innerHTML = nom;
                    tituloapellido.innerHTML = ape;
                    titulocorreo.innerHTML = cor;
                    tituloact.innerHTML = "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
                    titulocor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
                    tbody.appendChild(fila);
                    i++;
            });
        }
    });
}
//Llamanos a la funcion mostrar cuando cargue la pagina
window.onload = Mostrar;
//Creamos un procedimiento para registrar
function Registrar(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingrese sus nombres");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingrese sus apellidos")
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else{
        //Capturando valores
        var nom = txtNom.value;
        var ape = txtApe.value;
        var cor = txtCor.value;
        //Llamamos a la funcion del Firebase
        //seleccionamos la tabla
        //si la tabla no existe, automaticamente el firebase la crea
        var db = database.ref('registro');
        //asignamos los valores a la tabla que ha sido creada
        var registros = db.push();
        //Los valores se deberan de pasar con la estructura de JSON
        registros.set({
            'nombre': nom,
            'apellido': ape,
            'correo': cor,
        });
        alert("Se registro los datos");
        Limpiar();
        Mostrar();
    }
}
//creamos el procedimiento para actualizar
function Actualizar(){
    //Capturando valores
    var cod = txtCod.value;
    var nom = txtNom.value;
    var ape = txtApe.value;
    var cor = txtCor.value;
    //seleccionamos la tabla que vamos actualizar con su codigo correspondiente
    var db = database.ref("registro/"+ cod);
    //le pasamos los datos que vamos a actualizar
    db.update({
        nombre:nom,
        apellido:ape,
        correo: cor,
    });
    alert("Se actualizo el dato");
    //Llamamos el procedimiento limpiar
    Limpiar();
    //Llamamos el procedimiento Mostrar
    Mostrar();
}
//creamos un procedimiento para eliminar
function Eliminar(codigo){
    //preguntamos si se quiere eliminar 
    var result = confirm("¿Estas seguro que quieres eliminar el registro?");
    //evaluamos la respuesta 
    if(result){
        //pasamos el codigo al registro que se va a eliminar
        var cod = codigo;
        //seleccionamos la tabla con el codigo correspondiente para eliminarla
        var db = database.ref("registro/" + cod).remove();
        alert("Se elimino el dato");
        //Llamanos a la funcion Limpiar
        Limpiar();
        //LLamanos a la funcion Eliminar
        Mostrar();
    }
}
//Llamamos a la funcion Registrar en el boton
btnRegistrar.addEventListener("click",Registrar);
btnActualizar.addEventListener("click",Actualizar);