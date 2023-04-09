import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonagemDetalhesComponent } from 'src/app/personagens/paginas/personagem-detalhes/personagem-detalhes.component';
import { PersonagemListagemComponent } from 'src/app/personagens/paginas/personagem-listagem/personagem-listagem.component';
import { PersonagensRoutingModule } from 'src/app/personagens/personagens-routing.module';

@NgModule({
  declarations: [
    PersonagemDetalhesComponent,
    PersonagemListagemComponent
  ],
  imports: [
    CommonModule,
    PersonagensRoutingModule
  ]
})
export class PersonagensModule { }
