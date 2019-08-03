function Ej2()
{
    var nombre;
    var edad;
    var acumuladorEdad=0;
    var ganados;
    var acumuladorGanados=0;
    var perdidos;
    var acumuladorPerdidos=0;
    var jugadores=0;

    var nombreMax;
    var nombreMin;
    var nombreGanador;
    var nombrePerdedor;
    var edadMax=0;
    var edadMin=0;
    var ganadosMax=0;
    var perdidosMax=0;

    var respuesta=true;
    var primeraVez=true;

    while(respuesta){
        nombre=prompt("Nombre del tenista");
        jugadores++;

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
            nombreMax=nombre;
            nombreMin=nombre;
            nombreGanador=nombre;
            nombrePerdedor=nombre;
            edadMax=edad;
            edadMin=edad;
            ganadosMax=ganados;
        }else{
            if(edad>edadMax){
                nombreMax=nombre;
                edadMax=edad;
            }else{
                if(edad<edadMin){
                    nombreMin=nombre;
                    edadMin=edad;
                }else{
                    if(ganados>ganadosMax){
                        nombreGanador=nombre;
                        ganadosMax=ganados;
                    }else{
                        if(perdidos>perdidosMax){
                            nombrePerdedor=nombre;
                            perdidosMax=perdidos;
                        }
                    }
                }
            }
        }
        respuesta=confirm("Desea ingresar los datos de otro tenista");
    }

    console.log("1. promedio de edad: "+(acumuladorEdad/jugadores));
    console.log("2. promedio de victorias: "+(acumuladorGanados/jugadores));
    console.log("3. promedio de derrotas: "+(acumuladorPerdidos/jugadores));
    console.log("4. el jugador mas viejo: "+nombreMax);
    console.log("5. el jugador mas joven: "+nombreMin);
    console.log("6. el jugador con mas victorias: "+nombreGanador);
    console.log("7 el jugador con mas derrotas: "+nombrePerdedor);
}