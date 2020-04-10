const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GoogleStratergy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/redirect',
			proxy: true,
		},
		(accessToken, refreshToken, profile, done) => {
			//maybe make this a method
			User.findOne({ authID: profile.id }).then((existingUser) => {
				if (existingUser) {
					done(null, existingUser);
				} else {
					new User({ authID: profile.id }).save().then((user) => {
						done(null, user);
					});
				}
			});
		}
	)
);
