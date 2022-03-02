const db = require('../models');
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const { sequelize } = require('../models');

async function creacionUsuarios(nombree,apellido,email,password){

    return await db.sequelize.query(
        'INSERT INTO usuarios (nombree,apellido,email,password) VALUES (:nombree,:apellido,:email,:password)',
        {
            replacements: {
                nombree,apellido,email,password

            },
            type: sequelize.QueryTypes.INSERT
        }
    )

}

async function listadoUsuarios(){

    return await db.sequelize.query(
        'SELECT * FROM usuarios',
        {
            
            type: sequelize.QueryTypes.SELECT
        }
    )

}

async function buscarUnUsuario(id){

    return await db.sequelize.query(
        'SELECT * FROM usuarios WHERE id = :id',
        {
            replacements: {
               id

            },
            type: sequelize.QueryTypes.SELECT
        }
    )

}

async function borarUsuario(id){

    return await db.sequelize.query(
        'DELETE FROM usuarios WHERE id= :id',
        {
            replacements: {
                id

            },
            type: sequelize.QueryTypes.DELETE
        }
    )

}

module.exports = {
    creacionUsuarios,
    listadoUsuarios,
    buscarUnUsuario,
    borarUsuario
}