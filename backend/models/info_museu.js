module.exports = (sequelize, DataTypes) => {
  const Museu = sequelize.define('info_museu', {

  id_info_museu: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true
    },
    categoria: DataTypes.STRING(45),
    local: DataTypes.STRING(45),
    data_fundacao: DataTypes.DATE
  })

  Museu.associate = function(models){
    
  }

  return Museu
}
