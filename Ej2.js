function Ej2()
{
    var nombre;
    var edad;
    var acumuladorEdad=0;
    var ganados;
    var acumuladorGanados=0;
    var perdidos;
    var acumuladorPerdidos=0;
    var contador=0;

    var masEdad=0;
    var menosEdad=0;

    var respuesta=true;
    var primeraVez=true;

    while(respuesta){
        nombre=prompt("Nombre del tenista");
        contador++;

        edad=prompt("Edad del tenista");
        edad=parseInt(edad);
        acumuladorEdad=acumuladorEdad+edad;

        ganados=prompt("Partidos ganados");
        ganados=parseInt(ganados);
        acumuladorGanados=acumuladorGanados+ganados;

        perdidos=prompt("Partidos perdidos");
        perdidos=parseInt(perdidos);
        acumuladorPerdidos=acumuladorPerdidos+perdidos;

        if(primeraVez){  //Tambien puedo usar un contador inicializado en 1
            primeraVez=false;
            masEdad=edad;
            menosEdad=edad;
        }else{
            if(edad>masEdad){
                masEdad=edad;
            }else{
                if(edad<menosEdad){
                    menosEdad=numero;
                }
            }
        }
        respuesta=confirm("Desea ingresar los datos de otro tenista");
    }

    console.log("1. promedio de edad: "+(acumuladorEdad/contador));
    console.log("2. promedio de victorias: "+(acumuladorGanados/contador));
    console.log("3. promedio de derrotas: "+(acumuladorPerdidos/contador));
    console.log("4. jugador más viejo: El que tiene "+masEdad);// Modificar
    console.log("5. jugador más joven: El que tiene "+menosEdad);//  Modificar
}
/*if(contador==1){
    ganadosMax=ganados;
    nombreMax=nombre;
}else{
    if(ganados...)
}*/