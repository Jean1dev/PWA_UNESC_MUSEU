const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const queryParser = require('express-query-int')
const {sequelize} = require('../models')
const config = require('./databases/db')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

sequelize.sync().then(() =>{
    server.listen(config.port, function(){
        console.log(`Server rodando na porta: ${config.port}`)
    })
})


module.exports = server