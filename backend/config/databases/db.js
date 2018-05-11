const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'museudb',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'obscure1',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || '127.0.0.1'
    }
  }
}


//Config do banco
/*var sequelize = new Sequelize('neura_bd_teste', 'user_test_bd', 'obscure1', {
    host: `mysql857.umbler.com`,
    port: 41890,
    dialect: 'mysql'
});

/*sequelize.authenticate().complete(function (err) {
    if (err) {
       console.log('deu pau');
    } else {
       console.log('connected');
    }
 });*/