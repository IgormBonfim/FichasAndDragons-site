export class PersonalidadeResponse {
  public tracoDePersonalidade: string;
  public ideais: string;
  public vinculos: string;
  public fraquezas: string;

  constructor(params: Partial<PersonalidadeResponse>) {
    this.tracoDePersonalidade = params.tracoDePersonalidade;
    this.ideais = params.ideais;
    this.vinculos = params.vinculos;
    this.fraquezas = params.fraquezas;
  }
}
