const express = require("express");
const user = require("./userRoutes");
const audit = require("./auditRoutes");

module.exports = (app) => {
  app.use(express.json(), express.urlencoded({ extended: false }), user,
            audit);
};
