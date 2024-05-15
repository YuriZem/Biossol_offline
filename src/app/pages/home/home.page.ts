import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/servicos/storage.service';
import { TrataErroService } from 'src/app/servicos/trata-erro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private storageService: StorageService,
    private trataErro: TrataErroService
  ) { }

  ngOnInit() {
  }

  atualizar(){
    console.log('entrou aqui ')
    const obj = [
      {nome : 'agua'},
      {nome : 'bolacha'},
      {nome : 'beterraba'},
      {nome : 'cafe'},
    ]
    this.storageService.atualizaTabela('PRODUTOS',obj).subscribe(r => {
      console.log('aqui voltou')
    })
  }

  async buscarDados(){
    console.log('entrou aqui')
    const obj = await this.storageService.buscarDados('PRODUTOS')
    console.log('aqui o teste', obj)
  }

  logar(){
    const obj = {
      nome : 'yuri',
      cod: '1',
      permissoes_cod: '1' // 1 somente pedido // 2 administrativo // 3 dev

    }
  }

  async chamaTrataErro(){
    await this.trataErro.tratarErro('Login', 'verificaLogin','Perda de conecxao com o servidor')
  }
}
