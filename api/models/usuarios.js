module.exports = (sequelize, Sequelize) => {

    const usuarios = sequelize.define("usuario", {
        id_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING
        }
    });
    return usuarios;
};
