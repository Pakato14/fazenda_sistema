export class Lote {
  constructor(
    public id?: number,
    // public numero_registro?: string,
    public animal_id?: number,
    public nome_lote?: string,
    public data_nascimento?: Date,
    public quntidade_inicial?: number,
    public valor_cabeca?: number,
    public observacao?: string
  ) {}
}
