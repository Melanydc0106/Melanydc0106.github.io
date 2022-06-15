// Array bidimensional donde se guardarán las preguntas junto a sus respuestas correctas correspondientes...

var preguntas = [																			// Pregunta Respuesta
['¿Qué sube, pero nunca baja?', 'la edad'],         //  [0][0]   [0][1]
['¿Qué entra duro pero sale blando y suave?', 'el chicle'],															//  [1][0]   [1][1]
['Es completamente tuyo, sin embargo, todos lo usan... ¿qué es?', 'el nombre'],                //  [2][0]   [2][1]
['¿Cuál es el principal motivo por el cual la gente se divorcia?', 'el matrimonio'],									// ...
['¿Qué objeto se moja cuando seca?', 'La toalla'],
['¿Cuál es la única cosa que tiene cara, pero que no tiene cuerpo?', 'una moneda'],
['¿Qué puedes agarrar con tu mano derecha, pero nunca con tu mano izquierda?', 'la mano izquierda'],
['¿Cuántos meses tienen 28 días?', 'todos los meses'],
['¿Qué sube y baja pero se queda siempre en el mismo sitio?', 'la escalera'],                               
['Si lo alimentas, vive; pero si le das agua, muere, ¿qué es?', 'el fuego']						// [9][0] y [9][1]
],
pregunta, respuesta,
formuladas = 0,
acertadas = 0;


hazPregunta();


/*
Se programa que al pulsarse el botón "Siguiente Pregunta" se compruebe si se ha acertado la pregunta, en cuyo caso, se incrementa en una unidad 'acertadas'.
También se comprueba si ya se han realizado las 5 preguntas, en cuyo caso, se llama a 'muestraResultado()' que mostrará el resultado del juego y terminará el programa, de lo contrario, se formula una nueva pregunta.
*/

document.getElementById('boton').addEventListener('click', function(){
var entrada = document.getElementById("dato").value;

if(entrada == respuesta){
acertadas++;
}

if(formuladas < 10){			// Si aun no se han hecho 5 preguntas...
hazPregunta();			// ... seguir preguntando
}
else{						// de lo contrario...
muestraResultado();		// ... finaliza juego mostrando el resultado
}
});


/*
Formula una pregunta al usuario...
*/

function hazPregunta(){
var e;			// simple variable auxiliar

// se extrae una pregunta/respuesta al azar del array...

e = preguntas.splice( numAleat(0, preguntas.length-1), 1 );
pregunta = e[0][0];			// se guardan la pregunta y la respuesta 
respuesta = e[0][1];

document.getElementById('preg').innerHTML = pregunta;        // se muestra la pregunta
document.getElementById('dato').value = '';                  // se borra lo escrito anteriormente por el usuario

formuladas++;
}


// Comprueba el número de preguntas acertadas y muestra mensaje en función de este...

function muestraResultado(){
var resultado;      // para guardar el mensaje con el resultado

switch(acertadas){
case 0:
    resultado = 'No has acertado una sola pregunta, toca pensar más, la pregunta esta en la lectura. :-/';
    break;
case 1:
    resultado = 'Bueno, al menos has acertado una pregunta, te falta un poco mas de lógica y de sazón graciosa :-)';
    break;
case 2:
    resultado = 'De todas maneras, eres bueno para comprender estas preguntas trampas, vas por un buen camino. ';
    break;
case 3:
    resultado = 'No está mal, 3/6 acertadas, ¡¡FIGHTING!!.';
    break;
case 4:
    resultado = 'Muy bien, has acertado 4 preguntas, te faltan dos más, para terminar :-)';
    break;
case 5:
    resultado = '¡Vas bien, has acertado a las 5 preguntas, te falta una más, tu puedes, ánimo, ánimo, ánimo! :-D';
    break;
case 6:
        resultado = '¡EXCELENTE, has acertado todas las preguntas, eres todo un crack en las preguntas capciosas! :-D';
        break;
        
}

document.getElementById('resolucion').innerHTML = resultado;
}


/*
Devuelve un número aleatorio entero entre 'min' y 'max' (ambos inclusive)
*/

function numAleat(min, max){
return Math.floor( Math.random() * (max - min + 1) ) + min;
}

