import React from 'react';
import Playlist from './Playlist';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPlaylists } from '../actions';
import SongsFilter from './SongsFilter';
import { playlistsFilter } from '../selectors/songs';
import Spinner from './Spinner';

const Playlists = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPlaylists());
	}, [dispatch]);
	const playlists = useSelector((state) => state.playlists.playlists);
	const filteredPlaylists = useSelector(playlistsFilter);
	const hiddenPlaylists = playlists.length - filteredPlaylists.length;
	const isLoading = useSelector((state) => state.playlists.isLoading);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Spinner show={isLoading} />
			<div style={{ display: 'flex', alignItems: 'baseline' }}>
				{filteredPlaylists.length === 0 ? (
					<h3>No playlists to show</h3>
				) : (
					<div style={{ display: 'flex' }}>
						<h3>My playlists</h3>
					</div>
				)}
				<br />
			</div>
			{playlists.length > 0 && <SongsFilter playlistsFilter={true} />}
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
