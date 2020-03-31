const connection = require('../database/connection')

const User = connection.sequelize.define('user', {
    nome: {
        type: connection.Sequelize.STRING,
    },
    email: {
        type: connection.Sequelize.STRING
    },
    password: {
        type: connection.Sequelize.STRING
    },
});

//User.sync({force: true})

module.exports = User