const User = require('../models/User')

module.exports = {
    async cadastrar(req, res){
        await User.create({
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password,
        }).then(() => {
            //res.send('Funcionou!')
        }).catch((erro) => {
            res.send('Deu ruim! deu ruim por causa disso: ' + erro)
        })
    },
    async listarUsers(req, res){
        await User.findAll({
            attributes: ['id', 'nome', 'email'],
        }).then((users) => {
            const response = users
            res.json(response)
        }).catch((erro) => {
            res.send('Deu ruim! deu ruim por causa disso: ' + erro)
        })
    },
    async atualizarUser(req, res){
        await User.update({
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password,
        },{
            where:{
                id: req.body.id,
            },
        }).then(() => {
            //res.send('Funcionou!')
        }).catch((erro) => {
            res.send('Deu ruim! deu ruim por causa disso: ' + erro)
        })
    },
}