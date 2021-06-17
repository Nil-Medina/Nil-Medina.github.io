Algoritmo Ejemplo3
	//definiendo variables
	Definir bas, alt, area Como Real;
	Definir men como texto;
	//inicializando variables
	bas=0; alt=0; area=0; men="";
	//capturando valores
	Escribir "Ingrese la base del rectangulo:";
	Leer bas;
	Escribir "Ingrese la altura del rectangulo";
	Leer alt;
	//Realizando operaciones
	area=bas*alt;
	//condicion
	si (area>100)Entonces
		men="Es un rectangulo grande";
	SiNo
		men="Es un rectangulo pequeño";
	FinSi
	//mostrando resultados
	Escribir "El area del rectangulo es: ",area;
	Escribir men;
FinAlgoritmo
