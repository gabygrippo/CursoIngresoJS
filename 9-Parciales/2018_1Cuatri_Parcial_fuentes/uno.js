
function mostrar()
{
var ancho;
var largo;
var perimetro;

ancho=prompt("ingrese ancho");
largo=prompt("ingrese largo");

ancho=parseInt(ancho);
largo=parseInt(largo);

perimetro = (ancho + largo)*2;
perimetro=parseInt(perimetro);
alert(perimetro);


}
