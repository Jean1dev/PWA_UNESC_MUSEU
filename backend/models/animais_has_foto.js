module.exports = (sequelize, DataTypes) => {
  const animais_has_foto = sequelize.define('animais_has_foto', {
  })

  animais_has_foto.associate = function (models) {
    animais_has_foto.belongsTo(models.Animais)
    animais_has_foto.belongsTo(models.Foto)
  }

  return animais_has_foto
}
