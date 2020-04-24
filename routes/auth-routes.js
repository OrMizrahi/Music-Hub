const passport = require('passport');
const router = require('express').Router();

router.get(
	'/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

router.get(
	'/google/redirect',
	passport.authenticate('google', { failureRedirect: '/' }),
	(req, res) => {
		res.redirect('/dashboard');
	}
);

router.get('/facebook', passport.authenticate('facebook'));

router.get(
	'/facebook/redirect',
	passport.authenticate('facebook', { failureRedirect: '/' }),
	(req, res) => {
		res.redirect('/dashboard');
	}
);

router.get('/twitter', passport.authenticate('twitter'));

router.get(
	'/twitter/redirect',
	passport.authenticate('twitter', { failureRedirect: '/' }),
	(req, res) => {
		res.redirect('http://localhost:3000/dashboard');
	}
);

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.get('/current_user', (req, res) => {
	res.send(req.user);
});

module.exports = router;
