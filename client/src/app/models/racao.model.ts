export class Racao {
  constructor(
    public id?: number,
    public data?: Date,
    public quantidade_kg?: number,
    public lote_id?: number,
    public tipo_racao_id?: number
  ) {}
}
