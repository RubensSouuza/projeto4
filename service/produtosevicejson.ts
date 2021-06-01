import { Produto } from './../model/produto';
import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable() // Injeção de dependencia
export class ProdutoserviceJson{

        // Inicia o acesso a Internet   HttpClient

    constructor(private http: HttpClient){

    }


        // Método para gravar produto no JSON



        // método para buscar os produtos que estão no JSON

    public findALl (){
        return this.http.get<Produto[]>('http://localhost:3000/produto');
    }
}