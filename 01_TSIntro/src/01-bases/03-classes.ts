
export class Pokemon {

  //declarar propiedades de clase
  public id: number;
  public name: string;
  
  // inicializar propiedades de clase
  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
    
    console.log('Object initialized with the data provided at the class instantiation');
    
  }
}

// export class Pokemon {

  
//   // inicializar propiedades de clase
//   constructor(
//     public readonly id: number, 
//     public name: string){
//     this.id = id;
//     this.name = name;
    
//     console.log('Object initialized with the data provided at the class instantiation');
    
//   }
// }

//instnciar clase
export const charmander = new Pokemon(1, 'charmander') 

charmander.id = 2