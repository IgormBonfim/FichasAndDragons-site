import { CaracteristicaResponse } from 'src/app/shared/models/responses/caracteristica.response';
import { ClasseResponse } from 'src/app/shared/models/responses/classe.response';
import { InformacoesResponse } from 'src/app/shared/models/responses/informacoes.response';
import { ItemResponse } from 'src/app/shared/models/responses/item.response';
import { MagiaResponse } from 'src/app/shared/models/responses/magia.response';
import { PersonalidadeResponse } from 'src/app/shared/models/responses/personalidade.response';
import { ProficienciaResponse } from 'src/app/shared/models/responses/proficiencia.response';
import { StatusResponse } from 'src/app/shared/models/responses/status.response';
import { VidaResponse } from 'src/app/shared/models/responses/vida.response';

export class PersonagemResponse {
  public id: string;
  public nome: string;
  public jogador: string;
  public vida: VidaResponse;
  public classe: ClasseResponse;
  public informacoes: InformacoesResponse;
  public personalidade: PersonalidadeResponse;
  public status: StatusResponse;
  public proficiencias: Array<ProficienciaResponse>;
  public caracteristicas: Array<CaracteristicaResponse>;
  public equipamentos: Array<ItemResponse>;
  public magias: Array<MagiaResponse>;
  public inspirado: boolean;
  public dataCriacao: Date;
  public dataEdicao: Date;

  constructor(params: Partial<PersonagemResponse>) {
    this.id = params.id;
    this.nome = params.nome;
    this.jogador = params.jogador;
    this.vida = params.vida;
    this.classe = params.classe;
    this.informacoes = params.informacoes;
    this.personalidade = params.personalidade;
    this.status = params.status;
    this.proficiencias = params.proficiencias;
    this.caracteristicas = params.caracteristicas;
    this.equipamentos = params.equipamentos;
    this.magias = params.magias;
    this.inspirado = params.inspirado;
    this.dataCriacao = params.dataCriacao;
    this.dataEdicao = params.dataEdicao;
  }
}
