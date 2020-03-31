const Sequelize = require('sequelize')

const sequelize = new Sequelize( 'db_discord', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!')
}).catch((erro) => {
    console.log('Falha na conexão'+erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}