module.exports = (sequelize, DataTypes) => {
    const animais_has_foto = sequelize.define('animais_has_foto', {
    })
  
    animais_has_foto.associate = function(models) {
      animais_has_foto.belongsTo(models.animais)
      animais_has_foto.belongsTo(models.foto)
    }
  
    return animais_has_foto
  }
  