function mostrar()
{
	var numuno=prompt("ingrese numero uno");
	var numdos=prompt("ingrese numero dos");
	numuno=parseInt(numuno);
	numdos=parseInt(numdos);

	if(numuno==numdos)
	{
		alert(numuno.toString() + numdos.toString());
	}

	else if (numuno > numdos)
	{
		alert(numuno - numdos);
	}

	else if(numuno < numdos)
	{
		alert(numuno + numdos);
	}

	else if(( numuno + numdos) >= 10)
	{
		alert("la suma es mayor a 10");
	}
	}
