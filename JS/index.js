// UNIDAD 1 

//1-Escribe un programa de una sola línea que haga que aparezca en la pantalla un
//alert que diga “Hello World”.
//alert("Hello World")

//2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
//diga “Hello World” (document.write).

//document.write("Hello World")

//3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
//de sumar 3 + 5.
//document.write(3+5)

//4. Escribe un programa de dos líneas que pida el nombre del usuario con un
//prompt y escriba un texto que diga “Hola nombreUsuario”
//var nombre = prompt ("Ingrese su nombre", "")
//document.write("Hola " + nombre)

//5. Escribe un programa de tres líneas que pida un número, pida otro número y
//escriba el resultado de sumar estos dos números.
//var num1 = prompt ('Ingrese un numero');
//var num2 = prompt ("Ingrese otro numero ");
//document.write("la suma es: " + (parseInt(num1)+parseInt(num2)))

//6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
//mayor
//var num1 = prompt ('Ingrese un numero');
//var num2 = prompt ("Ingrese otro numero ");
//if (num1>num2) {
//    document.write(num1)
//}else{
// document.write ("el mayor es: " + num2) }

//7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
//los tres                                                                                     NO ME SALIO!!!
//var n1 = prompt("Escribe un número");
//var n2 = prompt("Escribe otro número");
//var n3 = prompt("Escribe otro número");
//if (n1 > n2 && n1 > n3) {
//document.write(n1);
//} else if (n2 > n1 && n2 > n3) {
//document.write(n2);
//} else if (n3 > n1 && n3 > n2){
//document.write(n3);
//}

//8. Escribe un programa que pida un número y diga si es divisible por 2
//var n1 = prompt("Ingrese un numero");
//if (n1%2===0) {
//    document.write("El numero "+ n1 + " es divisible ")
//} else {
//    document.write("El numero "+n1 + " no es divisible")
//}

//9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
//letra a

//10. Escribe un programa que pida una frase y escriba las vocales que aparecen
// var text = prompt("Ingrese una frase ");
// var nText = text.length;
// var i;
// for (i = 0; i < nText; i++ ) {
// if (text.substr(i,1) === "a" || text.substr(i,1) === "e" ||
// text.substr(i,1) === "i" || text.substr(i,1) === "o" 
// || text.substr(i,1) === "u" ){
// document.write (text.substring(i,1));
// }
// }
// 11. Escribe un programa que pida una frase y escriba cuántas de las letras que
// tiene son vocales
// 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
// cada una de las vocales

//13.Escribe un programa que pida un numero y nos diga si es divisible 
//por 2,3,5 o 7(solo hay que comprobar si lo es por una de los cuatro)
// var n1 = prompt("Escribe un numero");
// if (n1 % 2 === 0 || n1 % 3 === 0 || n1 %5 === 0 || n1 % 7=== 0){
//     document.write("Es divisible por 2,3,5 o 7");
// } else {
// document.write("No es divisible ni por 2,ni por 3,ni por 5 ni por 7 ")
// }

//14.Aniadir al ejercicio anterior que nos diga por cual de los cuatro es divisible
//(hay que decir todos por los que es divisible )
// var n1 = prompt ("Escribe un numero");
// if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 ===0 ){
// if (n1 % 2 ===0) {
//     document.write("Es divisible por 2.");
// }
// if (n1 % 3 === 0 ){
//     document.write("Es divisible por 3.");
// }
// if (n1 % 5 === 0){
//     document.write("Es divisible por 5.");
// }
// if (n1 % 7 === 0){
//     document.write ("Es divisible por 7.");
// }
// }else {
//     document.write("No es divisible ni por 2, ni por 3, ni por 5,ni por 7");
// }

//15. Escribir un programa que escriba en pantalla los divisores de un numero dado
// var n1 = prompt ("Ingrese un numero")
// var i;
// for (i=2;i<=(n1/2) ;i++ ){
//     if (n1 % i === 0 ){
//     document.write(i,",")
//     }
// }

//16.Escribir un programa que escriba en pantalla los divisores comunes de dos numeros dados
//var n1 = prompt ("Ingrese un numero");
//var n2 = prompt ("Ingrese un numero");
//var menor;
//var i;
//if (n1 < n2 ){
//    menor=n1
//}else {
//    menor=n2
//}
//for (i=2;i<=20(menor/2);i++){
//if (n1 % i ===0 && n2 % i === 0){
//    document.write(i,",");
//}
//}

//17.Escribir un programa que nos diga si un numero dado es primo(no es divisible 
//por ninguno otro numero que no sea el mismo o la unidad )
// var n1 = prompt ("Ingrese un numero");
// var i;
// primo=true;
// for ( i=2 ; i <= (n1/2);i++){
//     if (n1 % i === 0 ){
//         primo=false;}
// }
// if (primo){
//     document.write("Es primo")
// }else{
//     document.write("No es primo")
// } 

//18.Pide la edad y si es mayor de 18 anios indica que ya puede conducir 
// var edad = prompt("Ingrese edad")
// if (edad>=18) {
//     document.write("Puede conducir")
// }else {
//     document.write("No puede conducir")
// }
//19.Pide una nota(numero).Muestra la calificacion segun la nota:
//0-3: Muy deficiente
//3-5: Insuficiente
//5-6: Suficiente
//6-7: Bien
//7-9: Notable
//9-10: Sobresaliente
// var nota= prompt("Ingrese la nota");
// //Si es un numero
// if (Number(nota)==nota){
//   if(nota > 0 && nota <=10 ){
//       if (nota < 3) {
//           alert("Muy deficiente");
//       }
//       else if (nota < 5) {
//           alert("Insuficiente")
//       }
//       else if (nota <= 6){
//           alert("Suficiente")
//       }
//       else if (nota <= 7){
//           alert("Bien")
//         }
//       else if (nota <= 9){
//           alert("Notable")
//       }
//       else if (nota >=10){
//           alert("Sobresaliente")
//       }
// }
// else 
//  alert("Nota erronea")
// }

//20.Realiza un script que pida cadenas de texto hasta que se pulse "cancelar"
//Al salir con "cancelar" deben mostrarse todas las cadenas concatenadas con un guion
// var resultado =""
// do{
// var cadena= prompt("Ingrese cadena de texto ");
// if (resultado ==""){
//     resultado = resultado + cadena;
// }else{
//     resultado = resultado+ "-"+ cadena;
// }
// }while (confirm("Desea continuar"));
// document.write(resultado);

/*21.Realiza un script que pida numeros hasta que se pulse "cancelar".
Si no es un numero debera indicarse con un "alert" y seguir pidiendo.
/*Al salir con "cancelar" debera indicarse la suma total de los numeros introducidos
/* Resultado=0;
do{
    var num= prompt("Ingrese un numero")
    if (num= parseInt(num)){
        Resultado=Resultado+num
    }
    else {alert("No es un numero")}
} 
while (confirm("Desea continuar"));
document.write(Resultado)
/*

//22

/*23)Realiza un script que escriba una piramide del 1 al 30
de la siguiente forma 
1
22
333
4444
55555
666666
*/
/*var i,rep;
for (i = 1;i<=30;i++) { //numero cada linea 
    for (rep=0;rep <i;rep++){//Repeticiones linea
        document.write(i);
    }
    document.write("<br>") //Baja linea
}*/
/*24)Haz un script que escriba una piramide inversa de los 
numeros del 1 al numero que indique el usuario de la siguiente
forma:(Suponiendo que indica 6)
666666
55555
4444
333
22
1
*/
/*
var i,rep;
var num=parseInt(prompt("Ingrese un numero"))//6
for (i = num;i>=1;i--){ //Numero empieza en 6 y decrece 
    for (rep=i;rep>=1;rep--){ //Rep empieza en 6 y decrece 
        document.write(i)
    }
    document.write("<br>")
}
*/



