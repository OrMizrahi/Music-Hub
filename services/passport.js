const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
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
		async (accessToken, refreshToken, profile, done) => {
			//maybe make this a method
			const existingUser = await User.findOne({ authID: profile.id });
			if (existingUser) {
				return done(null, existingUser);
			}
			const newUser = await new User({
				authID: profile.id,
				name: profile.displayName,
				image: profile.photos[0].value,
			}).save();
			done(null, newUser);
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			callbackURL: '/auth/facebook/redirect',
			proxy: true,
			profileFields: ['id', 'displayName', 'photos', 'email'],
		},
		async (accessToken, refreshToken, profile, done) => {
			//maybe make this a method
			const existingUser = await User.findOne({ authID: profile.id });
			if (existingUser) {
				return done(null, existingUser);
			}
			const newUser = await new User({
				authID: profile.id,
				name: profile.displayName,
				image: profile.photos[0].value,
			}).save();
			done(null, newUser);
		}
	)
);
