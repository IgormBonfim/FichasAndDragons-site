export class ProficienciaResponse {
  public nome: string;
  public descricao: string;

  constructor(params: Partial<ProficienciaResponse>) {
    this.nome = params.nome;
    this.descricao = params.descricao;
  }
}
