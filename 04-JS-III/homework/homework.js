// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return (array[array.length - 1]); 
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length ;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArreglo = [];
  for (var i = 0; i < array.length; i++) {
    nuevoArreglo.push(array[i] + 1);
  }
  return nuevoArreglo;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}



function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras.join(" ");
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (array[i]===elemento) return true;  
  } 
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var i = 0; i < numeros.length; i++){
    suma += numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0;
  for (var i = 0; i < resultadosTest.length; i++){
    promedio += resultadosTest[i];
  }
  return promedio / resultadosTest.length;  
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  //    [10, 9, 8, 15, 27]
  // i   0                 -Mi funcion dice si numMayor con valor 0 es menor a el valor donde este ubicado [i] returna true.
  // i       10            -Como yo puse numMayor = numeros[i]; numMayor tomaria el valor, en este caso de 10. Entonces si numMayor es 
  //                       menor al valor donde este ubicado [i] daria true, pero como 10 es mayor a 9 retornaria a FALSE.
  // i          9          -Con la misma teoria 9 es mayor a 8 daria FALSE
  //i               8      -8 es menor a 15 daria TRUE. Y si es true me va a retornar el numMayor como pide el enunciado.

  var numMayor = numeros[0];
  for (i = 0; i < numeros.length; i++) {
    if (numMayor < numeros[i]) numMayor = numeros[i];
  }
  return numMayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1) return 0;
  var producto = 1; 
  for (var i = 0; i < arguments.length; i++){
    producto *= arguments[i];
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var mayorA18 = 0;
for (var i = 0; i < arreglo.length; i++) {
  if (arreglo[i] > 18){
    mayorA18++;
  }
}
  return mayorA18;
}



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  // domingo  lunes martes  miercoles jueves  viernes sabado
  //    1       2     3       4         5       6       7
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  // tambien se puede poner continuando el codigo de arriba:
  // else if (numeroDeDia > 1 && numeroDeDia < 7){ return "Es dia Laboral";}
  }else {
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  // pasar numero a string porque los numeros no se pueden subdivir ejemplo 999 no se puede divir, "toni" quedaria "t-o-n-i"
  //en el ejercicios nos pide que si el numero empieza con 9 va a retornar TRUE de lo contrario FALSE. Ejemplo: 695 FALSE; 94321 TRUE; 94 TRUE; etc
  // El "9" es string, yo volvi n a string, no puedo pedir a una string numeros ni a numeros una string. Prestar atencion!
  var numeroString = n.toString();
  if (numeroString[0] === "9") {
    return true;
  }else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la {función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  // arreglo = [2,2,2]
  //key         0 1 2
  
  for (var i = 0; i < arreglo.length -1; i++){
    if (arreglo[i] !== arreglo[i+1]) {
      return false;
    } 
  }   
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  //array   E,F,M,A,M,J,J,A,S,O, N, D
  //key     0 1 2 3 4 5 6 7 8 9 10  11
  arrayMeses = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      arrayMeses.push(array[i])
      }
      // .includes()--> si tiene un valor dentro de la array
      // .hasOwnProperty()--> si tiene propiedades dentro de un objeto
      //if (arrayMeses.includes("Enero") && arrayMeses.includes("Marzo") && arrayMeses.includes("Noviembre")) {return arrayMeses}
    } if (arrayMeses.length === 3){
      return arrayMeses;
    } else {
      return "No se encontraron los meses pedidos";
    }
  }
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var arrayAumentado = [];
var suma = numero;
for (var i = 0; i < 10; i++){
  suma += 2
  if (suma === i){
    break;
  }else {
    arrayAumentado.push(suma);
  }
}
if (arrayAumentado.length < 10){
  return "Se interrumpió la ejecución";
}
  return arrayAumentado;
}  

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var aumento = numero;
  for ( var i = 0; i < 10; i++){
    if (i === 5){
      continue;
    } else {
      aumento += 2;
      array.push(aumento)
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
