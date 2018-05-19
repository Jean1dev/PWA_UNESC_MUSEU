module.exports = (sequelize, DataTypes) => {
    const Foto = sequelize.define('Foto', {

    id_foto: {
            type: DataTypes.INTEGER(),
            primaryKey: true
        },
        end_foto: DataTypes.STRING(80),
    })

    Foto.associate = function(models) {
        Foto.belongsTo(models.info_museu)
    }

    return Foto
}