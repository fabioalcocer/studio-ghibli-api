const {
	getAllFilms,
	postFilm,
	getFilm,
	updateFilm,
	deleteFilm,
} = require('../controllers/controllerFilms')
const express = require('express')
const routs = express.Router()

routs.get('/films', getAllFilms)
routs.get('/films/:id', getFilm)
routs.post('/films', postFilm)
routs.put('/films/:id', updateFilm)
routs.delete('/films/:id', deleteFilm)

module.exports = routs
