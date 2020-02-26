function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;



    switch(mesDelAño) {

        case "Enero":

        case "Febrero":

        case "Marzo":

        case "Abril":

        case "Mayo":

        case "Junio":

            alert("Falta para el invierno");

        break;

        case "Julio":

        case "Agosto":

            alert("Abrigate que hace frìo.");

        break;

        default:

            alert("Ya paso el invierno");

        break;

    }


}//FIN DE LA FUNCIÓN