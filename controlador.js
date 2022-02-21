const Sequelize = require("sequelize");
const db = require("./models");
const { Op } = Sequelize;
const { sequelize } = require("./models");
const _ = require("lodash");

async function controller(req, res) {
  let roles = await traerRoles();
  return res.send(roles);
}

// TRAER TODO DE LA TABLA

async function traerRoles() {
  return await db.Roles.findAll();
}

module.exports = {
  controller,
};
