import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Song from './Song';
import { useEffect } from 'react';
import { resetSongs } from '../actions/songs';
import SongsFilter from './SongsFilter';
import { searchSongsFilter } from '../selectors/songs';
import Spinner from './Spinner';

const Songs = () => {
	const dispatch = useDispatch();
	const totalSongs = useSelector((state) => state.songs.songs);
	const filteredSongs = useSelector(searchSongsFilter);
	const isLoading = useSelector((state) => state.songs.loading);
	const hiddenSongs = totalSongs.length - filteredSongs.length;

	useEffect(() => {
		dispatch(resetSongs());
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
			<Spinner show={isLoading} />
			{!isLoading && (
				<h3>
					{filteredSongs.length === 0
						? 'No songs were found, try again.'
						: 'Songs found: '}
				</h3>
			)}
			{!isLoading && totalSongs.length > 0 && (
				<SongsFilter playlistsFilter={false} />
			)}
			<br />
			{hiddenSongs > 0 && <p>Number of hidden songs: {hiddenSongs}</p>}
			{filteredSongs.map((song) => {
				return (
					<div className='row'>
						<Song {...song} key={song.id} />;
					</div>
				);
			})}
		</div>
	);
};

export default Songs;
