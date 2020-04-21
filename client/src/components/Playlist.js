import React from 'react';
import { Link } from 'react-router-dom';
import { deletePlaylist } from '../actions/playlist';
import { useDispatch } from 'react-redux';

const Playlist = ({ name, description, id }) => {
	const dispatch = useDispatch();

	const onDeletePlayList = () => {
		dispatch(deletePlaylist(name));
		//maybe change id to name
	};

	return (
		<div>
			<Link to={`/playlist/songs/${id}`}>
				<h4>playlist name: {name}</h4>
				<p>description: {description}</p>
			</Link>
			<button onClick={onDeletePlayList}>Delete Playlist</button>
			<Link to={`/playlist/edit/${id}`}>Edit Playlist</Link>
			<br />
			<br />
		</div>
	);
};

export default Playlist;
