module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id_Usuario: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true
    },
    nome_Usuario: DataTypes.STRING(80),
    email: DataTypes.STRING(45),
    senha_Usuario: DataTypes.STRING(45)
  })

  Usuario.associate = function (models) {
    Usuario.belongsTo(models.info_museu)
  }

  return Usuario
}
