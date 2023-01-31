const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')

const {
	getAllCharacters,
	sendCharacters,
	getCharacter,
	updateCharacter,
	deleteCharacter,
} = require('../controllers/controllerCharacters')

route.get('/characters', getAllCharacters)

route.get('/characters/:id', getCharacter)

route.put('/characters/:id', updateCharacter)

route.delete('/characters/:id', deleteCharacter)

route.post('/characters', sendCharacters)

module.exports = route
