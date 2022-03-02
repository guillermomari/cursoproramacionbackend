const { listadoUsuarios } = require("../data/usuarios");

async function listadoUsuarioscontroller(req, res) {
 
  const resultado = await listadoUsuarios();
  return res.send(
    {
        message: "Listado de usuarios",
        resultado: resultado
      }
  )
  
}

module.exports = {
  listadoUsuarioscontroller,
};