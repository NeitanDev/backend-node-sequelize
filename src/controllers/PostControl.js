const Post = require('../models/Post')
//const User = require('../models/User')
const connection = require('../database/connection')

module.exports = {
    async listarPost(req, res){
        await connection.sequelize.query("SELECT title, coutent, nome, posts.id FROM posts, users WHERE users.id = posts.id_user ORDER BY posts.id DESC", { type: connection.sequelize.QueryTypes.SELECT })
        .then((post) => {
            res.json(post)
            //console.log({post: post})
        })
    },
    async criarPost(req, res){
        await Post.create({
            title: req.body.title,
            coutent: req.body.coutent,
            //likes: 0,
            id_user: req.body.id_user,
        }).then(() => {
            //res.send(req.body.title +" "+ req.body.coutent +" "+ req.body.id_user)
        })
    },

}