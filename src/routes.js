const { Router } = require('express')
const UserControl =  require('./controllers/UserControl')
const PostControl = require('./controllers/PostControl')
const routes = Router()

routes.post('/cadastrarUser', UserControl.cadastrar) // Cadastra usuario no banco de dados
routes.get('/listarUser', UserControl.listarUsers)
routes.put('/atualizarUser', UserControl.atualizarUser)
routes.get('/listarPost', PostControl.listarPost)
routes.post('/criarPost', PostControl.criarPost)

module.exports= routes