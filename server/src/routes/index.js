const express = require("express");
const user = require("./userRoutes");
const empresa = require("./empresaRoutes");
const animal = require("./animalsRoutes");
const audit = require("./auditRoutes");

module.exports = (app) => {
  app.use(express.json(), express.urlencoded({ extended: false }), user,
            empresa, animal, audit);
};
