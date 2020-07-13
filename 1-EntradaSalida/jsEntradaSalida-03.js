/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	// error
	//nombreIngresado=txtIdNombre. ;// [object HTMLInputElement]
	nombreIngresado=txtIdNombre.value;
	//nombreIngresado=document.getElementById('txtIdNombre').Value;
	alert("su nombre es: "+nombreIngresado);
	

}


