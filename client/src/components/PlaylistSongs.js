import React from 'react';
import { useSelector } from 'react-redux';
import PlaylistSong from './PlaylistSong';

const PlaylistSongs = ({ match }) => {
	const playlist = useSelector((state) => state.playlists)[match.params.id];

	return (
		<div>
			{playlist &&
				(playlist.songs.length >= 1 ? (
					<h5>
						Displaying songs for playlist: <b>{playlist.name} </b>
					</h5>
				) : (
					<h5>
						There are no songs for playlist: <b>{playlist.name} !</b>
					</h5>
				))}
			{playlist &&
				playlist.songs.map((currSong) => {
					return (
						<PlaylistSong
							{...currSong}
							playlistName={playlist.name}
							key={currSong.name}
						/>
					);
				})}
		</div>
	);
};

export default PlaylistSongs;
