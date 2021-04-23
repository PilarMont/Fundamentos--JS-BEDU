// Objetos


// N propiedades
var myObjectLuis = {

    firstName: 'Luis',
    lastName: 'Dominguez',
    'my age': 27
  
  }
  
  // Accede a el valor de la propiedad firstName
  console.log(  myObjectLuis.firstName  )
  
  // // Accede a el valor de la propiedad firstName
  console.log(  myObjectLuis['firstName']  )
  console.log(  myObjectLuis['my age']  )
  
  // Sobre escribe el valor de una propiedad en el objeto
  myObjectLuis.firstName = 'Pilar'
  
  console.log(  myObjectLuis.firstName  )
  
  // Crea nuevas propiedades en un objeto.
  myObjectLuis.hobbies = 'Leer'
  
  console.log(  myObjectLuis  ) 
  
  
  /**
   * Ejercicio 1
   * 1.- Crear un objeto con su información personal. 
   *     (Nombre, apellido, año de nacimiento)
   * 2.- Van a reemplazar el valor de una propiedad de su objeto
   * 3.- Van a crear una propiedad no existente en su objeto
   * 4.- Van a imprimir la propiedad creada e imprimir la propiedad 
   *     con el valor reemplazado (2 console.log)
   * 5.- Imprimir todo el objeto al final
   * 8 min
   */

var myProfile ={

    firtsName: "Pilar",
    lastName: "Montes",
    birthYear: 1992
}

console.log( myProfile.firtsName )
console.log(myProfile)

myProfile.hobbies= ("correr","cerámica")

console.log(myProfile)

myProfile.firtsName="María"

console.log(myProfile)