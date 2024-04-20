var condition = true;
var i = 2;

while(condition) {
    if (i == 3) {
        condition = false;
    }
    console.log(i);
    i++;
}

//Este código nos sirve para ver otra manera en cómo funciona el ciclo while, ya que aquí tenemos 2 variables, una de tipo boolean, y otra de tipo number.
//Y estamos dándole como parámetro la variable booleana de condition a nuestro ciclo while, lo que quiere decir que no se va a detener hasta que condition sea false.
//Y lo que hace el ciclo while, es primero hacer su recorrido, hasta poder cumplir la condición del if.
//Al momento de cumplirse la condición del if, entra por ahí, y actualiza el valor booleano de condition por false, por lo cuál el ciclo termina.
//E imprime los números 2 y 3, porque le estamos diciendo fuera del if, que imprima i (cuyo valor inicial es 2) y luego le aumente su valor en 1.