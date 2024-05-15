import { Injectable } from '@angular/core';

type USUARIO = {
  nome: string,
  cod: string,
  permissao: string //0 dev, 1 SP somente pedido, 2 adm administrativo 
}

type PERMISSOES = {
  fazPedido: boolean,
  editaRemoveProd: boolean,
  editaRemoveForne: boolean,
  editaRemoveUsuario: boolean,
  editaRemovePed: boolean,
  adicionaCaixaExterno: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  
  usuarioLogado: USUARIO = {
    nome:'',
    cod:'0',
    permissao: '3'
  }

  constructor() { }

  get getUsuarioLogado(){
    return this.usuarioLogado
  }

  setUsuarioLogado(usuario: USUARIO){
    this.usuarioLogado = usuario
  }

  getPermissoes(){
    //esse preciso configurar a melhor maneira no controle de permissoes 
  }


  
}
