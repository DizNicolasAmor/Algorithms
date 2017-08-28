# EJERCICIOS del libro ELOQUENT JAVASCRIPT #


## Capítulo 2 ##


#### Iterando un triángulo ####

Escribe un bucle que haga siete llamadas a console.log para producir el siguiente triángulo:

>        #
>        ##
>        ###
>        ####
>        #####
>        ######
>        #######

Puede ser útil saber que puedes encontrar la longitud de una cadena de texto escribiendo .length después de ella.

```
var text = '#';
while(text.length < 8){
  console.log(text);
  text += '#';
}
```

#### FizzBuzz ####

Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz" en vez del número y para números divisibles por 5 (pero no por 3), imprime "Buzz".

Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", para números que sean divisibles tanto por 3 como por 5 (y que siga imprimiendo "Fizz" o "Buzz" para números divisibles por sólo uno de ellos).
(Esta es en realidad una pregunta de entrevista de la que se dice que elimina a un porcentaje significativo de programadores candidatos. Así que si lo resolviste, puedes sentirte bien contigo mismo.)

```
for(var i = 1; i <= 100; i++){
  if( i % 5 === 0 && i % 3 === 0){
      console.log('FizzBuzz');
  }
  else if(i % 5 === 0){
      console.log('Buzz');
  }
  else if(i % 3 === 0){
    console.log('Fizz');
  }
  else{
    console.log(i);
  }
}
```

#### Tablero de Ajedrez ####


Escribe un programa que cree un cadena de texto que represente una cuadrícula de 8x8, usando el salto de línea como separador. En cada posición de la cuadrícula está o un espacio o un carácter "#". Los caracteres deberían formar un tablero de ajedrez. Pasar esta cadena a console.log debería mostrar algo como esto: 


>        # # # #
>       # # # #
>        # # # #
>       # # # #
>        # # # #
>       # # # #
>        # # # #
>       # # # #


Cuando tengas un programa que genere este patrón, defina una variable tamano = 8 y cambia el programa de tal manera que trabaje para cualquier tamano, produciendo una cuadrícula del ancho y alto dado. 


```
function ajedrez(){
  var textoPar = "";
  var textoImpar = "";
  while(textoPar.length < 8){
    if(textoPar.length % 2 === 0){
      textoPar += "#";
      textoImpar += " ";
    } 
     if(textoPar.length % 2 === 1){
      textoPar += " ";
      textoImpar += "#";
    } 
  }
  for(var i = 0; i<8; i++){
    if(i % 2 === 0) console.log(textoPar + "\n");
    if(i % 2 === 1) console.log(textoImpar + "\n");
  }
}
ajedrez();


function ajedrez(tamano){
  var textoPar = "";
  var textoImpar = "";
  while(textoPar.length < tamano){
    if(textoPar.length % 2 === 0){
      textoPar += "#";
      textoImpar += " ";
    } 
    else if(textoPar.length % 2 === 1){
      textoPar += "-";
      textoImpar += "#";
    } 
  }
  for(var i = 0; i < tamano; i++){
    if(i % 2 === 0) console.log(textoPar + "\n");
    if(i % 2 === 1) console.log(textoImpar + "\n");
  }
}

ajedrez(1);
```



## Capítulo 3 ## 


#### Mínimo ####

El capítulo anterior intordujo la función estándar Math.min que devuelve su argumento más pequeño. Ahora nosotros mismos podemos hacer eso. Escribe una función min que tome dos argumentos y devuelva el mínimo. 

```
function returnMin(a, b){
  if(a<b) return a;
  return b;
}
```

#### Recursión ####

Hemos visto que % (el operador de sobrante) puede ser usado para probar si un número es par o impar usando % 2 para checar si es divisible por dos. Aquí hay otra forma de definir si un número entero es par o impar:  Cero es par. Uno es impar. Para cualquier otro número N, su paridad es la misma que N - 2. 

Escribe una función recursiva esPar que corresponda a esta descripción. La función debería aceptar un numero como parámetro y regresar un Booleano. Pruebala con 50 y 75. Observa cómo se comporta con -1. ¿Por qué? ¿Puedes pensar en alguna forma de componer esto? 

```
function esPar(n){
  if(n < 0) n *= - 1;
  if(n === 0) return true;
  if(n === 1) return false;
  return esPar(n - 2);
}
```

#### Contando Frijoles ####

Puedes obtener el nuevo caracter, o letra, de una cadena escribiendo "cadena".charAt(N), similar a como obtienes su longitud con "cadena".length. El valor obtenido será una cadena que contiene sólo un caracter(por ejemplo, "b"). El primer caracter tiene la posición cero, lo cual hace que el último pueda ser encontrado en la posición string.lenght -1. 

Escribe una función cuentaFs que tome una cadena como su único argumento y regrese un número que indique cunántos caracteres “F” mayúscula hay en la cadena. A continuación, escribe una funcióon llamada cuentaCaracter que se comoporte como cuentaFs, con la diferencia de que tome un segundo caracter que indique el caracter que será contado (en vez de sólo caracteres “F”). Reescribe cuentaFs para hacer uso de esta nueva función.

```
function cuentaFs(str){
  var cuenta = 0;
  str = str.toLowerCase();
  for(var i=0; i<str.length; i++){
    if(str.charAt(i) === 'f') cuenta++;
  }
  return cuenta;
}

function cuentaCaracter(str, ch){
  var cuenta = 0;
  str = str.toLowerCase();
  ch = ch.toLowerCase();
  for(var i=0; i<str.length; i++){
    if(str.charAt(i) === ch) cuenta++;
  }
  return cuenta;
}
```



## Capítulo 4 ##


#### The sum of a range ####

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers: console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

```
function myRange(start, end){
  var array = [];
  for(var i = start; i <= end; i++){
    array.push(i);
  }
  return array;
}

myRange(1, 10);
```

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

```
function sumRange(start, end){
  var answer = 0;
  for(var i = start; i <= end; i++){
    answer += i;
  }
  return answer;
}

sumRange(1, 10);
```

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

```
function myRange(start, end, step){
  var array = [];
  if(arguments.length === 2){
    for(var i = start; i <= end; i++){
      answer += i;
    }
  }
  else if(step === 0) return 'Invalid input: arguments[2]';
  else if(step > 0){
    for(var i = start; i <= end; i += step){
      array.push(i);
    }
  }
  else if(step < 0){
    if(start < end) return 'Invalid start and end.';
    for(var i = start; i >= end; i += step){
      array.push(i);
    }
  }
  return array;
}

 myRange(1, 10, 2);
 myRange(5, 2, -1);
```

#### Reversing an array ####

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient? 

```
function reverseArray(arr){
  var reversedArr = [];
  for(var i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

reverseArray([1, 2, 3, 4, 5]); 


function reverseArrayInPlace(arr){
  var reversedArr = [];
  for(var i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i]);
  }
  for(var j = 0; j < arr.length; j++){
    arr[j] = reversedArr[j];
  }
}


console.log(reverseArray(["A", "B", "C"]));
// ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// [5, 4, 3, 2, 1]
```


#### A list ####

Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on. 

```
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```

A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list. 

Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element. 

If you haven’t already, also write a recursive version of nth.

```
console.log(arrayToList([10, 20]));
// {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// 20


function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--){
    list = {
      value: array[i],
      rest: list
    };
  }
  return list;
}


function listToArray(list){
  var arr = [],
       node = list;
  while(node){
    arr.push(node.value);
    node = node.rest;
  }
  return arr;
}
/*  another option 
function listToArray(list){
  var arr = [];
  for(var node = list; node; node = node.rest){
    arr.push(node.value);
  }
  return arr;
}
*/

function prepend(num, list){
  var newList = {
    value: num,
    rest: list
  }
  return newList;
}

function nth(list, num){
  var arr = listToArray(list);
  if(arr[num]) return arr[num];
  else return undefined;
}
```


#### Deep comparison ####

The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual. To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object". 

```
// Your code here.

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, {here: 1, object: 2}));
// false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// true


function deepEqual(elem1, elem2){
  //both elements are objects
  if ( (typeof elem1 == "object" && elem1 != null) && (typeof elem2 == "object" && elem2 != null)){
    if(Object.keys(elem1).length != Object.keys(elem2).length){
      return false;
    }
    else{
      for (var prop in elem1) {
        if (elem2.hasOwnProperty(prop)){
          if (!deepEqual(elem1[prop], elem2[prop])){
            return false;
          }
        }
        else return false;
      }  //for
      return true;
    }
  }
  
  //they are not objects
  else if(elem1 === elem2){
      return true;
  }
  else return false;
}


var obj = {here: {is: "an", other: "3"}, object: 2};
console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, {here: 1, object: 2}));
// false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// false
console.log(deepEqual(obj, {here: {is: "an", other: "2"}, object: 2}));
// false
console.log(deepEqual(obj, {here: {is: "an", other: "3"}, object: 2}));
// true
```


## Capítulo 5 ##


#### Flattening ####

Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.

```
var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// [1, 2, 3, 4, 5, 6]

var input = [[1,2],['a','b'],[456],['c']];

var flattening = input.reduce(function(a, b){
  return a.concat(b);
}, []);

console.log(flattening);
```


#### Mother-child age difference ####


Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.

Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.

```
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

// 31.2

var ANCESTRY_FILE = JSON.stringify([
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
])

// This makes sure the data is exported in node.js —
// `require("./path/to/ancestry.js")` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;

var ancestry = JSON.parse(ANCESTRY_FILE); 


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});
```

/* byName es un mapa. Qué significa que sea un mapa? 

Es como una guía para buscar los objetos de ancestry (que es un array de objetos),  en este caso ordenados por nombre. byName es un gran objeto cuyas properties son los nombres de las personas de la familia. Y cada una de estas properties tiene como valor el objeto correspondiente a esta persona. Entonces vos podés hacer esto:     console.log(byName['Carolus Haverbeke']);   Y te va a devolver esto: 
```

Object {
  born: 1832,
  died: 1905,
  father: "Carel Haverbeke",
  mother: "Maria van Brussel",
  name: "Carolus Haverbeke",
  sex: "m"
}
*/

// Your code here.
// 31.2

var hasKnownMother = ancestry.filter(function(person) {
    return person.mother in byName;
}); 
```

//con esta función filtro el aray de objetos ancestry. Sólo dejo los objetos que representan a personas cuya madre también está representada en el array. Cómo sucede esto? Porque las personas cuya madre no figura en el array, tampoco están en byName, entonces person.mother in byName da false y quedan afuera. 

```
var ageDifference = hasKnownMother.map(function(person){
  return person.born - byName[person.mother].born;
});
```

//esta función map me devuelve un array de números. Cada uno representa la diferencia de edad entre una persona y su madre. 
```
console.log(average(ageDifference));
```

