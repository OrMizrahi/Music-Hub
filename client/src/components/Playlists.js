import React from 'react';
import Playlist from './Playlist';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPlaylists } from '../actions';
import SongsFilter from './SongsFilter';
import { playlistsFilter } from '../selectors/songs';

const Playlists = () => {
	const playlists = useSelector((state) => state.playlists);
	const filteredPlaylists = useSelector(playlistsFilter);
	const hiddenPlaylists = playlists.length - filteredPlaylists.length;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPlaylists());
	}, [dispatch]);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div style={{ display: 'flex', alignItems: 'baseline' }}>
				<h4>
					{filteredPlaylists.length === 0
						? 'No playlists to show'
						: 'My playlists: '}
					<br />
				</h4>
				<SongsFilter playlistsFilter={true} />
			</div>
			{hiddenPlaylists > 0 && (
				<p>Number of hidden playlists: {hiddenPlaylists}</p>
			)}
			<br />
			{filteredPlaylists.map((playlist, index) => {
				return <Playlist {...playlist} id={index} key={index} />;
			})}
		</div>
	);
};

export default Playlists;
