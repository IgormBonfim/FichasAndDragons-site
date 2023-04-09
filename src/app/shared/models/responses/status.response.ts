import { AtributoResponse } from "src/app/shared/models/responses/atributo.response";

export class StatusResponse {
  public forca: AtributoResponse;
  public destreza: AtributoResponse;
  public constituicao: AtributoResponse;
  public inteligencia: AtributoResponse;
  public sabedoria: AtributoResponse;
  public carisma: AtributoResponse;
  public bonusProficiencia: number;
  public percepcaoPassiva: number;
  public iniciativa: number;

  constructor(params: Partial<StatusResponse>) {
    this.forca = params.forca;
    this.destreza = params.destreza;
    this.constituicao = params.constituicao;
    this.inteligencia = params.inteligencia;
    this.sabedoria = params.sabedoria;
    this.carisma = params.carisma;
    this.bonusProficiencia = params.bonusProficiencia;
    this.percepcaoPassiva = params.percepcaoPassiva;
    this.iniciativa = params.iniciativa;
  }
}
