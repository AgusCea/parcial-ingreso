function Ej5()
{
    var coeficienteA;
    var coeficienteB;
    var coeficienteC;
    var primerResultado;
    var segundoResultado;

    coeficienteA=prompt("Ingresar coeficiente A de la ecuación: (Ax)*(Ax)+Bx+C=0");
    coeficienteA=parseInt(coeficienteA);
    coeficienteB=prompt("Ingresar coeficiente B de la ecuación (Ax)*(Ax)+Bx+C=0");
    coeficienteB=parseInt(coeficienteB);
    coeficienteC=prompt("Ingresar coeficiente C de la ecuación (Ax)*(Ax)+Bx+C=0");
    coeficienteC=parseInt(coeficienteC);
    
    primerResultado= (((-1)*coeficienteB+Math.sqrt(coeficienteB*coeficienteB-4*coeficienteA*coeficienteC))/(2*coeficienteA));
    segundoResultado= (((-1)*coeficienteB-Math.sqrt(coeficienteB*coeficienteB-4*coeficienteA*coeficienteC))/(2*coeficienteA));

    alert("Las raices de la ecuación son: "+primerResultado+" y "+segundoResultado);
}

