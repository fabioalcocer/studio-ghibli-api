require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const mongoDBenv = process.env.DATABASE_URL
const port = process.env.PORT

const app = express()
mongoose.connect(mongoDBenv)

const database = mongoose.connection
database.on('error', (e) => {
	console.log(e)
})
database.once('connected', () => {
	console.log('Conectado a MongoDB')
})

app.use(
	cors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
)
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
	respuesta = {
		error: false,
		codigo: 200,
		mensaje: 'Servidor Activo',
	}
	res.send(respuesta)
})

app.use('/', require('./routes/filmsRoute'))
app.use('/', require('./routes/charactersRoute'))

app.listen(port, () => {
	console.log(`Servidor a la escucha en ${port}`)
})
