export class CaracteristicaResponse {
  public nome: string;
  public descricao: string;

  constructor(params: Partial<CaracteristicaResponse>) {
    this.nome = params.nome;
    this.descricao = params.descricao;
  }
}
