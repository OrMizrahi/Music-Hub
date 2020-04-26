import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button } from 'reactstrap';
import { addSongToPlaylist, fetchPlaylists } from '../actions/playlist';
import { useEffect } from 'react';

const Song = ({ title, artist, preview }) => {
	const playlists = useSelector((state) => state.playlists.playlists);
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
		<div className='col-sm-6' style={{ marginBottom: '10px' }}>
			<div className='card' style={{ width: '18rem' }}>
				<img
					className='card-img-top'
					src={artist.picture_medium}
					alt='Card cap'
				/>
				<div className='card-body'>
					<h5 className='card-title'>Song Name: {title}</h5>
					<p className='card-subtitle'>by: {artist.name}</p>
				</div>

				<audio controls style={{ width: 'auto' }}>
					<source src={preview} type='audio/mpeg' />
					Your browser does not support the audio element.{' '}
				</audio>
				<div className='card-body'>
					<label htmlFor='playlists'>add to a playlist: &nbsp;</label>
					<select
						name='playlists'
						className='card-link'
						onChange={onPickPlaylist}
					>
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
					<Button
						color='success'
						style={{ width: '100%' }}
						onClick={onAddToPlaylist}
					>
						add
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Song;
