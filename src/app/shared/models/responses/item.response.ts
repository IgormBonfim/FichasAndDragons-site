import { DanoResponse } from "src/app/shared/models/responses/dano.response";

export class ItemResponse {
  public nome: string;
  public descricao: string;
  public danos: Array<DanoResponse>;

  constructor(params: Partial<ItemResponse>) {
    this.nome = params.nome;
    this.descricao = params.descricao;
    this.danos = params.danos;
  }
}
