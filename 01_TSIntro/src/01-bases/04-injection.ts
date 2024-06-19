
import { PokeApiAdapter } from '../api/pokeApi.adapter';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
      
        // Todo: inyectar dependencias
        private readonly http:PokeApiAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
      const data = await this.http.getRequest('https://pokeapi.co/api/v2/pokemon/4') 

      return data.moves()
    }

}

// instancio clase de dependencia externa
const pokeApiAdapt = new PokeApiAdapter()
export const charmander = new Pokemon( 4, 'Charmander',pokeApiAdapt ); //paso como propiedad o iyecto clase externa

charmander.getMoves();