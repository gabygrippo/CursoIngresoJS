function mostrar()
{
//tomo la edad 
	var edad;
	var soltero;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	

	if(edad >=18 && estadoCivil == "soltero")
	{
		alert("no es menor y es soltero");
	} 

	


}//FIN DE LA FUNCIÓN