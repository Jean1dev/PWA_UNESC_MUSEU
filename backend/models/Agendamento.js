module.exports = (sequelize, DataTypes) => {
  const Agendamento = sequelize.define('Agendamento', {
    id_Agendamento: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      autoIncrement: true
    },
    instituicao: DataTypes.STRING(60),
    telefone: DataTypes.STRING(15),
    telefone_secundario: DataTypes.STRING(15),
    email: DataTypes.STRING(45),
    data_visita: DataTypes.DATE(),
    numero_visitantes: DataTypes.INTEGER(),
    turno: DataTypes.STRING(15),
    responsavel_visita: DataTypes.STRING(80),
    cnpj: DataTypes.STRING(14)
  })

  Agendamento.associate = function(models){
    
  }

  return Agendamento
}
