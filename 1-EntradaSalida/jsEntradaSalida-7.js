/*Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % 
y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 %
 y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto 
con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó"*/ 


function CalcularPrecio () 

{

    // 1) Declarar variables

    var cantidad = 0;

    var precioUnidad = 35;

    var marca = "";

    var porcentajeDescuento = 0;

    var precioBruto = 0;

    var precioNeto = 0;

    var mensaje = "";

​

    // 2) Inicializar datos

    marca = document.getElementById("Marca").value;

    cantidad = document.getElementById("Cantidad").value;

    cantidad = parseInt(cantidad);

​

    // 3) Procesar datos

    //Calcular el precio bruto (sin descuentos)

    precioBruto = cantidad * precioUnidad;

    

    // Obtener el descuento

    if (cantidad >= 6) {

        porcentajeDescuento = 0.50;

    }

    else if (cantidad == 5) {

        if (marca == "ArgentinaLuz") {

            porcentajeDescuento = 0.40

        }

        else {

            porcentajeDescuento = 0.30;            

        }

    }

    else if (cantidad == 4) {

        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {

            porcentajeDescuento = 0.25;

        }

        else {

            porcentajeDescuento = 0.20;

        }

    }

    else if (cantidad == 3) {

		// Uso switch a modo de ejemplo, se puede hacer con if-elseif-else como los anteriores.

        switch (marca) {

            case "ArgentinaLuz":

                porcentajeDescuento = 0.15;

            break;

            case "FelipeLamparas":

                porcentajeDescuento = 0.10;

            break;

            default:

                porcentajeDescuento = 0.05;

            break;

        }

    }

​

    // Aplico el descuento y calculo el precio final. 

    precioNeto = precioBruto - precioBruto * porcentajeDescuento;

​

    // Preparo el mensaje de salida.

    mensaje = "El precio final es $";

​

    // Punto E)

    if (precioNeto > 120) {

        var impuesto = precioNeto * 0.10;

        precioNeto += impuesto;

        mensaje = mensaje + precioNeto + ". Usted pagó $" + impuesto + " de IIBB";

    }

    else {

        mensaje += precioNeto;

    }

​

    // 4) Mostrar resultados

    document.getElementById("precioDescuento").value = mensaje; 

}


