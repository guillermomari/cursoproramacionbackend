const { buscarUnUsuario } = require("../data/usuarios");

async function buscarUsuariocontroller(req, res) {
  const { id } = req.query;

  const resultado = await buscarUnUsuario(id);
  return res.send(
    {
        message: "Usuario solicitado",
        resultado: resultado
      }
  )
  
}

module.exports = {
  buscarUsuariocontroller,
};