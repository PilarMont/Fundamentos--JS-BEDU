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
    edad () {
        this.counterEdad++
        return `Tengo ${this.age} años de edad`
    }
   get edadCounter(){
        return this.edadSaludo
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
