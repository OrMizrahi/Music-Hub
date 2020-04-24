import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { removeSongFromPlaylist } from '../actions/playlist';

const PlaylistSong = ({ name, artist, preview, artistImage, playlistName }) => {
	const dispatch = useDispatch();

	const onRemoveFromPlaylist = () => {
		dispatch(removeSongFromPlaylist(name, playlistName));
	};

	return (
		<div>
			<h4>title: {name}</h4>
			<p>artist: {artist}</p>
			<img src={artistImage} alt='' />
			<audio controls>
				<source src={preview} type='audio/mpeg' />
				Your browser does not support the audio element.
			</audio>
			<Button color='success' onClick={onRemoveFromPlaylist}>
				Remove
			</Button>
			<br />
		</div>
	);
};

export default PlaylistSong;
