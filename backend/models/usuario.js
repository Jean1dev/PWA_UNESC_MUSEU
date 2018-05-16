module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    id_usuario: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true
    },
    nome_usuario: DataTypes.STRING(80),
    email: DataTypes.STRING(45),
    senha_usuario: DataTypes.STRING(45)
  })

  usuario.associate = function (models) {
    usuario.belongsTo(models.info_museu)
  }

  return usuario
}
