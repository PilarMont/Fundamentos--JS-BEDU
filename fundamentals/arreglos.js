// Arreglos / Listas
            //   0,         1,       2,     3    ,   4
            // n numero de elementos (MAX RAM)
            var myArray = [
                { nombre: "Bryan"},     // 0
                { nombre: "Marcos"},    // 1
                { nombre: "Fernanda"},  // 2
                { nombre: "Eduardo"}    // 3
                // ?                    // 4
              ]
              
              // console.log(  myArray[0]  ) // { nombre: 'Bryan' }
              // console.log(  myArray[2]  ) // { nombre: 'Fernanda' }
              // console.log(  myArray[3]  ) // { nombre: 'Eduardo' }
              // console.log(  myArray[4]  ) // Undefined
              
              
              // myArray[0] = "Hola Mundo"
              // console.log(  myArray[0]  ) // Hola Mundo
              
              /**
               * Ejercicio 2
               * 1.- Vamos a crear un arreglo con 10 elementos dentro (de cualquier tipo de dato)
               * 2.- Van a imprimir lo que arrojaría ese arreglo en cierta posición (5 ejemplos)
               * Tiempo: 5minutos
               * 
               */
              
              // console.log( myArray.length ) // 4
              // Voy a dar vueltas hasta que...
              // 0 < 4
              
              for (let x = 0; x < myArray.length; x++) {
                console.log(`Este momento el indice es: ${x} y el valor es`, myArray[x] ) 
              }
              
              /**
               * Ejercicio 3
               * 1.- Sobre el arreglo que hicimos con 10 elementos
               * 2.- Crear un for que imprima cada elemento de su arreglo
               * 3.- Quiero que me imprima del ultimo al primero [1,2,3,4] => [4,3,2,1]
               * Tiempo: 10min
               */
              
              // for (let x = 0; x < myArray.length; x++) {
              //   const element = myArray[x];
              //   console.log(element)
              // }
              
              // x = 0, 0 es menor que 4 -> Si va a entrar al for // { nombre: 'Bryan' }
              // x = 1, 1 es menor que 4 -> Si va a entrar al for // { nombre: 'Marcos' }
              // x = 2, 2 es menor que 4 -> Si va a entrar al for // { nombre: 'Fernanda' }
              // x = 3, 3 es menor que 4 -> Si va a entrar al for // { nombre: 'Eduardo' }
              // x = 4, 4 es menor que 4 -> No, termina el loop
              
              
              
              console.log("Hola")


//EJERCICIO 3
var groceryList = [

    {items:"apples 1kg"},//0
    {items:"lemons 2kg"},//1
    {items:"isolate protein"},//2
    {items:"frozen vggies"},//3
    {items:"carrots 1kg"},//4
    {items:"spinach"},//5
    {items:"12 eggs"},//6
    {items:"bread"}, //7
    {items:"quinoa"},//8
    {items:"green tea"},//9

    ]

    console.log(groceryList[4])
    console.log(groceryList[0])
    console.log(groceryList[6])
    console.log(groceryList[2])


                    // 0           1             2                3            4
var groceryList2 = ["apples 1kg","lemons 2kg","isolate protein", "yogourt", {meat:false} ]

console.log(groceryList2[2])
console.log(groceryList2[0])
console.log(groceryList2[3])
console.log(groceryList2[4])

// en let i tengo que ver el # de elementos no de índices
for (let i = groceryList.length -1; i >= 0; i--){
    console.log(`En este momento el índicce es: ${i} y el item de la lista es`, groceryList[i])  
}

/*EJERCICIO 5 
*Crear un arreglo nuevo con números del 1 al 10 
*multiplicar los números por ellos mismos 
*1x1
*2x2... etc
*/

let numeros =[1,2,3,4,5,6,7,8,9,10];
    for (let i = 0; i < numeros.length; i++) {
        console.log( numeros[i] * numeros [i])
        
    }
// EJERCICIO TATEA 1
let numerosTarea =[1,2,3,4,5,6,7,8,9,10];
    for (let i = 0; i < numeros.length; i++) {
    console.log( numeros[i] * numeros [i])
    
}

// EJERCICIO TATEA 2

