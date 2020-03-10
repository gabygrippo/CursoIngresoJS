function mostrar()
{	
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferenciaPosNes=0;
	var respuesta;

	
	do{ 

		numeroIngresado=prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
	
	
	if(numeroIngresado>0){//positivos.
		sumaPositivos=sumaPositivos+numeroIngresado;
		cantidadPositivos++;
	}
	if(numeroIngresado<0){ //negativos.
		sumaNegativos=sumaNegativos+numeroIngresado;
		cantidadNegativos++;
	}
	else{
		cantidadCeros++;
	}
	if(numeroIngresado %2 ==0){
		cantidadPares++;
		if (numeroIngresado %2 !=0){
			cantidadNegativos++;
		}

		if(cantidadNegativos>0){
			promedioNegativos=sumaNegativos/ cantidadNegativos;
		}
		if(cantidadPositivos>0){
			promedioPositivos=sumaPositivos/cantidadPositivos;
		}
	}while(confirm("¿Desea ingresar otro registro?"));
		diferenciaPosNes=cantidadPositivos - cantidadNegativos; 
   
    document.write("Suma de los negativos "+sumaNegativos+"<br>") ;  
    document.write("Suma de los positivos." +sumaPositivos+"<br>");
    document.write("Cantidad de positivos." +cantidadPositivos+ "<br>");
    document.write("Cantidad de negativos. "+cantidadNegativos+ "<br>");
    document.write("Cantidad de ceros. " +cantidadCeros+ "<br>");
    document.write("Cantidad de números pares." +cantidadPares+ "<br>");
    document.write("Promedio de positivos. "+promedioPositivos+ "<br>");
    document.write("Promedios de negativos. "+promedioNegativos+"<br>");
    document.write("Diferencia entre positivos y negativos, (positvos-negativos)"+diferenciaPosNes+"<br>"); 

	
}//FIN DE LA FUNCIÓN