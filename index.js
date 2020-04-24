const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/dev');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/auth-routes');
const playlistRoutes = require('./routes/playlist-routes');

mongoose.connect(process.env.MONGODB_URI || keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/api/playlists', playlistRoutes);

if (process.env.NODE_EMV === 'production') {
	app.use(express.static('client/build'));

	// app.get('*', (req, res) => {
	// 	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	// });
}

const port = process.env.PORT || 5000;

app.listen(port);
