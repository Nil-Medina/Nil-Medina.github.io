//creamos un vector que contenga la informacion
var alumno=[];
//creamos un procedimiento para registrar
function Registrar(nomalumno,apealumno,dnialumno,curalumno,turalumno,estalumno,){
    var NuevoAlumno={
        nombre: nomalumno,
        apellido: apealumno,
        dni: dnialumno,
        curso: curalumno,
        turno: turalumno,
        estado: estalumno
    };
    alumno.push(NuevoAlumno);
}
//Creamos una funcion para obtener los valores del registro
function Mostrar(){
    return alumno;
}