import { DadoResponse } from 'src/app/shared/models/responses/dado.response';

export class DanoResponse {
  public dado: DadoResponse;
  public tipo: string;

  constructor(params: Partial<DanoResponse>) {
    this.dado = params.dado;
    this.tipo = params.tipo
  }
}
