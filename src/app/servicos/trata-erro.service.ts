import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class TrataErroService {

  constructor(private usuarioService:UsuarioService  ) { }
  usuarioLogado = this.usuarioService.getUsuarioLogado
  //neste servico preciso automatizar o controle de erros e envia-los para algum lugar para ter um log

  //preciso classificar os tipode de erro 


  tratarErro(ondeVeio:string,funcao :string ,erro:any):Promise<any>{
    return new Promise((resolve, err) => {
      //preciso enviar esse erro para uma tabela 
      const obj = {
        usuario_cod: this.usuarioLogado.cod,
        usuario_nome: this.usuarioLogado.nome,
        horario: '',
        data: '',
        ondeVeio: '',
        tipo : '', // esse preciso achar uma maneira de classificar os erros 
        msgErro: erro,// aqui preciso fazer um tratamento para que nao lote o sql com um maximo de caracteres
        funcao,
      }

      // thπis.requisicoes.enviaErro(obj).then(ret => {
      //   resolve(true)
      // })
    })
  }

}
