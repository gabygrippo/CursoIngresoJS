function mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	estadoCivil=document.getElementById('estadoCivil').value;
	edad=document.getElementById('edad').value;
	

	if(edad <=18 && estadoCivil !="soltero") 
	{
		alert("Es muy pequeño para No ser soltero");
	}

	


}//FIN DE LA FUNCIÓN