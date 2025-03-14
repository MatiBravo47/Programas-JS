/*
 * Reto #8
 * DECIMAL A BINARIO
 * Fecha publicación enunciado: 18/02/22
 * Fecha publicación resolución: 02/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa se encargue de 
 * transformar un número decimal a binario sin utilizar 
 * funciones propias del lenguaje que lo hagan directamente.
 */

const  DecimalToBinary = num =>{
    let storage = [] //inicia vector
    while (num !== 0){
        let rest  = parseInt(num % 2 )
        num = Math.floor (num / 2)
        storage.push(rest) //almacena restos 
    }
    const re = /,/gi //selecciona todas las comas
    return storage.reverse().toString().replace(re, '')
}   
console.log(DecimalToBinary(20))
