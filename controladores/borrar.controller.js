const { borarUsuario } = require("../data/usuarios");

async function borradoUsuarioscontroller(req, res) {
  const { id } = req.query;

  await borarUsuario(id);
  return res.send(
    {
        message: "Usuario borrado con exito",
      }
  )
  
}

module.exports = {
  borradoUsuarioscontroller,
};