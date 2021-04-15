// ====  Tipos de datos  ====

// Boolean => true o false
var myBoolean = true

// Undefined => undefined
var myUndefined = undefined

// String (agrupa un conjunto de caracteres)
var mario = "delgado"

// Null (especifica que una variable estará sin valor)
var myNull = null

// Number (Especifica un numero, enteros <> flotantes)
var myIntNumber = 27
var myFloatNumber = 1.20

// Objeto (Los objetos contienen una estructura de datos que mantienen un contexto)
var myObject = {
  nombre: "Bryan",
  age: 27,
  location: undefined,
  average: 8.90,
  hobbies: ['Cinema', 'Reading', 'Cycling', {name: "Gaming"}]
}

// Arreglos (Son similares a los objetos pero, sus valores van apuntando a un indice)
var myArray = [1, "Bryan", true, 90.4, null, undefined, {name: "Gaming"}]

/**
 * Ejercicio 1
 * Crear 3 diferentes variables usando cada tipo de dato */
 
 * String 

 var myName = "Pilar"
 var dogsname = "mushu"
 var planta = "verde"
 var titulolibro= "¿Sueñan los androides con ovejas eléctricas?"
 var lugarfavorito = "La Playa"
 
 /*Number*/
 
 var horacomida = 3
 var resultado = 365
 var módulos = 7
 
 /*Boolean*/
 
 var grande = true
 var bonito = false
 
 /*Undefined*/
  
 var level = undefined
 var esestapa2 = undefined
 var direction = undefined
 
  /*Null*/
  
  var rojo = null
  var mylevel = null
  var comestible = null
 
  /*objeto*/
  
 var micarta = {
         signoZodiaco: "capri",
           mes : "enero",
           número : 4,
           feliz : true
  }
  
  
  var myday = {
          dayname : "martes", 
          daynumber: 13,
          morning: false,
  
  }

  var hollydays = {
      place: "hawai",
      date: "15/05/2021",
      booked: true
  }

/* Array*/

var libro = [2, true, null, undefined, {name: "La Vacación"}]

var misuper = [ "espinacas", "huevos", "manzanas", {vecesSemana: 3 }]

/* Console.log ( sirve para imprimir cóigo en JS) */

/*console.log ("Hola Mundo")*/

/* imprimir con console.log cada variable*/

console.log ("1 es de tipo ===>", typeof 1)
console.log ("planta es de tipo ===>", typeof planta)
console.log (" resultdo es tipo ===>", typeof resultado)
console.log ("bonito es de tipo ==>", typeof bonito)
console.log ("etapa2 es de tipo ==>", typeof esestapa2)
console.log ("mylevel es de tipo ===>", typeof mylevel)
console.log ("comestible es de tipo ===>", typeof comestible)