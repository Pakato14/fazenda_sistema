const database = require("../models");

class DashboardControllers {
  static async resumoGeral(req, res) {
    try {
      // Buscar todos os lotes
      const lotes = await database.lote.findAll();

      let quantidadeInicial = 0;
      let entradas = 0;
      let mortos = 0;
      let defeitos = 0;

      // Soma quantidade inicial dos lotes
      lotes.forEach((lote) => {
        quantidadeInicial += lote.quantidade_inicial || 0;
      });

      // Buscar todas movimentações
      const movimentacoes = await database.movimentacao_animal.findAll();

      movimentacoes.forEach((m) => {
        if (m.tipo_movimentacao === 'entrada') {
          entradas += m.quantidade;
        }

        if (m.tipo_movimentacao === 'morte') {
          mortos += m.quantidade;
        }

        if (m.tipo_movimentacao === 'defeito') {
          defeitos += m.quantidade;
        }
      });

      // Quantidade atual geral
      const quantidadeAtual =
        quantidadeInicial + entradas - mortos - defeitos;

      // Soma custos gerais
      const custos = await database.custo.sum('valor');

      // Buscar consumo de ração com tipo de ração
      const racoes = await database.consumo_racao.findAll({
        include: [
          {
            association: "ass_consumo_racao_racao",
            attributes: ["tipo_racao", "custo_por_kg"],
          }]
      });

      let custoRacao = 0;

      racoes.forEach((r) => {
        const custoKg = r.racao?.custo_por_kg || 0;
        custoRacao += Number(r.quantidade_kg) * Number(custoKg);
      });

      return res.json({
        quantidadeAtual,
        quantidadeInicial,
        entradas,
        mortos,
        defeitos,
        custoTotal: Number(custos || 0) + custoRacao
      });

    } catch (error) {
      console.error('Erro ao gerar resumo geral:', error);

      return res.status(500).json({
        message: 'Erro ao gerar resumo geral',
        error: error.message
      });
    }
  }
}

module.exports = DashboardControllers;
