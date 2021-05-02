/*

var numbers = [1,2,3,4,5,6,7,8,9,10];

function calculateAverage(numbers) {
    var sum = 0;
  
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]; // Same as: sum = sum + numbers[i];
    }
  
    return sum / numbers.length
  }

  let numeros =[1,2,3,4,5,6,7,8,9,10];
    for (let i = 0; i < numeros.length; i++) {
        console.log( numeros[i] * numeros [i])
        
    }
    */


    // EJEMPLO DE for ANIDADO... 
    /*var i;

    for (let i = 0; i < 3; i++) // for EXTERNO
    {
      for (let j = 0; j < 5; j++) // for INTERNO
      {
       console.log("valor x: "+ j +"")
        
      }
      
    }*/

    let tabla = [1,2,3,4,5,6,7,8,9,10];

    for (let i = 0; i < tabla.length; i++)
    {
        for (let j = 1; j < tabla.length; j++) 
        {
            console.log(tabla[i] + "x" + [j] + "="+ (tabla[i]*[j]));
        }

    }
   
    
    