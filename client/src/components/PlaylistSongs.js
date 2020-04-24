import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlaylistSong from './PlaylistSong';
import SongsFilter from './SongsFilter';
import { playlistSongsFilter } from '../selectors/songs';
import { fetchPlaylists } from '../actions/playlist';

const PlaylistSongs = ({ match }) => {
	const id = match.params.id;
	const currentPlaylist = useSelector((state) => state.playlists)[id];
	const playlistSongs = useSelector(playlistSongsFilter(id));

	const hiddenPlaylistSongs =
		currentPlaylist.songs.length - playlistSongs.length;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPlaylists());
	}, [dispatch, match]);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{currentPlaylist &&
				(currentPlaylist.songs.length >= 1 ? (
					<h5>
						Displaying songs for playlist: <b>{currentPlaylist.name} </b>
					</h5>
				) : (
					<h5>
						There are no songs for playlist: <b>{currentPlaylist.name} !</b>
					</h5>
				))}
			<br />
			<SongsFilter playlistsFilter={false} />
			{hiddenPlaylistSongs > 0 && (
				<p>Number of hidden songs: {hiddenPlaylistSongs}</p>
			)}
			{playlistSongs &&
				playlistSongs.map((currSong) => {
					return (
						<PlaylistSong
							{...currSong}
							playlistName={currentPlaylist.name}
							key={currSong.name}
						/>
					);
				})}
		</div>
	);
};

export default PlaylistSongs;
