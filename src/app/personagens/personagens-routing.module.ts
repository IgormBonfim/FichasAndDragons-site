import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonagemDetalhesComponent } from 'src/app/personagens/paginas/personagem-detalhes/personagem-detalhes.component';
import { PersonagemListagemComponent } from 'src/app/personagens/paginas/personagem-listagem/personagem-listagem.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: PersonagemListagemComponent
  },
  {
    path: ":id",
    component: PersonagemDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonagensRoutingModule { }
