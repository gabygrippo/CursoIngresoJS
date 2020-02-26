function mostrar()
{
	
	var planetas;
	planetas=prompt("ingrese un planeta del sistema solar");

	switch(planetas)
	{
		case "tierra":
		alert("aca vivimos");
		break;

		case "mercurio":
		case "venus":
		alert("aca hace mas calor");
		break;

		case "jupiter":
		case "pluton":
		case "saturno":
		alert("aca hace mas frio");
		break;

		default:
		alert("no es un planeta valido");
		break;
	}
 
}
