const express = require("express");
const user = require("./userRoutes");
const empresa = require("./empresaRoutes");
const operacional = require("./operacionalRoutes");
const dashboard = require("./dashboardRoutes");
const audit = require("./auditRoutes");
const fornecedor = require("./fornecedorRoutes");
const racao = require("./racaoRoutes");

module.exports = (app) => {
  app.use(express.json(), express.urlencoded({ extended: false }), user,
            empresa, operacional, dashboard, audit, fornecedor, racao);
};
