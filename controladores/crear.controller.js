const { creacionUsuarios } = require("../data/usuarios");

async function creacionUsuarioscontroller(req, res) {
  const { nombree, apellido, email, password } = req.body;

  await creacionUsuarios(nombree, apellido, email, password);
  return res.send(
    {
        message: "Usuario creado con exito",
      }
  )
  
}

module.exports = {
  creacionUsuarioscontroller,
};
