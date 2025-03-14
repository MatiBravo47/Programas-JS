/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 *
 */

function esPrimo(n){
    if (n <= 1)
    return console.log(n,"no es primo");
    for (let i = 2; i <= n-1; i++)
        if (n % i == 0) 
            return console.log(n," no es primo");
    return console.log(n," es primo");
}
for (let n = 1; n <= 100; n++){
    esPrimo(n)
}
