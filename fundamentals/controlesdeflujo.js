//Controles de flujo

// Controles de flujo

// Hardcode. Es agregar valores directamente al codigo.


var a = 10
var b = 50

// console.log('a > b ==>', a > b)

// if (a > b) {
//   console.log("El número es mayor")
// } else {
//   console.log("El número es menor")
// }

/**
 * If lo que evalua es un boleano (true o false)
 * Si es true, ejecuta el primer bloque
 * {
    console.log("El número es mayor")
  }
 * 
  si es falso entonces ejecuta el bloque del "else"
  else {
    console.log("El número es menor")
  }
 */

// Valores truthys o falseys

// Truthy
// var myNumber = -10
// var myNumber = 20
// var myNumber = "Hola Mundo"
// var myBolean = true
// var myObject = {nombre: "Bryan"}
// var myObject = {}
// var myArray = [1,2,3]
// var myArray = []


// Falsey 
// var myNumber = 0
// var myString = ""
// var myBolean = false
// var myUndefined = undefined
// var myNull = null
// var myNan = NaN

// var myNumber = -10

// if (myNumber) {
//   console.log("Truthy")
// } else {
//   console.log("Falsey")
// }



// if (3 !== "3") {
//   console.log('3 == "3" es diferente')
// } else {
//   console.log('3 == "3" no es diferente')
// }

// if (3 === "3") {
//   console.log('3 === "3" es truthy')
// } else {
//   console.log('3 === "3" es falsey')
// }





// if (10 < 10) {
//   console.log('10 < 10 es verdadero')
// } else {
//   console.log('10 < 10 es falso')
// }

/**
 * Ejercicio 2
 * 1 .- Vamos a crear condiciones usando if y utilizando cada uno de los operadores logicos (8)
 * 2.- Crear condiciones con 3 truthys y 3 falseys (6)
 * Tiempo 15 minutos.
 */
/*
var x = 10;
var y = 20;
var w = 2;
var z = 100;
var xx = []
var zz = 0


if (x < y){
    console.log ( "el número es menor")
}  else{
        console.log ( "el número es mayor")
    }

if (z > w){
    console.log ( "correcto")
} else {
    console.log ("incorrecto")
}

if ( y == y){
    console.log ("son iguales")
} else {
    console.log ("no son iguales")
}

if ( w === "w" ){
    console.log ("son estríctamente iguales")
} else {
    console.log ("no son estríctamente iguales")
}

if (x != z){
    console.log ("los valores son diferentes")
}

if (z !== z){
    console.log ("los valores son estríctemnte diferentes")
} else {
    console.log ("false")
}

if (z >= w){
    console.log ("z es mayor o igual a w")
} else {
    console.log ("z no es mayor o igual a w")
}

if (z <= w){
    console.log ("z es menor o igual a w")
} else {
    console.log ("z no es menor o igual a w")
}

if (y === "y") {
  console.log("es truthy")
} else {
  console.log("es falsey")
}

if (z >= 100) {
    console.log( "truthy")
  } else {
    console.log("falsey")
  }

  if (xx) {
    console.log( "truthy")
  } else {
    console.log("falsey")
  }

  if (zz) {
    console.log( "truthy")
  } else {
    console.log("falsey")
  }
*/



// var isBryanAlive = "He isn't"

// const bryansObject = {
//   name: "Bryan",
//   age: 27,
//   hobbies: ['Read', 'Work'],
//   isAlive: isBryanAlive === "He is" ? 1 : 0
// }

// console.log("bryansObject ===>", bryansObject)

// var puede cambiar
// let se puede cambiar
// const es una variable que es constante y no puede cambiar

// var nombre = "Bryan"


// Ternario. Se compone de:    condición ? valor retornado si es verdadero :  valor retornado si es falso
// 1 === 1 ? 1 : 0

// If
// if (1 === 1) {
//   console.log(1)
// } else {
//   console.log(0)
// }

//Switch

/*var mes = "enero"

switch (mes) {
  case "enero":
    console.log("El mes es enero")
  break
  case "febrero":
    console.log("El mes es febrero")
  break
  default: 
    console.log("El mes no fue encontrado")
}
*/


/**
 * Ejercicio 3
 * 1.- Hacer un switch que responde el color de ropa
 * 2.- Enviar un color
 * 3.- Los cases tendrán diferentes colores. Al menos 6 colores distintos
 * 4.- Van a imprimir de que color es la ropa
 * 10 minutos
 */

var colorPlayera = "negro"

switch (colorPlayera) {
  case "azul":
    console.log("La playera es color azul")
  break
  case "naranja":
    console.log("la playera es color naranja")
  break
  case "negro":
    console.log("la playera es color negro")
  break
  case "amarillo":
    console.log("el pantalón es color amarillo")
  break
  default: 
    console.log("El color de la playera no fue encontrado")
}


var colorPantalon = "blanco"

switch (colorPantalon) {
  case "azul":
    console.log("el pantalón es color azul")
  break
  case "naranja":
    console.log("el pantalón es color naranja")
  break
  case "blanco":
    console.log("el pantalón es color blanco")
  break
  case "rojo":
    console.log("el pantalón es color rojo")
  break
  default: 
    console.log("El color del pantalón no fue encontrado")
}

var colorFalda = "café"

switch (colorFalda) {
  case "azul":
    console.log("La falda es color azul")
  break
  case "rosa":
    console.log("La falda es color rosa")
  break
  case "blanco":
    console.log("La falda es color blanco")
  break
  case "rojo":
    console.log("La falda es color rojo")
  break
  default: 
    console.log("El color de la falda no fue encontrado")
}