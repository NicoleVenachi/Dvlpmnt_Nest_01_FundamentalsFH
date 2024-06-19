import axios from "axios";
import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class PokeApiAdapter {
  private readonly axios=axios //para usar this, usar la prpiedad de la clase

  constructor(  
  ){}

  async getRequest(url:string){
    const { data } = await this.axios.get(url);

    return data.moves;
  }

  async postRequest(url:string, payload:any){

  }
  async patchRequest(url:string){

  }
  async deletreRequest(url:string){

  }
}