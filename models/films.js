const mongoose = require('mongoose')
const films = new mongoose.Schema({
	title: { type: String, require: true },
	original_title: String,
	original_title_romanised: String,
	image: { type: String, require: true },
	movie_banner: String,
	description: { type: String, require: true },
	director: { type: String, require: true },
	producer: String,
	cinematography: String,
	music_by: String,
	release_date: Number,
	running_time: Number,
	rt_score: Number,
	characters: [String],
})

module.exports = mongoose.model('films', films)
