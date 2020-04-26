import React from 'react';
import { useState } from 'react';
import { addPlaylist, editPlaylist } from '../actions/playlist';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRef } from 'react';

const PlaylistForm = ({ history, match }) => {
	let isEditing = useRef();
	let playlistToEdit = useRef();
	const playlists = useSelector((state) => state.playlists.playlists);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		isEditing.current = history.location.pathname.includes('edit');
		playlistToEdit.current = isEditing.current
			? playlists[match.params.id]
			: null;
		//if its edit, get the playlist values into the form
		if (playlistToEdit.current) {
			setName(playlistToEdit.current.name);
			setDescription(playlistToEdit.current.description);
		}
		//reset form for next time page reloads, if form wasn't submitted;
		return () => {
			setName('');
			setDescription('');
		};
	}, [history.location, match.params.id, playlists]);

	const dispatch = useDispatch();

	const createForm = (e) => {
		e.preventDefault();
		if (isEditing.current) {
			dispatch(editPlaylist(name, description, playlistToEdit.current.name));
		} else {
			dispatch(addPlaylist(name, description));
		}

		history.push('/playlists');
	};

	return (
		<form onSubmit={createForm} className='pure-form'>
			<fieldset className='pure-group'>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type='text'
					className='pure-input-1-2'
					placeholder='name'
				/>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className='pure-input-1-2'
					placeholder='Add a description (optional).'
				></textarea>
			</fieldset>
			<button
				type='submit'
				className='pure-button pure-input-1-2 pure-button-primary'
			>
				{isEditing.current ? 'Edit' : 'Create'} Playlist
			</button>
		</form>
	);
};

export default PlaylistForm;
