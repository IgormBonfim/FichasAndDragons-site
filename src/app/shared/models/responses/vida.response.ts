export class VidaResponse {
  public pontosVida: number;
  public pontosVidaAtual: number;
  public pontosVidaMaximo: number;
  public pontosVidaTemporario: number;

  constructor(params: Partial<VidaResponse>) {
    this.pontosVida = params.pontosVida;
    this.pontosVidaAtual = params.pontosVidaAtual;
    this.pontosVidaMaximo = params.pontosVidaMaximo;
    this.pontosVidaTemporario = params.pontosVidaTemporario
  }
}
