export class TipoRacao {
  constructor(
    public id?: number,
    public nome?: string,
    public descricao?: string,
    public custo_total_kg?: number,
    public ativa?: boolean,
  ) {}
}
