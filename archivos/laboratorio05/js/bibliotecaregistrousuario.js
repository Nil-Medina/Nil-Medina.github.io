//Declaramos variables para los controles
var txtCor = document.getElementById("txtCor");
var txtCon = document.getElementById("txtCon");
var btnRegistrar = document.getElementById("btnRegistrar");
//creamos una funcion para limpiar
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}

//Creamos un procedimiento para registrar
function Registrar(){
    if(txtCor.value==""||txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if (txtCon.value==""||txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    }else{
        var cor=txtCor.value;
        var con=txtCon.value;
        //Llamando al codigo de Firebase para registrar
        auth.createUserWithEmailAndPassword(cor,con)
        .then((userCredential) => {
        alert("Se registro el usuario")
        Limpiar();
        })
        .catch((error) => {
        alert("No se registro el usuario");
        Limpiar();
        });
    }
}
//asignamos el procedimiento al boton
btnRegistrar.addEventListener("click",Registrar);