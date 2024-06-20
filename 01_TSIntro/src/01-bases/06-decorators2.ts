

const Deprecated = (deprecationReason: string) => {
  // thius method indicates a nmethjod is deprecated 
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args); 
        }
        return wrapperFn;
      }
    }
  }   
}

export class Pokemon {

  constructor(
    public readonly id: number,
    public name: string,

  ){}

  @Deprecated('Most use sepeak isntead')
  scream() {
    console.log(`${ this.name.toUpperCase() }!!!`);
  }

  speak() {
      console.log(`${ this.name }, ${ this.name }`);
  }

}

export const charmander = new Pokemon(4, 'Charmander');

charmander.speak();
charmander.scream();