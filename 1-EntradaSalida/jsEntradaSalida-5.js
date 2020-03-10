/*Realizar el algoritmo que permita ingresar el nombre de un país,
cantidad de habitantes en millones entre 1 y 270 (validar que sea un número en ese rango),
y la temperatura mínima que se registra en su territorio (validar que sea un número entre -50 y 50)
hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas impares.
b) El nombre del pais con más habitantes.
c) La cantidad de paises por debajo de los 20 grados.
d) El promedio de habitantes entre los paises ingresados.
f) La temperatura máxima ingresada, y nombre del pais que registro esa temperatura.
	*/


function mostrar()

{

    // Declarar variables

    var pais;

    var cantidadHabitantes;

    var temperatura;

    var mensaje = "";

    var cantTempImpares = 0;

    var maximoHabitantes;

    var paisMasHabitantes;

    var esPrimerHabitante = true;

    var paisMasCalido;

    var maximaTemperatura;

    var esPrimeraTemperatura = true;

    var acumuladorHabitantes = 0;

    var contadorPaises = 0;

    var promedio;

    var cantPaisesFrios = 0;

​

​

    // 2) Pedir y validar los datos

    do {

        pais = prompt("Ingrese el nombre de un pais:");

​

        cantidadHabitantes = prompt("Ingrese la cant. de habitantes:");

        cantidadHabitantes = parseInt(cantidadHabitantes);

        while(isNaN(cantidadHabitantes) || cantidadHabitantes < 1 

                || cantidadHabitantes > 270) {

            cantidadHabitantes = prompt("ERROR. Debe ingresar un numero entre 1 y 270 (millones):");

            cantidadHabitantes = parseInt(cantidadHabitantes);

        }

​

        temperatura = prompt("Ingrese la temperatura entre -50 y 50 ºC:");

        temperatura = parseInt(temperatura);

        while(isNaN(temperatura) || temperatura < -50 

                || temperatura > 50) {

            temperatura = prompt("ERROR. Debe ingresar un numero entre -50 y 50 (ºC):");

            temperatura = parseInt(temperatura);

        }

​

        // A) Cantidad de temperaturas impares

        if (temperatura % 2 != 0) {

            cantTempImpares++;

        }

​

        // B) El nombre del pais con más habitantes.

        if (esPrimerHabitante || cantidadHabitantes > maximoHabitantes) {

            maximoHabitantes = cantidadHabitantes;

            paisMasHabitantes = pais;

            esPrimerHabitante = false;

        }

​

        // F)  La temperatura máxima ingresada, y nombre del pais que registro esa temperatura.

        if (esPrimeraTemperatura || temperatura > maximaTemperatura) {

            maximaTemperatura = temperatura;

            paisMasCalido = pais;

            esPrimeraTemperatura = false;

        }

​

        //c) La cantidad de paises por debajo de los 20 grados.

        if (temperatura < 20) {

            cantPaisesFrios++;

        }

​

        // d) El promedio de habitantes entre los paises ingresados.

        acumuladorHabitantes += cantidadHabitantes;

        contadorPaises++;

​

    } while(confirm("¿Desea ingresar otro registro?"));

​

    // 3) Procesar los datos.

    promedio = acumuladorHabitantes / contadorPaises;

​

    mensaje += "Cantidad de temperaturas impares: " + cantTempImpares + ".<br>";

    mensaje += "Nombre del país con más habitantes: " + paisMasHabitantes + ".<br>";

    mensaje += "Cantidad de paises por debajo de los 20°C: " + cantPaisesFrios + ".<br>";

    mensaje += "Promedio de habitantes entre los paises ingresados: " + promedio + ".<br>";

    mensaje += "Temperatura máxima: " + maximaTemperatura + " registrada en " + paisMasCalido +".<br>";

    

    // 4) Mostrar el resultado

    document.write(mensaje);

}



