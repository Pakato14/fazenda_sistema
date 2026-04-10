export class ControleAnimais {
  constructor(
    public id?: number,
    public data?: Date,
    public tipo_movimentacao?: string,
    public quantidade?: number,
    public observacao?: string,
    public lote_id?: number
  ) {}
}
