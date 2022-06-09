// UNIDAD 2
// Tema: Funciones 
// 1.Realizar una funcion,a la que se le pase como parametro un numero N,
// y muestre por consola N veces,el siguiente mensaje: "Bienvenidos al curso de Full Stack"
// function repetirTexto(n){
//     for (let i=0; i< n;i++)
//          console.log("Bienvenidos al curso full Stack")
// }
// //Programa principal 
// let n=parseInt(prompt("Ingrese un numero entero:"))
// repetirTexto(n)

/*//2.Diseniar una funcion que tenga como parametros dos numeros,y que calcule el maximo
function valorMaximo(x,z){
    let max=0; 
    if (x>z)
        max= x
    else
        max= z
    return max
}
//programa principal 
let n=parseInt(prompt("Ingrese un numero entero:"))
let n1=parseInt(prompt("Ingrese otro numero entero:"))
document.write(valorMaximo(n,n1))*/

/*Crear una funcion que se llame promedio3,que reciba
como parametro tres valores y devuelta el proemdio de 
los mismos*/
/*function promedio3(n,n1,n2){
    return((n+n1+n2)/3)
}
//Programa principal 
let n=parseInt(prompt("Ingrese un numero entero:"))
let n1=parseInt(prompt("Ingrese otro numero:"))
let n2=parseInt(prompt("Ingrese otro numero:"))
document.write("El promedio de"+n+","+n1+","+n2+" es:"+ promedio3(n,n1,n2))*/


/*Crear una funcion que lea notas hasta que ingrese -1 y 
devuelve el promedio de las notas leidas.(aunque no se 
suele leer valores en una funcion)Una funcion que se llame 
siguiente,que reciba como parametro un valor entero, y
que devuelva el siguiente del numero ingresado como parametro
*/


/*5)Una funcion que se llame doble,que reciba como 
parametro un valor, y devuelva el doble del numero ingresado
como parametro*/
/*function doble(n){
    return (n*2)
}
//Programa principal
n=parseInt(prompt("Ingrese un numero"))
document.write("El doble de ese numero es: "+doble(n))*/

/*6)Una funcion que se llame cuadrado,que reciba como parametro
un visualViewport,y devuelva el valor del numero ingresado 
como parametro elevado al cuadrado.*/
/*function cuadrado(n){
    return (n**2)
}
//Programa principal
n=parseInt(prompt("Ingrese un numero"))
document.write("El cuadrado de ese numero es: "+cuadrado(n))*/

/*7)Una funcion que se denomine imprimirValores que dado un 
numero por parametro, imprimi cual es el valor siguiente,
el doble y el cuadrado. Usando las funciones definidas en 
los puntos 5), 6) y 7):siguiente , el doble y el cuadrado*/
/*function cuadrado(n){
    return (n**2)
}
function siguiente(n){
    return(n+1)
}
function doble(n){
    return (n*2)
}
function imprimirValores(n){
    document.write("El siguiente del numero es: "+siguiente(n))
    document.write("  .Su doble es: "+doble(n))
    document.write("  .Su cuadrado es: "+cuadrado(n))
}
//Programa principal 
n=parseInt(prompt("Ingrese un numero"))
imprimirValores(n)*/

/*8)Una funcion que se denomine imprimirELDobleDelSiguiente
que dado un numero por parametro,imprima cual es el valor
siguiente del doble.usando las funciones definidas de los 
puntos 5),6): siguiente,el doble.*/ 
/*function siguiente(n){
    return(n+1)
}
function doble(n){
    return(n*2)
}
function imprimirElDobleDelSiguiente(n){
    document.write("El siguiente del doble es: " + doble(siguiente(n)))
}
//Programa principal 
n=parseInt(prompt("Ingrese un numero"))
imprimirElDobleDelSiguiente(n)*/

/*9)Una funcion que se denomine imprimirElDobleDelSiguienteAlCuadrado
que dado un numero por parametro,imprima cual es el valor 
siguiente al del doble.Usando las funciones definidas 
en los puntos 5),6) y 7): siguiente,el doble y el cuadrado.*/
/*function doble(n){
    return (n*2)
}
function siguiente(n){
    return (n+1)
}
function cuadrado(n){
    return (n**2)
}
function imprimirElDobleDelSiguienteAlCuadrado(n){
    document.write(cuadrado(doble(siguiente(n))))
}
//Programa principal 
n=parseInt(prompt("Ingrese un numero"))
imprimirElDobleDelSiguienteAlCuadrado(n)*/

/*10)Una funcion que dado la longitud de un lado de una 
cuadrado devuelva el perimetro*/
/*function perimetroCuadrado(n){
    return(n*4)
}
//Programa principal
n=parseInt(prompt("Ingrese la longitud del lado del cuadrado"))
document.write(perimetroCuadrado(n))*/

/*11)Una funcion que dado la longitud de un lado de un 
cuadrado devuelva la superficie*/
/*function superficieCuadrado(n){
    return (n**2)
}
//Programa principal 
n=parseInt(prompt("Ingrese longitud de un lado del cuadrado"))
document.write("La superficie del cuadrado es:"+ superficieCuadrado(n))*/

/*12)Una funcion que dado el radio de un circulo devuelva
la circunferencia (perimetro del circulo)*/
/*const PI=3.14;
function circunferencia(r){
    return (2*PI*r)
}
//Programa principal
r=parseInt(prompt("Ingrese radio del circulo"))
document.write("La circunferencia del circulo es"+ circunferencia(r))*/

/*13)Una funcion que dado el radio de un circulo devuelva
el area del circulo*/
/*const PI=3.14;
function areaCirculo(r){
    return(PI*(r**2))
}
//Programa principal 
r=parseInt(prompt("Ingrese radio del circulo"))
document.write("El area del circulo es "+areaCirculo(r))*/

/*14)Una funcion que dado un numero de mes y me devuelva la 
cantidad de dias de ese mes(suponiendo que no es un 
anio bisiesto)*/
/*mes=parseInt(prompt("Ingrese numero de mes"))
switch(mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10: 
    case 12:
        dias=31
    break
    case 2:
        dias=28
    break
    case 4:
    case 6:
    case 9:
    case 11: 
        dias=30
    break
}
document.write("Ese mes tiene "+ dias +" dias")*/