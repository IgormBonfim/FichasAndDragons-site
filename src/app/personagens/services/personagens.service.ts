import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonagemResponse } from 'src/app/personagens/models/responses/personagem.response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  private baseUrl = environment.apiBaseUrl + "personagens/"

  constructor(private httpClient: HttpClient) { }

  ListarPersonagens(): Observable<Array<PersonagemResponse>> {
    return this.httpClient.get<Array<PersonagemResponse>>(this.baseUrl);
  }

  recuperarPersonagem(id: string): Observable<PersonagemResponse> {
    return this.httpClient.get<PersonagemResponse>(this.baseUrl + id);
  }
}
