module.exports = (sequelize, DataTypes) => {
  const animais = sequelize.define('animais', {

    id_animais: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true
    },
    nome_animal: DataTypes.STRING(45),
    nome_cientifico: DataTypes.STRING(45),
    ordem_animal: DataTypes.STRING(45),
    familia_animal: DataTypes.STRING(45),
    descricao: DataTypes.STRING(255),
    distribuicao: DataTypes.STRING(255),
    descricao_geografica: DataTypes.STRING(255),
    habito_alimentar: DataTypes.STRING(255),
    producao: DataTypes.STRING(200),
    periodo_vida: DataTypes.STRING(200),
    habitat: DataTypes.STRING(200)
  })

  animais.associate = function (models) {
    animais.belongsTo(models.info_museu)
  }

  return animais
}
