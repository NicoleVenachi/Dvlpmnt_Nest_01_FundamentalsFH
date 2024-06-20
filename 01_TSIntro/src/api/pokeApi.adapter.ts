import axios from "axios";
import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export interface HttpAdapter {
  getRequest<T>(url: string): Promise<T>
}

export class PokeApiFetchAdapter implements HttpAdapter{
  async getRequest<T>(url:string): Promise<T>{
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter {
  private readonly axios=axios //para usar this, usar la prpiedad de la clase

  constructor(  
  ){}

  async getRequest<T>(url:string){
    const { data } = await this.axios.get<T>(url);

    return data;
  }

  async postRequest(url:string, payload:any){

  }
  async patchRequest(url:string){

  }
  async deletreRequest(url:string){

  }
}