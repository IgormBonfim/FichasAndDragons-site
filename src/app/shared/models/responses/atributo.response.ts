export class AtributoResponse {
  public valor: number;
  public modificador: number;
  public proficiente: boolean;

  constructor(params: Partial<AtributoResponse>) {
    this.valor = params.valor;
    this.modificador = params.modificador;
    this.proficiente = params.proficiente;
  }
}
