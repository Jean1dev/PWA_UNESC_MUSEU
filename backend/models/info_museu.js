module.exports = (sequelize, DataTypes) => {
  const info_museu = sequelize.define('info_museu', {

    id_info_museu: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      autoIncrement: true
    },
    categoria: DataTypes.STRING(45),
    local: DataTypes.STRING(45),
    data_fundacao: DataTypes.DATE
  })

  return info_museu
}
