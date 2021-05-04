
// Functional programming

// NO TIENE QUE MUTAR EL VALOR ORIGINAL
// Inmutabilidad. Es no cambiar los valores externos
// var myName = "Bryan"
// console.log("before renombrar ===>", myName) // "Bryan"

// function renombrar (name) {
//   const myName = "hola"
//   return myName
// }

// renombrar(myName)
// console.log("after renombrar ===>", myName) // "hola"


// NO TIENE QUE MUTAR EL VALOR ORIGINAL
// var arrayNumbers = [1,2,3]
// console.log("before multiplicar ===>", arrayNumbers) 

// const multiplicar = (numbers) => {
//   for (var i = 0; i < numbers.length; i++){
//     numbers[i] = numbers[i] * 2
//   }
// }

// multiplicar(arrayNumbers)

// console.log("after multiplicar ===>", arrayNumbers) 


// const multiply = (num) => {
//   // num = num * 2
//   return num += 2
// }

// console.log(multiply(2)) // 2
// console.log(multiply(2)) // 2
// console.log(multiply(2)) // 2


/**
 * Ejercicio 1
 * 1.- En una función pura devolver la multiplcación de [1,5,6] * 2 en un nuevo array sin modificar el input original
 * 2.- En otra función devolver la suma de un numero sin alterar el input original
 * Tiempo: 10min
 */

/**
 * Ejercicio 2
 * 1.- hacer que el object que retorne la función no mute el input original
 * Tiempo: 15min
 */

// const myObj = {
//   name: "Bryan",
//   lastName: "Montes"
// }

// console.log("Before setProp ===>", myObj)

// // Referencia
// const setProp = (obj) => {

//   // const myNewObj = obj
//   const myNewObj = Object.assign({}, obj) // ES5
//   // const myNewObj = { ...obj } // ES6

//   myNewObj.hobbies = ['Read', 'Walk']

//   return myNewObj
// }

// const myNewObj = setProp(myObj)


// console.log("After setProp ===>", myNewObj)
// console.log("After setProp ===>", myObj)




// MAP

const multiply = (array) => {
  // map retorna un arreglo nuevo
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const resultsArray = array.map((numero) => {
    // numero = 3
    return numero * 2
  })

  return resultsArray
}

const myOriginalArray = [1,2,3]

const result = multiply(myOriginalArray)
// console.log("Result ===>", result)
// console.log("Result ===>", myOriginalArray)


// FILTER
const filterNumber = (array) => {
  const resultsArray = array.filter((numero) => {
    if (numero % 2 === 0) {
      return numero
    }
  })

  return resultsArray
}

const resultFilter = filterNumber(myOriginalArray)

// console.log("resultFilter ===>", resultFilter)
// console.log("myOriginalArray ===>", myOriginalArray)


/* REDUCE
// ["Bryan", "Montes", "Velazquez"]
const reduceNumber = (array) => {
  // ["Bryan", "Montes", "Velazquez"]
  const resultSuma = array.reduce((accumulador, valorActual) => {
    // 1era vez acumulador tiene 0 y valorActual tiene 1
    // return acumulador = 0 + 1
    // 2da vez acumulador tiene 1 y valorActual tiene 2
    // return acumulador = 1 + 2
    // 3ra vez acumulador tiene 3 y valorActual tiene 3
    // return acumulador = 3 + 3
    return accumulador = accumulador + " " + valorActual
  }, 0)

  return resultSuma
}

const resultReduced = reduceNumber(myOriginalArray)

console.log("resultReduced ===>", resultReduced)
console.log("myOriginalArray ===>", myOriginalArray)*/



/*Ejercicio 1
*En una función pura devolver la multiplicación de [1,5,6] *2 en un nuevo array sin modificar el input original
*En otra función devolver la suma de un número sin alterar el input original
*/

/*function multiplicar (num){
    return num *= 2;
}

console.log(multiplicar(1))
console.log(multiplicar(5))
console.log(multiplicar(6))

const arr = [1, 5, 6];/*

// Functional programming

// NO TIENE QUE MUTAR EL VALOR ORIGINAL
// Inmutabilidad. Es no cambiar los valores externos
// var myName = "Bryan"
// console.log("before renombrar ===>", myName) // "Bryan"

// function renombrar (name) {
//   const myName = "hola"
//   return myName
// }

// renombrar(myName)
// console.log("after renombrar ===>", myName) // "hola"


// NO TIENE QUE MUTAR EL VALOR ORIGINAL
// var arrayNumbers = [1,2,3]
// console.log("before multiplicar ===>", arrayNumbers) 

// const multiplicar = (numbers) => {
//   for (var i = 0; i < numbers.length; i++){
//     numbers[i] = numbers[i] * 2
//   }
// }

// multiplicar(arrayNumbers)

// console.log("after multiplicar ===>", arrayNumbers) 


// const multiply = (num) => {
//   // num = num * 2
//   return num += 2
// }

// console.log(multiply(2)) // 2
// console.log(multiply(2)) // 2
// console.log(multiply(2)) // 2


/**
 * Ejercicio 1
 * 1.- En una función pura devolver la multiplcación de [1,5,6] * 2 en un nuevo array sin modificar el input original
 * 2.- En otra función devolver la suma de un numero sin alterar el input original
 * Tiempo: 10min
 */
const numbers = [1, 5, 6];
let doubled = [];
for(let i=0; i<numbers.length; i++){
    doubled.push(numbers[i]*2);
  }

console.log(doubled)


/**
 * Ejercicio 2
 * 1.- hacer que el object que retorne la función no mute el input original
 * Tiempo: 15min
 */

const myObj = {
    name: "Bryan"
  }
  
  console.log("Before setProp ===>", myObj)
  
  // Reference
  const setProp = (obj) => {
    const myNewObj = Object.assign({}, obj)
  
    myNewObj.hobbies = ['Read', 'Walk']
  
    return myNewObj
  }
  
  const myNewObj = setProp(myObj)
  
  
  console.log("After setProp ===>", myNewObj)
  console.log("After setProp ===>", myObj)
/**
 * Ejercicio Tarea
 *  Ejemplo de arreglo: [15, 500, 95, 87, 34, 76]
 * 1.- Crear una función que retorne un arreglo iterado por un map que devuelva el numero al cuadrado
 * 2.- Crear una función que retorne los numeros impares de la respuesta de la función anterior
 * 3.- Crear una función que sume los numeros impares y devuelva la raíz cuadrada del resultado
 * IMPORTANTE: Tarea para el martes
 */

/*1.- Crear una función que retorne un arreglo 
iterado por un map que devuelva el numero al cuadrado*/

const myNumbers =[15,500,95,87,34,76]

const tarea1 = myNumbers.map(function(numAlCuadrado){
  return Math.pow (numAlCuadrado,2);
});

console.log(tarea1)
console.log(myNumbers)
 
/*2.- Crear una función que retorne los numeros impares 
de la respuesta de la función anterior*/

const tarea2 = tarea1.filter((numeroI) => {
  if (numeroI % 2 === 1) {
    return numeroI   
  }
})

console.log(tarea2)

/*3.- Crear una función que sume los numeros impares 
y devuelva la raíz cuadrada del resultado*/

const tarea3 = (accumulador,valorActual) => accumulador + valorActual;

console.log(tarea2.reduce(tarea3))

const raiz2 = Math.sqrt (tarea2.reduce(tarea3));

console.log(raiz2)



