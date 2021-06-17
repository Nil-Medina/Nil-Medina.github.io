Algoritmo Ejemplo3
	//definiendo variables
	Definir n1, n2, prom Como Real;
	Definir men como texto;
	//inicializando variables
	n1=0; n2=0; prom=0; men="";
	//capturando valores
	Escribir "Ingrese la nota 1:";
	Leer n1;
	Escribir "Ingrese la nota 2:";
	Leer n2;
	//realizando operaciones
	prom=(n1+n2)/2;
	//condicion
	si (prom>=13) Entonces
		men="Aprobado";
	FinSi
	//mostrando resultados
	Escribir "El promedio es: ",prom;
	Escribir men;
FinAlgoritmo
