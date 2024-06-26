
import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

// declaaracion explicita
// export class Pokemon {

//   //declarar propiedades de clase
//   public id: number;
//   public name: string;
  
//   // inicializar propiedades de clase
//   constructor(id: number, name: string){
//     this.id = id;
//     this.name = name;
    
//     console.log('Object initialized with the data provided at the class instantiation');
    
//   }
// }

// declaaracion implicita
export class Pokemon {

  
  // inicializar propiedades de clase
  constructor(
    public readonly id: number, 
    public name: string,
  ){
    this.id = id;
    this.name = name;
    
    console.log('Object initialized with the data provided at the class instantiation');
    
  }

  //getters
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`
  }

  //metodos de clase
  scream() {
    console.log(`${this.name.toLocaleUpperCase()} !!!`);

    charmander.speak();
  }
  private speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves():Promise<Move[]> {
    // await
    const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

    console.log(data.moves);
    

    return data.moves;
    


  }
}

//instnciar clase
export const charmander = new Pokemon(1, 'charmander', 
) 

// charmander.id = 2
console.log(charmander.imageUrl);
charmander.scream();
console.log(charmander.getMoves());


