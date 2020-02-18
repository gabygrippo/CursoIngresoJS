function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;

	if(edad>=18)
	{
		alert("eres mayor");
	}
	else

	if(edad>=13 & edad<=17)
	{
		alert("eres adolescente");
	}	
	else
	{
		alert("eres un niño");
		

	}




}//FIN DE LA FUNCIÓN