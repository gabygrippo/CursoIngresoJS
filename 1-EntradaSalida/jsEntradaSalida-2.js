/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
	
	
//flag
var peso;

var menorPeso;

var flagPrimerPeso= true;      // declaras la bandera true para que ingrese

if (flagPrimerPeso == true){

    menorPeso = peso;         // ingresa y guarda el primer dato 

    flagPrimerPeso = false;   // la pasas a false para que no vuelva a entrar

 }

 if (menorPeso > peso){       // si el proximo peso que ingreses es menor al menorPeso guardado, lo reemplaza.

     menorPeso = peso

 }


}

