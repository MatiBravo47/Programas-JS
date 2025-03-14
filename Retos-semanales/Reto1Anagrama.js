/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(word1, word2){
    //si son iguales no son anagramas
    if (word1.toLowerCase() == word2.toLowerCase()){
        return(false)}
    //Paso las palabras a minusculas(.loLowerCase()), creo vector de caracteres(.split('')), ordeno el vector alfabeticamente (.sort),
    //los vuelvo a unir (.join("")) y comparo si son iguales 
    return(word1.toLowerCase().split("").sort().join("") == word2.toLowerCase().split("").sort().join(""))
    } 
console.log(anagrama("amor", "roma"))
console.log(anagrama("roma", "roma"))
