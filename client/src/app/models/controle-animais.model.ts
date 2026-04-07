export class ControleAnimais {
  constructor(
    public id?: number,
    public data?: Date,
    public quantidade_vivos?: number,
    public quantidade_mortos?: number,
    public quantidade_defeituoso?: number,
    public lote_id?: number
  ) {}
}
