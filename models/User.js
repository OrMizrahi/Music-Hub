const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	authID: String,
	name: String,
	image: String,
	playlists: [{}],
});

mongoose.model('users', userSchema);
