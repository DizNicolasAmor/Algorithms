Cap.2


Iterando un triángulo

Escribe un bucle que haga siete llamadas a console.log para producir el siguiente triángulo:

#
##
###
####
#####
######
#######

Puede ser útil saber que puedes encontrar la longitud de una cadena de texto escribiendo .length después de ella.

var text = '#';
while(text.length < 8){
  console.log(text);
  text += '#';
}


FizzBuzz

Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones. 
Para números divisibles por 3, imprime "Fizz" en vez del número y para números divisibles por 5 (pero no por 3), imprime "Buzz".

Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", para números que sean divisibles 
tanto por 3 como por 5 (y que siga imprimiendo "Fizz" o "Buzz" para números divisibles por sólo uno de ellos).
(Esta es en realidad una pregunta de entrevista de la que se dice que elimina a un porcentaje significativo de programadores candidatos. 
Así que si lo resolviste, puedes sentirte bien contigo mismo.)

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


Tablero de Ajedrez

Escribe un programa que cree un cadena de texto que represente una cuadrícula de 8x8, usando el salto de línea como separador. 
En cada posición de la cuadrícula está o un espacio o un carácter "#". Los caracteres deberían formar un tablero de ajedrez. 
Pasar esta cadena a console.log debería mostrar algo como esto: 

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

Cuando tengas un programa que genere este patrón, defina una variable tamano = 8 y cambia el programa de tal manera que trabaje 
para cualquier tamano, produciendo una cuadrícula del ancho y alto dado. 

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

