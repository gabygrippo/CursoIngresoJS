//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
/*
 Para la gestión de un hotel:
Ingresar los siguientes datos validados de una reserva:

 * nombre del huésped que hizo la reserva.
  * numero de huespedes de la reserva.
* duracion de la estadia. 
 * forma de pago (efectivo , tarjeta o QR).
a) Informar el huésped que trajo más personas en una sola reserva.
b) Informar numero de huespedes que se quedaron más días.
c) Informar la forma de pago más utilizada.
d) Informar el promedio de cantidad de días por reserva.

*/

{
function mostrar() {

    // Còdigo

    var contadorEfectivo = 0;

    var contadorTarjeta = 0;

    var contadorQR = 0;

    var seguir;

    var nombreHuesped;

    var duracionEstadia;

    var numeroHuespedes;

    var formaPago;

    var maximoNumeroHuespedes;

    var nombreMaximoNumeroHuespedes;

    var maximaDuracionEstadia;

    var numHuespedesMaxDuracionEstadia;

    var promedioDuracionReserva;

    var acumuladorDuracionReserva = 0;

    var contadorReservas = 0; // de iteraciones

    var esPrimerIngreso = true;

    var pagoMasUsado;



    do {

        nombreHuesped = prompt("Ingrese el nombre:");



        duracionEstadia = parseInt(prompt("Ingrese la duracion:"));

        while(isNaN(duracionEstadia) || duracionEstadia < 1) {

            duracionEstadia = parseInt(prompt("Ingrese la duracion:"));

        }



        numeroHuespedes = parseInt(prompt("Ingrese el numero de huespedes:"));

        while(isNaN(numeroHuespedes) || numeroHuespedes < 1) {

            numeroHuespedes = parseInt(prompt("Ingrese el numero de huespedes:"));

        } 


        formaPago = prompt("Ingrese la forma de pago:");

        while(formaPago != "efectivo" && formaPago != "tarjeta" && formaPago != "qr") {

            formaPago = prompt("Ingrese la forma de pago:");

        }



        // a) Informar el huésped que trajo más personas en una sola reserva.

        if (esPrimerIngreso == true) {

            maximoNumeroHuespedes = numeroHuespedes;

            nombreMaximoNumeroHuespedes = nombreHuesped;

        }

        else if (numeroHuespedes > maximoNumeroHuespedes) {

            maximoNumeroHuespedes = numeroHuespedes;

            nombreMaximoNumeroHuespedes = nombreHuesped;

        }

    

        // b) Informar la cantidad de personas que se quedaron más días.

        if (esPrimerIngreso == true) {

            maximaDuracionEstadia = duracionEstadia;

            numHuespedesMaxDuracionEstadia = numeroHuespedes;                        

            esPrimerIngreso = false;

        }

        else if (duracionEstadia > maximaDuracionEstadia) {

            maximaDuracionEstadia = duracionEstadia;

            numHuespedesMaxDuracionEstadia = numeroHuespedes;

        }



        // c) Informar la forma de pago más utilizada.

        switch(formaPago) {

            case "efectivo":

                contadorEfectivo++;

            break;



            case "qr":

                contadorQR++;

            break;



            case "tarjeta":

                contadorTarjeta++;

            break;

        }


        // d) Informar el promedio de cantidad de días por reserva.

        acumuladorDuracionReserva += duracionEstadia;

        contadorReservas++;



        esPrimerIngreso = false;

        seguir = prompt("¿Desea ingresar otra reserva?");

    } while (seguir.toUpperCase() == "S");



    // if (contadorEfectivo > contadorTarjeta && contadorEfectivo > contadorQR) {

    //     pagoMasUsado = "efectivo";        

    // }

    // else if(contadorTarjeta > contadorEfectivo && contadorTarjeta > contadorQR) {

    //     pagoMasUsado = "tarjeta";

    // }

    // else {

    //     pagoMasUsado = "qr";

    // }



    if (contadorEfectivo > contadorTarjeta && contadorEfectivo > contadorQR) {

        pagoMasUsado = "efectivo";        

    }

    else {

        if (contadorTarjeta > contadorQR) {

            pagoMasUsado = "tarjeta";

        }

        else {

            pagoMasUsado = "qr";

        }

    }



    promedioDuracionReserva = acumuladorDuracionReserva / contadorReservas;

}

 			document.write("a) Informar el huésped que trajo más personas en una sola reserva"+nombreMaximoNumeroHuespedes+ "<br>");
			document.write("b) Informar numero de huespedes que se quedaron más días "+numHuespedesMaxDuracionEstadia+ "<br>");
			document.write("c) Informar la forma de pago más utilizada "+pagoMasUsado+ "<br>");
			document.write("d) Informar el promedio de cantidad de días por reserva " +promedioDuracionReserva+ "<br>");
}

