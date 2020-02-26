function mostrar()
{
	var descuento;
	var precio;
	var porcentaje;
	
	
	precio = prompt("precio");
	porcentaje =prompt("porcentaje de descuento");
	precio = parseInt(precio);
	porcentaje = parseInt(porcentaje);
	
	descuento= ((precio * porcentaje)/ 100);

  
	
	
	console.log(descuento);

	document.getElementById('elPrecioFinal').value=precio-descuento;
	
	

	}
