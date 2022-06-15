// Uso solo un selector
const carruseljs = document.querySelector(".items")

//Creare una variable que rrealizara la acción
// clientWidth --> retorna bien la anchura en pixels del contenido de un elemento
//scrollLeft --> establece el numero de pixels que desplaza el contenido de un elemento hacia la izquierda
let izquierda  = carruseljs.scrollLeft - carruseljs.clientWidth
let intervalo = null //  null --> el tiempo de inicio
let pasos = 1.5 // Velocidad de desplazamiento

// Crear una constante que dará el inicio automatico:
const star = () =>{
    // Ejecuta una función o un fragmento de código de forma repetitiva
    intervalo = setInterval(function(){
        //METODO:
        carruseljs.scrollLeft = carruseljs.scrollLeft + pasos //Esto es lo que se va a ejecutar 10 veces 

        //CONDICIONES: si la estructura es "===" es identico totalmente, que es una condicion que se debe de cumplir, en este caso avanzara hacia la izquierda.
        if (carruseljs.scrollLeft === maxScrollLeft){
            pasos = pasos *-1
        } 
        else if(carruseljs.scrollLeft === 0){
            pasos = pasos *-1
        }
    },30) //La cantidad de veces que se va a repetir
}

const stop = () =>{
    clearInterval(intervalo)
}

// EVENTO QUE AL PASAR EL MOUSE SE DETENGA EL SCROLL
carruseljs.addEventListener("mouseover", () =>{
    stop()
})

carruseljs.addEventListener("mouseout", () =>{
    star()
})
// 2. LLAMAR AL METODO CREADO: SIEMPRE LLAMAR AL METODO, PARA QUE LA MAQUINA LO ENCUENTRE Y LO REALICE.
star();
