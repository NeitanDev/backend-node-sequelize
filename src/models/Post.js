const connection = require('../database/connection')

const Post = connection.sequelize.define('posts', {
    title: {
        type: connection.Sequelize.STRING,
    },
    coutent: {
        type: connection.Sequelize.STRING,
    },
    likes: {
        type: connection.Sequelize.INTEGER
    },
    id_user: {
        type: connection.Sequelize.INTEGER,
    }
});

//Post.sync({force: true})

module.exports = Post