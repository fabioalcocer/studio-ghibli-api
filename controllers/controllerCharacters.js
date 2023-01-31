const modelCharacters = require('../models/characters')

// Todos
const getAllCharacters = async (req, res) => {
	const allCharacters = await modelCharacters.find()
	res.status(200).json(allCharacters)
}

// Obtener
const getCharacter = async (req, res) => {
	try {
		const getDataCharacter = await modelCharacters.findById(req.params.id)
		res.status(200).json(getDataCharacter)
	} catch (error) {
		res.status(404).json({
			error: 'El personaje no se ha encontrado, id incorrecto',
		})
	}
}

// Enviar
const sendCharacters = async (req, res) => {
	try {
		const body = req.body
		const newCharacter = await new modelCharacters(body)
		const data = await newCharacter.save()
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({
			error: error.message,
		})
	}
}

// Actualizar
const updateCharacter = async (req, res) => {
	try {
		const getDataCharacter = await modelCharacters.findByIdAndUpdate(
			req.params.id,
			req.body
		)
		res.status(200).json(getDataCharacter)
	} catch (error) {
		res.status(400).json({
			error: 'El personaje no se pudo actualizar',
		})
	}
}

// Eliminar
const deleteCharacter = async (req, res) => {
	try {
		const getDataCharacter = await modelCharacters.findByIdAndDelete(
			req.params.id
		)
		res.status(200).json(getDataCharacter)
	} catch (error) {
		res.status(400).json({
			error: 'El personaje no se pudo eliminar',
		})
	}
}

module.exports = {
	getAllCharacters,
	sendCharacters,
	getCharacter,
	updateCharacter,
	deleteCharacter,
}
