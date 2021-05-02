// Programación orientada a objetos
// Sesión 5
// Paradigma: Es un modelo a seguir para resolver una problematica.


// Modelos/Paradigmas 
// Programación imperativa. Programación orientada a objetos
// Describe paso a paso un conjunto de instrucciones para solucionar un problema.


/*// class define y crea una clase.
class PersonA {

    constructor (name) {
      this.name = name
      this.isAlive = true
    }
  
    saludoA() {
      return `Hola me llamo ${this.name}`
    }
  }
  
  // new crea una instancia de una clase
  /*const Bryan = new PersonA("Bryan")
  
  const Marcos = new PersonA("Marcos")
  
  console.log("Bryan ==>", Bryan.saludo())
  console.log("Marcos ===>", Marcos)/*
  
  // Programación declarativa. Programación funcional
  // Está basado en funciones
  
  /**
   * Ejercicio 1
   * 1.- Crear una clase Person
   * 2.- Vamos a crear un metodo que salude con nuestro nombre
   * 3.- Vamos a crear un metodo que diga que edad tenemos
   * Tiempo: 10min
   */

   class Person {
// En el constructor metemos en el () todos los parámetros que quiera usar
//como una función
    constructor (name,age){
        this.name = name
        this.age = age
        this.counter = 0
        this.counterSaludo =0
        this.counterEdad =0

    }
//saludo y edad son métodos y usar back tips

// mi incremento va en el método
    saludo() {
        this.counterSaludo++
        return `¡Qué onda, me llamo ${this.name}!`
      }
    
    incrementarCounter(){
        this.counter++
    }

   get saludoCounter(){
       return this.counterSaludo
   }

// mi incremento va en el método
    edad() {
        this.counterEdad++
        const actualYear = new Date().getFullYear()
        const birthYear = new Date(this.age).getFullYear()
    
        return `Tengo ${actualYear - birthYear} años de edad`
    }
   get edadCounter(){
        return this.counterEdad
    }

   }
 // new crea una instancia de una clase
   const Pablo = new Person ( "Pablo", 25)
   const Vir = new Person ("Virgile", 27)

// En una instancia solo puede haber un método  
   console.log ("Pablo ==>", Pablo.saludo())
   console.log ("Pablo ==>", Pablo.saludo())
   console.log ("Pablo ==>", Pablo.saludo())
   console.log ("Pablo ==>", Pablo.edad())
   console.log ("Virgile ==>", Vir.edad())
   console.log ("Virgile ==>", Vir.saludo())

   Pablo.incrementarCounter()
   console.log ("Pablo counter saludo ==>", Pablo.counterSaludo)
   Vir.incrementarCounter()
   console.log ("Virgile counter edad ==>", Vir.counterEdad)

   /**
 * Ejercicio 1
 * 1.- Crear una clase personal
 * 2.- Vamos a crear un metodo que salude con nuestro nombre
 * 3.- Vamos a crear un metodo que diga que edad tenemos
 * Tiempo: 10min
 */
/**
 * Ejercicio 2
 * 1.- Sobre la misma clase que tienen
 * 2.- Crear un getter que devuelva la cantidad de veces que han mandado a ejecutar "saludar()"
 * 3.- Crear un getter que también devuelva la cantidad de veces que han mandado a ejecutar "edad()"
 * Tiempo: 10min
 */

class personal{
  constructor (name, age){
    this.name = name
    this. age = age
    this.counter = 0
    this.counterSaludo = 0
    this.counterEdad = 0
    
  }

  saludoPersonal(){
    this.counterSaludo++
    return `¡Hola mi nombre es ${this.name}!`
  }

  edadPersonal(){
    this.counterEdad++
    const actualYear = new Date().getFullYear() // fecha actual 
    const birthYear = new Date(this.age).getFullYear()
    return `Tengo ${actualYear - birthYear -1} años de edad` // puse -1 porque cuenta un año de más 
  }
  
  incrementarCounter(){
    this.counter++
  }
  
  get counterSaludoPersonal() {
    return this.counterSaludo
  }
  

  get counterEdadPersonal(){
    return this.counterEdad
  }

}

const Pilar = new personal ("Pilar Montes", "1992" )

console.log ( "Mi nombre===>", Pilar.saludoPersonal())
console.log ( "Mi nombre===>", Pilar.saludoPersonal())
console.log ( "Mi nombre===>", Pilar.saludoPersonal())
console.log ( "Mi nombre===>", Pilar.saludoPersonal())

console.log ("Edad Pilar ===>", Pilar.edadPersonal())
console.log ("Edad Pilar ===>", Pilar.edadPersonal())

Pilar .incrementarCounter()
  console.log ("Veces que se imprimió el saludo==>", Pilar.counterSaludo)

Pilar.incrementarCounter()
  console.log ("Veces que se imprimió la edad ==>", Pilar.counterEdad)

//TAREA DE IMC
  class calculoImc{
    constructor (name, weight, heigh){
      this.name = name
      this.weight = weight
      this.heigh= heigh
    }

      calculoImc(){
        return `El imc es ${this.name}/${this.heigh}*${this.heigh}`
      }
  }

  //Clase hija

  class DatosCompletos extends Imc{
      constructor (name, weight, heigh, genre){
      super (genre,age)
      this.genre
      this.age
    }

    nombre(){
    return `El nombre del paciente es ${this.name}`
  }

    peso(){
      return `El peso del paciente es ${this.weight}`
    }

    altura(){
      return `La altura del paciente es ${this.heigh}`
    }

    edad(){
      const actualYear = new Date().getFullYear() // fecha actual 
      const birthYear = new Date(this.age).getFullYear()
      return `La edad del paciente es ${actualYear - birthYear -1}` 
    }

    genero(){
      return `El género del paciente es ${this.genre}`

    }

  }

  const Persona1 = new personal ("Pablo",78 ,1.81, "1995","masculino")

  console.log("El nombre es ===>", Persona1.nombre())
  console.log("El peso es ===>", Persona1.peso())
  console.log("La altura es ===>", Persona1.altura())
  console.log("La edad es ===>", Persona1.edad())
  console.log("El género es ===>", Persona1.genero())
