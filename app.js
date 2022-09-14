// Q1. Return the sum of two numbers
// Create a function that takes two arguments as functions and return their sum
/**@example
 * addition(3, 2) -> 5
 * addition(-3, -6) -> -9
 * addition(7, 3) -> 10
 */

function addition(a, b) {
    return a + b
}

console.log(addition(5, 5))

// Convertir horas en  segundos
function converthour(num1) {
    return num1 * 3600
}

console.log(converthour(2))

//calcualr area de triangulo

function AreaTriangulo(base, altura) {
    return (base * altura)/2
}

console.log(AreaTriangulo(15, 3))

//Extender un string
function extenderString(texto) {
    return 'Frontend ' + texto
}
console.log(extenderString('OWO'))

//Para que un numero si o si se comporte como numero añades + antes a la variable por ejemplo funcion('1') (1 esta como texto) entonces dentro de
// la funcion cambiamos el argumento a (+argumento) y lo trata como nuemro y no como texto

//Ejercicio = Mayor a 100
// Dado dos número, devolver "TRUE" si la suma de ambos es mayor a 100, si no falso

function MayorA100(num1, num2) {
    return num1 + num2 > 100 
}

console.log(MayorA100(50, 80))
console.log(MayorA100(10, 15))
console.log(MayorA100(50, 50))

// OBtener lo opuesto de un valor booleano (Si pones True que returne false)
function booleanOpuesto(bool) {
    return !bool
}

console.log(booleanOpuesto(false))
console.log(booleanOpuesto(true))

// Retornar TRUE si NO ES 0

function EsCero(num1) {
    return num1 !== 0
}

console.log(EsCero(5))

// Funcion que de el resto de la division de dos numeros

function Remainder (num1, num2) {
    return num1 % num2
}

console.log(Remainder(7, 8))

// return true si es impar, false sies par

function EsImpar(num1) {
    return num1 % 2 !== 0
}

console.log(EsImpar(3))

// Si es par return 1, si es impar return -1

function booleanInteger(num1) {
    if (num1 % 2 === 0) {
        return 1
    }
    return -1
}

console.log(booleanInteger(6))

// OTRA FORMA DE ESCRIBIR EL DE ARRIBA

function IntegerBooleano(num1) {
    return num1 % 2 === 0 ? 1 : -1;
}

console.log(IntegerBooleano(3))

// Checkear si un usuario esta logeado y suscrito

function isLoggedInAndSubscribed(loggedIn, suscribed) {
    return loggedIn === 'LOGGED_IN' && suscribed === 'SUBSCRIBED'
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))

// Checkear siestá logeado O suscrito

function isLoggedInAndSubscribed2(loggedIn, suscribed) {
    return loggedIn === 'LOGGED_IN' || suscribed === 'SUBSCRIBED'
}

console.log(isLoggedInAndSubscribed2('LOGGED_IN', 'SUBSCRIBED'))