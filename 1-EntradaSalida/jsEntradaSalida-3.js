/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos. 
8-Promedios de negativos. 9-Diferencia entre positivos y negativos, (positvos-negativos). '*/


function mostrar()

{

	// 1) Declarar variables.

	var numero;

	var sumaPositivos = 0;	

	var cantidadPositivos = 0;

	var sumaNegativos = 0; 

	var cantidadNegativos = 0;

	var cantidadCeros = 0;

	var cantidadPares = 0;

	var promedioPositivos;

	var promedioNegativos;

	var diferenciaNegPos;

	var maximo;

	var minimo;

	var noHayMaximoMinimo = true;

	var seguir; 

​

	//Pedir hasta que el usuario quiera.

	do {

		numero = prompt("Ingrese un número)");

		numero = parseInt(numero);

​

		//Valido

		while(isNaN(numero)) {

			numero = prompt("ERROR. Debe ingresar un número)");

			numero = parseInt(numero);

		}

​

		// 5-Cantidad de ceros. 

		if (numero == 0) { // ES cero.

			cantidadCeros++;

		}

		else 

		{ // NO es cero.

			if (numero < 0) { // Es negativo

				// 1-Suma de los negativos. 

				sumaNegativos += numero;

				// 4-Cantidad de negativos. 

				cantidadNegativos++;

			}

			else { // Es positivo

				// 2-Suma de los positivos.

				sumaPositivos = sumaPositivos + numero;

				// 3-Cantidad de positivos. 

				cantidadPositivos = cantidadPositivos + 1;

			}

​

			if (numero % 2 == 0) { // ES PAR.				

				// 6-Cantidad de números pares. 

				cantidadPares++;

			}

		}

​

		// 10 - Maximo numero

		// 11 - Minimo numero

		if (noHayMaximoMinimo == true) {

			maximo = numero;

			minimo = numero;

			noHayMaximoMinimo = false;

		}

		else if (numero > maximo) {

			maximo = numero;

		}

		else if (numero < minimo) {

			minimo = numero;

		}		

	} while(seguir.toUpperCase() == "S");

	

	// 7-Promedio de positivos.

	if(cantidadPositivos > 0) {

		promedioPositivos = sumaPositivos / cantidadPositivos;

	}

	else {

		promedioPositivos = "No se puede calcular el promedio.";

	}

​

	// 8-Promedios de negativos. 

	if(cantidadNegativos > 0) {

		promedioNegativos = sumaNegativos / cantidadNegativos;

	}

	else {

		promedioNegativos = "No se puede calcular el promedio.";

	}

​

	// 9-Diferencia entre positivos y negativos, (positvos-negativos).

	diferenciaNegPos = sumaPositivos - sumaNegativos;

​

	document.write("Suma de negativos: " + sumaNegativos + "<br>");

	document.write("Suma de positivos: " + sumaPositivos + "<br>");

	document.write("Cantidad de negativos: " + cantidadNegativos + "<br>");

	document.write("Cantidad de positivos: " + cantidadPositivos + "<br>");

	document.write("Cantidad de ceros: " + cantidadCeros + "<br>");

	document.write("Cantidad de pares: " + cantidadPares + "<br>");

	document.write("Promedio de positivo: " + promedioPositivos + "<br>");

	document.write("Promedio de negativos: " + promedioNegativos + "<br>");

	document.write("Diferencia: " + diferenciaNegPos + "<br>");

	document.write("Maximo: " + minimo + "<br>");

	document.write("Minimo: " + maximo + "<br>");

}




