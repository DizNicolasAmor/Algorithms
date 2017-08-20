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

Capítulo 4


The sum of a range

The introduction of this book alluded to the following as a nice way 
to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to 
(and including) end.

function myRange(start, end){
  var array = [];
  for(var i = start; i <= end; i++){
    array.push(i);
  }
  return array;
}

myRange(1, 10);

Next, write a sum function that takes an array of numbers and returns 
the sum of these numbers. Run the previous program and see whether 
it does indeed return 55.

function sumRange(start, end){
  var answer = 0;
  for(var i = start; i <= end; i++){
    answer += i;
  }
  return answer;
}

sumRange(1, 10);


As a bonus assignment, modify your range function to take an optional 
third argument that indicates the “step” value used to build up the array. 
If no step is given, the array elements go up by increments of one, 
corresponding to the old behavior. The function call range(1, 10, 2) 
should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values 
so that range(5, 2, -1) produces [5, 4, 3, 2].

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
