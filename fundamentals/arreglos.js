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
 //EJERCICIO TATEA 1 multiplicar cada número por los números del array

 //INTENTO 1
    let tabla = [1,2,3,4,5,6,7,8,9,10];

    for (let i = 1; i <= tabla.length; i++) {
    console.log(tabla[0] + "x" + [i] + "="+ (tabla[0]*[i]));
    console.log(tabla[1] + "x" + [i] + "="+ (tabla[1]*[i])); 
    console.log(tabla[2] + "x" + [i] + "="+ (tabla[2]*[i])); 
    console.log(tabla[3] + "x" + [i] + "="+ (tabla[3]*[i])); 
    console.log(tabla[4] + "x" + [i] + "="+ (tabla[4]*[i])); 
    console.log(tabla[5] + "x" + [i] + "="+ (tabla[5]*[i])); 
    console.log(tabla[6] + "x" + [i] + "="+ (tabla[6]*[i])); 
    console.log(tabla[7] + "x" + [i] + "="+ (tabla[7]*[i])); 
    console.log(tabla[8] + "x" + [i] + "="+ (tabla[8]*[i])); 
    console.log(tabla[9] + "x" + [i] + "="+ (tabla[9]*[i])); 

}

//INTENTO 2 
let tabla1 = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < tabla1.length; i++)
{
    for (let j = 1; j < tabla1.length; j++) 
    {
        console.log(tabla1[i] + "x" + [j] + "="+ (tabla1[i]*[j]));
    }

}

/* EJERCICIO TATEA 2 
*Sobre el mismo array del 1 al 10,multiplicar el primer numero con el ultimo numero
*Luego multiplicar el segundo numero con el penultimo y así hasta que termine el array*/
    
/*
const tablaArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x = 0; x < tablaArray.length; x++) 
{
    for (let y = tablaArray; y <= 0 ; y++) 
    {
        console.log(tablaArray[i] + "x" + [j] + "="+ (tablaArray[i]*[j]));  
    }
  
}*/





   