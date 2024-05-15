import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Observable } from 'rxjs';
import { TrataErroService } from './trata-erro.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private trataErroService: TrataErroService,
  ) { }
  
  //atualiza os dados de uma tabela ou cria 
  atualizaTabela(chave:string,dados:any):Observable<any>{
    return new Observable(subs => {
      let jsonArray = JSON.stringify(dados)
      Preferences.set({key:chave,value:jsonArray}).then(() => subs.next())
    })
  }

  buscarDados(chave: string):Promise<any>{
    return new Promise(async (resolve,err) => {
      Preferences.get({key:chave}).then(r => {
        let arrayTratado =  ''
        if(r.value != null || r.value != undefined){
          arrayTratado = r.value,
          this.trataErroService.tratarErro('storageService','BuscaDados','Tentou pegar a tabela '+ chave.toUpperCase() + ' uma tabela NULL ou UNDEFINED')
        } 
        const array = JSON.parse(arrayTratado)
        resolve(array)
      })
    })
  }

  removerTabela(chave:string):Promise<any>{
    return new Promise((resolve, err) => Preferences.remove({key:chave}).then(r => resolve(true)))
  }
  
}


