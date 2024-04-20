for(var i = 2; i < 5; i = i + 3) {
    console.log(i);
}

//En este caso, solo constaría el 2, ya que los parámetros son:
//i es igual a 2, mientras i sea menor que 5, i va a ser igual a i (2) + 3.
//Por ende, al mostrarlo en la consola, el proceso será, i es 2, 2 es menor a 5? Verdadero, entonces suma 2 + 3.
//Ahora i es 5, 5 es menor que 5? Falso, entonces no lo muestres.

//En caso de escribir for(var i = 2; i < 5; i + 3) lo que pasará al momento de ejecutar el código, la consola mostrará un loop infinito de 2.
//Debido a que al realizar ese i + 3, no estamos actualizando el valor de i, por lo que la consola muestra solo i siempre que esta sea menor a 5.
//Y como nunca llega a actualizar su valor a un número mayor que 2, se crea ese bucle infinito.