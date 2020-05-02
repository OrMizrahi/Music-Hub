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
		<div style={{ backgroundColor: '#344a72' }}>
			<div style={{ margin: '30px auto', maxWidth: '550px', padding: '10px' }}>
				<div style={{ padding: '15px 25px', background: 'white' }}>
					<form onSubmit={createForm}>
						<label
							style={{
								display: 'block',
								marginBottom: '3px',
							}}
							htmlFor='name'
						>
							Name
						</label>
						<input
							style={{ width: '100%', padding: '8px', borderRadius: '1px' }}
							value={name}
							onChange={(e) => setName(e.target.value)}
							type='text'
							id='name'
						/>
						<label
							style={{
								display: 'block',
								marginBottom: '3px',
								marginTop: '10px',
							}}
							htmlFor='description'
						>
							Description
						</label>
						<textarea
							style={{ width: '100%', borderRadius: '2px' }}
							value={description}
							id='description'
							rows='5'
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
						<button
							style={{
								marginTop: '5px',
								display: 'block',
								width: '100%',
								backgroundColor: '#49c1a2',
								color: 'white',
								padding: '5px 0',
								marginBottom: '8px',
								cursor: 'pointer',
							}}
							type='submit'
						>
							{isEditing.current ? 'Edit' : 'Create'} Playlist
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PlaylistForm;
