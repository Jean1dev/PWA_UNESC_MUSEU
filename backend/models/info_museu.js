module.exports = (sequelize, DataTypes) => {
  const info_museu = sequelize.define('info_museu', {

  id_info_museu: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true
    },
    categoria: DataTypes.STRING(45),
    local: DataTypes.STRING(45),
    data_fundacao: DataTypes.DATE
  })

  info_museu.associate = function(models){
    
  }

  return info_museu
}
