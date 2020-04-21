import React from 'react';
import Playlist from './Playlist';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPlaylists } from '../actions';

const Playlists = () => {
	const playlists = useSelector((state) => state.playlists);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPlaylists());
	}, [dispatch]);

	return (
		<div>
			<h3>
				{playlists.length === 0 ? 'No playlists to show' : 'My playlists: '}
				<br />
				<br />
			</h3>
			{playlists.map((playlist, index) => {
				return <Playlist {...playlist} id={index} key={index} />;
			})}
		</div>
	);
};

export default Playlists;
