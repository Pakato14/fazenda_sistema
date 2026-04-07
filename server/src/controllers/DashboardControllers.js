const database = require("../models");

class DashboardControllers {
  static async resumoLote(req, res) {
    const loteId = req.params.loteId;
    const movimentacoes = await db.MovimentacaoAnimal.findAll({
      where: { lote_id: loteId },
    });
    let mortos = 0;
    let defeitos = 0;
    let entradas = 0;
    movimentacoes.forEach((m) => {
      if (m.tipo_movimentacao === "morte") mortos += m.quantidade;
      if (m.tipo_movimentacao === "defeito") defeitos += m.quantidade;
      if (m.tipo_movimentacao === "entrada") entradas += m.quantidade;
    });
    const lote = await db.Lote.findByPk(loteId);
    const quantidadeAtual =
      lote.quantidade_inicial + entradas - mortos - defeitos;
    const custos = await db.Custo.sum("valor", { where: { lote_id: loteId } });

    const racoes = await db.ConsumoRacao.findAll({
      where: { lote_id: loteId },
      include: [db.TipoRacao],
    });
    let custoRacao = 0;
    racoes.forEach((r) => {
      custoRacao += r.quantidade_kg * r.TipoRacao.custo_por_kg;
    });

    res.json({
      quantidadeAtual,
      mortos,
      defeitos,
      custoTotal: (custos || 0) + custoRacao,
    });
  }
}

module.exports = DashboardControllers;
