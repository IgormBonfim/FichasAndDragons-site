export class DadoResponse {
  public tipoDado: string;
  public quantidadeDados: number;

  constructor(params: Partial<DadoResponse>) {
    this.tipoDado = params.tipoDado;
    this.quantidadeDados = params.quantidadeDados;
  }
}
