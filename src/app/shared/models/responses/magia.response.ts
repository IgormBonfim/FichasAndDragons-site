import { DanoResponse } from "src/app/shared/models/responses/dano.response";

export class MagiaResponse {
  public nome: string;
  public descricao: string;
  public circulo: number;
  public tempoConjuracao: string;
  public alcance: string;
  public componentes: string;
  public duracao: string;
  public danos: Array<DanoResponse>;

  constructor(params: Partial<MagiaResponse>) {
    this.nome = params.nome;
    this.descricao = params.descricao;
    this.circulo = params.circulo;
    this.tempoConjuracao = params.tempoConjuracao;
    this.alcance = params.alcance;
    this.componentes = params.componentes;
    this.duracao = params.duracao;
    this.danos = params.danos;
  }
}
