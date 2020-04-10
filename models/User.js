const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	authID: String,
});

mongoose.model('users', userSchema);
