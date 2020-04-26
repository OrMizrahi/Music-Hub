const mongoose = require('mongoose');
const User = mongoose.model('users');
const router = require('express').Router();

router.post('/create', async (req, res) => {
	const { authID, playlists } = req.user;
	const { name, description, songs } = req.body;

	//add an id with uuiv4
	const playlist = {
		name,
		description,
		songs,
	};
	await User.findOneAndUpdate(
		{ authID },
		{ playlists: [...playlists, playlist] },
		{ new: true }
	);
	res.send(playlist);
});

router.get('/', async (req, res) => {
	const { authID } = req.user;
	const user = await User.findOne({ authID });
	res.send(user.playlists);
});

router.delete('/delete/:name', async (req, res) => {
	const { authID, playlists } = req.user;
	const playlistNameToDelete = req.params.name;
	let updatedPlaylists;

	if (playlists.length === 1) {
		updatedPlaylists = [];
	} else {
		updatedPlaylists = playlists.filter(
			(playlist) => playlist.name !== playlistNameToDelete
		);
	}

	await User.findOneAndUpdate(
		{ authID },
		{ playlists: updatedPlaylists },
		{ new: true }
	);

	res.status(200).send('delete succedded');
});

router.post('/songs/add', async (req, res) => {
	const { authID, playlists } = req.user;
	const { name, artist, preview, artistImage, playlist } = req.body;

	const updatedPlaylists = playlists.map((playlist1) => {
		if (playlist1.name === playlist) {
			if (!playlist1.songs.some((el) => el.name === name)) {
				playlist1.songs.push({
					name,
					artist,
					preview,
					artistImage,
				});
			}
		}
		return playlist1;
	});

	await User.findOneAndUpdate(
		{ authID },
		{ playlists: updatedPlaylists },
		{ new: true }
	);

	res.status(200).send(updatedPlaylists);
});

router.post('/songs/remove', async (req, res) => {
	const { authID, playlists } = req.user;
	const { songName, playlistName } = req.body;

	const updatedPlaylists = playlists.map((playlist1) => {
		if (playlist1.name === playlistName) {
			playlist1.songs = playlist1.songs.filter(
				(song) => song.name !== songName
			);
			return playlist1;
		}
	});

	await User.findOneAndUpdate(
		{ authID },
		{ playlists: updatedPlaylists },
		{ new: true }
	);

	res.status(200).send(updatedPlaylists);
});

router.post('/edit', async (req, res) => {
	const { authID, playlists } = req.user;
	const { newName, newDescription, oldName } = req.body;

	const updatedPlaylists = playlists.map((playlist1) => {
		if (playlist1.name === oldName) {
			playlist1 = {
				...playlist1,
				name: newName,
				description: newDescription,
			};
		}
		return playlist1;
	});

	await User.findOneAndUpdate(
		{ authID },
		{ playlists: updatedPlaylists },
		{ new: true }
	);

	res.status(200).send(updatedPlaylists);
});

module.exports = router;
