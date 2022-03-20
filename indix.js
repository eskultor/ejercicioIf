const precio =3400;
const pago =prompt("Como vas a pagar \n[1] en targeta \n[2] en efectivo");

let dinero =0;
if(pago == 1)
{
	var x = alert("movil comprado ")
}
else if(pago==2)
{
	dinero =prompt("Cuanto dinero tienes");
	if(dinero >= precio)
	{
		var cambio = dinero - precio;
		alert("Movil comprado y su cambio es " + cambio + " Euros");
	}
	else
	{
		alert("ERES POBRE Y NO TE LLEGA EL DINERO");
	}

}
else
{
	alert("Opcion no valida");
}