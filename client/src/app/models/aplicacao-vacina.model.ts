export class AplicacaoVacina {
  constructor(
    public id?: number,
    public data_aplicacao?: Date,
    public observacao?: string,
    public lote_id?: number,
    public vacina_id?: number
  ) {}
}
