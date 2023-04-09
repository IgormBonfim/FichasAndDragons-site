import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { PersonagemResponse } from 'src/app/personagens/models/responses/personagem.response';
import { PersonagensService } from 'src/app/personagens/services/personagens.service';

@Component({
  selector: 'app-personagem-detalhes',
  templateUrl: './personagem-detalhes.component.html',
  styleUrls: ['./personagem-detalhes.component.scss']
})
export class PersonagemDetalhesComponent implements OnInit{

  public personagem: PersonagemResponse;

  constructor(
    private personagensService: PersonagensService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recuperarPersonagem();
  }

  recuperarPersonagem(): void {
    this.route.params.pipe(
      map((params: any) => params.id),
      mergeMap((id: string) => this.personagensService.recuperarPersonagem(id))
    ).subscribe({
      next: (response: PersonagemResponse) => {
        this.personagem = response;
      },
      error: (erro: HttpErrorResponse) => {
        console.error(erro);
      }
    })
  }

}
