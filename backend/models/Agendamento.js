module.exports = (sequelize, DataTypes) => {
    const agendamento = sequelize.define('agendamento', {
      id_agendamento: {
          type: DataTypes.INTEGER(),
          primaryKey : true,
          autoIncrement: true
        },
      instituicao: DataTypes.STRING(60),
      telefone: DataTypes.STRING(15),
      telefone_secundario: DataTypes.STRING(15),
      email: DataTypes.STRING(45),
      data_visita: DataTypes.DATE(20),
      numero_de_visitantes: DataTypes.INTEGER(),
      turno: DataTypes.STRING(15),
      responsavel_visita: DataTypes.STRING(80),
      cnpj: DataTypes.STRING(45),
    })
        
    return agendamento
  }