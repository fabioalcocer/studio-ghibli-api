const model = require('../models/films')

const getAllFilms = async (req, res) => {
	const films = await model.find()
	res.status(200).json(films)
}

const getFilm = async (req, res) => {
	try {
		const film = await model.findById(req.params.id)
		res.status(200).json(film)
	} catch (error) {
		res.status(404).json({
			error: 'El film no se ha encontrado, id incorrecto',
		})
	}
}

const postFilm = async (req, res) => {
	const films = new model(req.body)
	try {
		const saveData = await films.save()
		res.status(200).json(saveData)
	} catch (error) {
		res.status(500).json({
			error: error.message,
		})
	}
}

const updateFilm = async (req, res) => {
	try {
		const getDataFilm = await model.findByIdAndUpdate(req.params.id, req.body)
		res.status(200).json(getDataFilm)
	} catch (error) {
		res.status(400).json({
			error: 'El film no se pudo actualizar',
		})
	}
}
const deleteFilm = async (req, res) => {
	try {
		const deleteDataFilm = await model.findByIdAndDelete(
			req.params.id,
			req.body
		)
		res.status(200).json(deleteDataFilm)
	} catch (error) {
		res.status(400).json({
			error: 'El film no se pudo eliminar',
		})
	}
}

module.exports = { getAllFilms, postFilm, getFilm, updateFilm, deleteFilm }
