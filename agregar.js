const Sequelize = require("sequelize");
const db = require("./models");
const { Op } = Sequelize;
const { sequelize } = require("./models");
const _ = require("lodash");

async function agregar(req, res) {
  const data = req.body;
  await database(data.nombre, data.contrasena, data.rol);
  await agregarRol(data.rolename, data.habilitado);
  res.send({
    message: "Registro creado" + data.nombre,
  });
}
//FORMA CON RAW QUERY

async function database(nombre, contrasena, rol) {
  const users = await db.sequelize.query(
    "INSERT INTO usuarios (nombre, contrasena, rol) VALUES (:nombre, :contrasena, :rol)",
    {
      replacements: {
        nombre,
        contrasena,
        rol,
      },
      type: sequelize.QueryTypes.INSERT,
    }
  );
}

//FORMA CON ORM
async function agregarRol(rolename, habilitado) {
  await db.Roles.create({ rolename: rolename, habilitado: habilitado });
}





module.exports = {
  agregar
};
