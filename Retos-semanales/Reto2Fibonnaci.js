/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 */
function fibonacci(num){
    let num1 = 0
    let num2 = 1
    let sum = 0
    if (num == 0) console.log(num)
    else 
        for (let i = 0; i < num; i++){
            sum= num1 + num2
            num2 = num1
            num1 = sum
            console.log(sum)            
        } 
}
fibonacci(50)
