import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button } from 'reactstrap';
import { addSongToPlaylist, fetchPlaylists } from '../actions/playlist';
import { useEffect } from 'react';

const Song = ({ title, artist, preview }) => {
	const playlists = useSelector((state) => state.playlists);
	const [playlist, setPlaylist] = useState('');
	const dispatch = useDispatch();

	const onPickPlaylist = (event) => {
		event.persist();
		setPlaylist(event.target.value);
	};

	const onAddToPlaylist = () => {
		dispatch(
			addSongToPlaylist({
				name: title,
				artist: artist.name,
				artistImage: artist.picture_medium,
				preview,
				playlist,
			})
		);
	};

	useEffect(() => {
		dispatch(fetchPlaylists());
	}, [dispatch]);

	return (
		<div>
			<p>title: {title}</p>
			<p>artist: {artist.name}</p>
			<img src={artist.picture_small} alt='' />
			<label htmlFor='playlists'>add to a playlist: </label>
			<select name='playlists' onChange={onPickPlaylist}>
				<option value='' selected disabled hidden>
					Choose here
				</option>
				{playlists.length > 0 &&
					playlists.map((playlist) => {
						return (
							<option value={playlist.name} key={playlist.name}>
								{playlist.name}
							</option>
						);
					})}
			</select>
			<audio controls>
				<source src={preview} type='audio/mpeg' />
				Your browser does not support the audio element.
			</audio>
			<Button color='success' onClick={onAddToPlaylist}>
				add
			</Button>
			<br />
			<br />
			<br />
		</div>
	);
};

export default Song;
