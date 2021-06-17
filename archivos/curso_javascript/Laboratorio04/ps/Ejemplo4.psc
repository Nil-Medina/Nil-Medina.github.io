Algoritmo Ejemplo4
	//definiendo variables
	Definir can Como Entero;
	Definir pre, sbt, des, igv, tot Como Real;
	Definir cat, com como texto;
	//inicializando variables
	can=0; pre=0; sbt=0; des=0; igv=0; tot=0; cat=""; com="";
	//capturando valores
	Escribir "Ingresa la cantidad a comprar:";
	leer can;
	Escribir "Ingresa el precio del producto:";
	Leer pre;
	Escribir "Ingresa la categoria:";
	Leer cat;
	Escribir "Ingresa el tipo de comprobante [f]Factura o [b]Boleta:";
	Leer com;
	//realizando operaciones
	sbt=can*pre;
	si (cat='d')Entonces
		des=sbt*0.07;
	SiNo
		des=sbt*0.03;
	FinSi
	
	si (com="f")Entonces
		igv=sbt*0.18;
	SiNo
		igv=0;
	FinSi
	tot=sbt-des+igv;
	//mostrando resultados
	Escribir "El subtotal es: ",sbt;
	Escribir "El descuento es:",des;
	Escribir "El igv es:", igv;
	Escribir "El total es:",tot;
FinAlgoritmo
