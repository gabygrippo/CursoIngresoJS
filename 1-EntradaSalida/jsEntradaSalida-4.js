/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
	Funciones útiles para el parcial:

    .toUpperCase() - Cambia todo el texto a mayúsculas. 
    .toLowerCase() - Cambia todo el texto a minúsculas.
    .toFixed(cantidadDecimales) - Establece la precisión decimal de un flotante. Elijo la cantidad de decimales a mostrar. 
    Math.random() - Obtiene un número flotante aleatorio entre cero y uno incluidos. 
    Math.floor(numero) - Redondea para abajo al entero más cercano. 
    Math.ceil(numero) - Redondea para arriba al entero más cercano. 
    confirm(mensaje) - Muestra una ventana modal con un mensaje, un botón de aceptar y uno de cancelar. Devuelve true si se presiona aceptar, false de lo contrario.
    isNaN(valor) - Evalúa si el valor pasado por parámetro NO es numérico. Devuelve true si NO es numérico, false de lo contrario. 
*/


function mostrar()

{

    // Declarar variables

    var numero;

    var letra;

    var cantCeros = 0;

    var sumaPares = 0;

    var restaImpares; 

    var esPrimerImpar = true;

    var acumuladorNegativos = 0;

    var contadorNegativos = 0;

    var acumuladorPositivos = 1;

    var cantVocales = 0;

    var promedioNegativos;

    var esPrimeraIteracion = true;

    var maximo;

    var minimo;

    var letraMaximo;

    var letraMinimo;

    var mensaje = "";

​

​

    // 2) Pedir y validar los datos

    do {

        letra = prompt ("Ingrese una letra (no ñ):");

        while(letra.toLowerCase() < "a" || letra.toLowerCase() > "z") 

        {

            letra = prompt("Error. Debe Ingresar una letra (no ñ):");

        }

​

        numero = prompt("Ingrese un numero entre -10 y 10 :");

        numero = parseInt(numero);

        while(isNaN(numero) || numero < -10 

                || numero > 10) {

            numero = prompt("ERROR. Debe ingresar un numero entre -10 y 10:");

            numero = parseInt(numero);

        }

​

        // c) La cantidad de ceros.

        if (numero == 0) {

            cantCeros++;

        }

        else  // numero != 0

        {

            // a) La resta de los números impares.            

            // b) La suma de los números pares.

            if (numero % 2 == 0) {

                sumaPares += numero;

            }

            else // Numero % 2 != 0 (sin cero)

            {

                if (esPrimerImpar) {

                    restaImpares = numero

                    esPrimerImpar = false;

                }

                else{

                    restaImpares -= numero;

                }

            }     

        

            // d) El promedio de todos los números negativos ingresados.

            // e) La multiplicación de todos los números positivos.

            if(numero < 0) {

                contadorNegativos++;

                acumuladorNegativos += numero;

            }

            else // numero > 0 

            {

                acumuladorPositivos *= numero;

            }

        }

        

        // f) El número y la letra del máximo.

        // g) El número y la letra del mínimo.

        if (esPrimeraIteracion) {

            minimo = numero;

            letraMinimo = letra;

            maximo = numero;

            letraMaximo = letra;

        }

        else if (numero > maximo) {

            maximo = numero;

            letraMaximo = letra;

        }

        else if (numero < minimo) {

            minimo = numero;

            letraMinimo = letra;

        }

​

        // h) La cantidad de vocales.

        switch(letra.toUpperCase()) {

            case "A":

            case "E":

            case "I":

            case "O":

            case "U":

                cantVocales++;

            break;

        }

        

        esPrimeraIteracion = false;

​

    } while(confirm("¿Desea ingresar otro registro?"));

​

    // 3) Procesar los datos.

    if (contadorNegativos > 0) 

    {

        promedioNegativos = acumuladorNegativos / contadorNegativos; 

    }

    else 

    {

        promedioNegativos = "No se ingresaron negativos. No se puede calcular.";

    }

​

    mensaje += "La resta de los impares es: " + restaImpares + ".<br>";

    mensaje += "La suma de los pares es: " + sumaPares + ".<br>";

    mensaje += "La cantidad de ceros es: " + cantCeros + ".<br>";

    mensaje += "El promedio de los negativos es: " + promedioNegativos + ".<br>";

    mensaje += "La multiplicación de los positivos es: " + acumuladorPositivos + ".<br>";

    mensaje += "El número máximo es: " + maximo + " y su letra es " + letraMaximo + ".<br>";

    mensaje += "El número máximo es: " + minimo + " y su letra es " + letraMinimo + ".<br>";

    mensaje += "La cantidad de vocales es: " + cantVocales + ".<br>";

​

    // 4) Mostrar el resultado

    document.write(mensaje);

}


}

