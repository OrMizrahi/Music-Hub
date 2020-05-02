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
		<div
			style={{
				background: 'white',
				padding: '10px 20px',
				width: '40%',
				height: '40%',
				borderRadius: '5px',
			}}
		>
			<div style={{ textAlign: 'center', marginTop: '10px' }}>
				<Link to={`/playlist/songs/${id}`}>
					<h5 style={{ width: '100%' }}>playlist name: {name}</h5>
					<p>description: {description}</p>
				</Link>
				<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
					<button
						style={{
							background: 'orangeRed',
							color: 'white',
							border: 'none',
							padding: '5px 10px',
						}}
						onClick={onDeletePlayList}
					>
						Delete Playlist
					</button>
					<Link
						style={{
							background: 'green',
							color: 'white',
							textDecoration: 'none',
							padding: '5px 10px',
						}}
						to={`/playlist/edit/${id}`}
					>
						Edit Playlist
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Playlist;
