import { DadoResponse } from "src/app/shared/models/responses/dado.response";

export class ClasseResponse {
  public nome: string;
  public nivel: number;
  public experiencia: number;
  public dadoVida: DadoResponse;

  constructor(params: Partial<ClasseResponse>) {
    this.nome = params.nome;
    this.nivel = params.nivel;
    this.experiencia = params.experiencia;
    this.dadoVida = params.dadoVida;
  }
}
