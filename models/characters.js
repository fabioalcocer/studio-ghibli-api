const mongoose = require('mongoose')

const characters = new mongoose.Schema({
	name: String,
	age: Number,
	gender: String,
	url: { type: String },
	films: [String],
})

module.exports = mongoose.model('characters', characters)
