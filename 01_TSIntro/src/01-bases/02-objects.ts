
export const pokemonsIdx = [10,20,30];
pokemonsIdx.push(1);

export const bulbasur = <Pokemon>{
  id:1,
  name: 'bulbasur',
}; // literal object

interface Pokemon {
  id: number;
  name: string;
  age?: number; //no necesariamente tiene que venir
  // age: number | undefined; //si o si tiene que venir en objeto
}

export const pokemons:Pokemon[] = []; // tipo never sino le especifico tipo alos elementos del array

