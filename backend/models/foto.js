module.exports = (sequelize, DataTypes) => {
    const foto = sequelize.define('foto', {

        id_foto: {
            type: DataTypes.INTEGER(),
            primaryKey: true
        },
        end_foto: DataTypes.STRING(80),
    })

    foto.associate = function(models) {
        foto.belongsTo(models.info_museu)
      }

    return foto
}