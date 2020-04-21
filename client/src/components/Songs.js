import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Song from './Song';
import { useEffect } from 'react';
import { resetSongs } from '../actions/songs';

const Songs = () => {
	const dispatch = useDispatch();
	let songs = useSelector((state) => state.songs);

	useEffect(() => {
		dispatch(resetSongs());
	}, []);

	return (
		<div>
			<h3>
				{songs.length === 0
					? 'No songs were found, try again.'
					: 'Songs found: '}
			</h3>
			{songs.map((song) => {
				return <Song {...song} key={song.id} />;
			})}
		</div>
	);
};

export default Songs;
