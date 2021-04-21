//Funciones

// ¿Qué es una función?
/*
*Sirve para reutilizar código
*Funciona para simplificar código
*Repetir acciones/ sentencias/ tasks
*
*Una función debe retornar un resultado*/

// Ejercicio 1 saludar a 3 personas con una función

//function saludo (amigos){
    /* amigos es un parámetro y lo sque esté entre () 
    en mis variables que declare*/

    //return "hola " + amigos   /* esto del + es una CONCATENACIÓN... tabién podría ser
    //return "hola" + " " + amigos y me da el mismo resultado*/
//}
 // lo que está ("") lo contiene el parámetro amigos 
////var sofia = saludo ("Sofía")
//var yadir = saludo ("Yadir")
//var elena = saludo ("Elena")

 /* con console.log imprimiré cada variable con la fucnión declarada 
 y dará el resultado de return */

//console.log (sofia)
//console.log (yadir)
//console.log (elena) */

//Ejercicio 2 dar la edad de personas con el año y funciones

/* manera simple
function edad (fecha){
    return "Tu edad es" + " " + fecha
}

var año1995 = edad ("26")
var año1992 = edad ("29")
var año1997 = edad ("24")

console.log (año1995)
console.log (año1992)
console.log (año1997) */

//manera correcta con función .getfullyear REVISAR

/*function getAge (birthYear) {
    var currentYear= new Date ().getFullYear() //2021
    return "tu edad es " ${currentYear-birt} // 2021-1992 = 29
}

var resultado= getAge (1992)

console.log (edadSofia) */

/* Ejercicio 3
*Hacer una función que reciba 2 parámetros y devuelva el número mayor
*deberá retornar un valor tipo NUMBER 

function getMax (valor1, valor2){
    if (valor1 > valor2){
    return (${valor1} " Es mayor a "+ ${valor2}) 
}   else{
    return (valor1 + " Es menor a "+ valor2)
}
}
var ej1= getMax (100,105)
var ej2= getMax (10,-5)
var ej3= getMax (-8, -500)

console.log (ej1)
console.log (ej2)
console.log (ej3) */

/* EJERCICIO 4 
*Utilizar Arrow Function en todas las funciones para reemplazarlas
la => significa return
*/

//EJERCICIO 3 CON ARROW FUNCTION
const getMax1 = (valor1, valor2) => {
    if (valor1 > valor2){
        return `valor1: ${valor1} es mayor que valor2:  ${valor2}`  
    }   else{
        return `valor2: ${valor2} es mayor que valor1:  ${valor1}` 
    }
}

console.log(getMax1 (1,2))
console.log(getMax1 (4,3)) 

//EJERCICIO 3 CON ARROW FUNCTION y TERNARIO

const getMaxT = (valor1, valor2) =>
    (valor1 > valor2) 
        ? `valor1: ${valor1} es mayor que valor2:  ${valor2}` 
        : `valor2: ${valor2} es mayor que valor1:  ${valor1}`
  
     
console.log(getMax1 (1,2))
console.log(getMax1 (4,3)) 

//EJERCICIO 2 CON ARROW FUNCTION
const getAge = (birthYear) => {
    var currentYear= new Date ().getFullYear() //2021
    return `Su edad es  ${currentYear-birthYear}`// 2021-1992 = 29
}

var edadSofia = getAge (1992)

console.log (edadSofia) 

//EJERCICIO 1 CON ARROW FUNCTION

const saludo = (amigos) =>`Hola  ${amigos}`

 var sofia = saludo ("Sofía")
 var yadir = saludo ("Yadir")
 var elena = saludo ("Elena")

 console.log (sofia)
 console.log (yadir)
 console.log (elena)













