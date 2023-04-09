import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personagem-listagem',
  templateUrl: './personagem-listagem.component.html',
  styleUrls: ['./personagem-listagem.component.scss']
})
export class PersonagemListagemComponent {
  public env = environment;
}
