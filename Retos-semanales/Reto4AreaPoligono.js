/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) 
 * que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
function triangleArea(base, height){
    return base * height / 2 
}
function squareArea(side){
    return side**2
}
function rectangleArea(base, height){
    return base * height
}

console.log(triangleArea(5,7))
console.log(squareArea(2))
console.log(rectangleArea(3,4))

//done wrong, must be done all in one function.
