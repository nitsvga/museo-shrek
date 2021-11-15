module.exports = (sequelize, Sequelize) => {

    const personajes = sequelize.define("personaje", {
        id_personaje: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
        },
        foto: {
            type: Sequelize.STRING
        },
        galeria: {
            type : Sequelize.STRING
        }
    });
    return personajes;
};