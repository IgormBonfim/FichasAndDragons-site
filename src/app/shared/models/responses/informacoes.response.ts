export class InformacoesResponse {
  public idade: number;
  public altura: number;
  public peso: number;
  public corOlhos: string;
  public corPele: string;
  public corCabelo: string;
  public descricao: string;
  public historia: string;
  public antecedente: string;
  public alinhamento: string;

  constructor(params: Partial<InformacoesResponse>) {
    this.idade = params.idade;
    this.altura = params.altura;
    this.peso = params.peso;
    this.corOlhos = params.corOlhos;
    this.corPele = params.corPele;
    this.corCabelo = params.corCabelo;
    this.descricao = params.descricao;
    this.historia = params.historia;
    this.antecedente = params.antecedente;
    this.alinhamento = params.alinhamento;
  }
}
